import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';
import cors from '@fastify/cors';

// --- INTERFACES ---

// Query Params para filtrar viviendas (ej: ?estado=venta)
interface HousingQuery {
  estado?: string;
}

// Body para el formulario de contacto
interface SolicitudInfoBody {
  nombre: string;
  telefono?: string;
  email: string;
  viviendaId: number; // ID de la vivienda
}

// Body para suscripción
interface SuscripcionBody {
  email: string;
}

// Inicialización
const app = fastify({ logger: true });
const prisma = new PrismaClient();

// Registro de CORS
app.register(cors, {
  origin: '*', 
});

// ==========================================
// ENDPOINTS: COLABS (INMOBILIARIAS)
// ==========================================
/**
 * GET /api/colabs
 * Devuelve todas las inmobiliarias y sus redes sociales.
 */
app.get('/api/colabs', async (request, reply) => {
  try {
    const colabs = await prisma.colab.findMany({
      include: {
        socialMediaLinks: true, // Incluimos las redes sociales (Instagram, etc.)
      },
    });
    return colabs; // Fastify serializa automáticamente a JSON
  } catch (error) {
    app.log.error(error);
    reply.code(500).send({ error: 'Error al obtener colaboraciones' });
  }
});

/**
 * GET /api/colabs/:id
 * Detalle de una inmobiliaria específica
 */
app.get<{ Params: { id: string } }>('/api/colabs/:id', async (request, reply) => {
  try {
    const id = parseInt(request.params.id);

    if (isNaN(id)) {
      return reply.code(400).send({ error: 'ID inválido' });
    }

    const colab = await prisma.colab.findUnique({
      where: { id },
      include: {
        socialMediaLinks: true, // Incluimos sus redes sociales
        // Opcional: Si quieres mostrar qué casas tiene esta inmobiliaria en su perfil
        // housingLocations: true 
      },
    });

    if (!colab) {
      return reply.code(404).send({ error: 'Inmobiliaria no encontrada' });
    }

    return colab;

  } catch (error) {
    app.log.error(error);
    reply.code(500).send({ error: 'Error interno al obtener la inmobiliaria' });
  }
});

// ==========================================
// ENDPOINTS: HOUSING (VIVIENDAS)
// ==========================================

/**
 * GET /api/housing
 * Lista de viviendas. Soporta filtro: /api/housing?estado=venta
 */
app.get<{ Querystring: HousingQuery }>('/api/housing', async (request, reply) => {
  try {
    const { estado } = request.query;

    // Construimos el filtro dinámicamente
    const whereClause = estado ? { estado: String(estado) } : {};

    const housings = await prisma.housingLocation.findMany({
      where: whereClause,
      orderBy: { id: 'asc' },
      include: {
        // Incluimos relaciones necesarias para la tarjeta o listado
        units: true, 
        galleryImages: true,
        realEstate: { // Traemos datos básicos de la inmobiliaria
          include: { socialMediaLinks: true }
        },
        downloadDocuments: true
      },
    });

    // TRANSFORMACIÓN DE DATOS:
    // Convertimos galleryImages de objetos [{url:'...'}] a array de strings ['...']
    const formattedResponse = housings.map((housing) => ({
      ...housing,
      galleryImages: housing.galleryImages.map((img) => img.url),
    }));

    return formattedResponse;

  } catch (error) {
    app.log.error(error);
    reply.code(500).send({ error: 'Error al obtener las viviendas' });
  }
});

/**
 * GET /api/housing/:id
 * Detalle completo de una vivienda.
 */
app.get<{ Params: { id: string } }>('/api/housing/:id', async (request, reply) => {
  try {
    const id = parseInt(request.params.id);

    if (isNaN(id)) {
      return reply.code(400).send({ error: 'ID inválido' });
    }

    const housing = await prisma.housingLocation.findUnique({
      where: { id },
      include: {
        units: true,
        downloadDocuments: true,
        galleryImages: true,
        realEstate: {
          include: { socialMediaLinks: true },
        },
      },
    });

    if (!housing) {
      return reply.code(404).send({ error: 'Vivienda no encontrada' });
    }

    // Misma transformación para las imágenes en el detalle
    const formattedHousing = {
      ...housing,
      galleryImages: housing.galleryImages.map((img) => img.url),
    };

    return formattedHousing;

  } catch (error) {
    app.log.error(error);
    reply.code(500).send({ error: 'Error interno del servidor' });
  }
});

// ==========================================
// ENDPOINTS: FORMULARIOS (POST)
// ==========================================

/**
 * POST /api/solicitud-info
 * Formulario de contacto de una vivienda específica
 
app.post<{ Body: SolicitudInfoBody }>('/api/solicitud-info', async (request, reply) => {
  try {
    const { nombre, telefono, email, viviendaId } = request.body;

    if (!nombre || !email || !viviendaId) {
      return reply.code(400).send({ error: 'Faltan campos obligatorios' });
    }

    const nuevaSolicitud = await prisma.solicitudInfo.create({
      data: {
        nombre,
        telefono,
        email,
        housingLocationId: Number(viviendaId), // Aseguramos que sea número
      },
    });

    app.log.info(`Solicitud creada para vivienda ID: ${viviendaId}`);
    return reply.code(201).send({ success: true, data: nuevaSolicitud });

  } catch (error: any) {
    app.log.error(error);
    if (error.code === 'P2003') {
      reply.code(404).send({ error: 'La vivienda indicada no existe' });
    } else {
      reply.code(500).send({ error: 'Error al guardar solicitud' });
    }
  }
});
  */
/**
 * POST /api/suscripcion
 * Footer newsletter
 
app.post<{ Body: SuscripcionBody }>('/api/suscripcion', async (request, reply) => {
  try {
    const { email } = request.body;

    if (!email) {
      return reply.code(400).send({ error: 'El email es obligatorio' });
    }

    const nuevaSuscripcion = await prisma.suscripcion.create({
      data: { email },
    });

    return reply.code(201).send({ success: true, data: nuevaSuscripcion });

  } catch (error: any) {
    app.log.error(error);
    if (error.code === 'P2002') {
      reply.code(409).send({ error: 'Este email ya está registrado' });
    } else {
      reply.code(500).send({ error: 'Error al suscribir' });
    }
  }
});*/

// --- ARRANCAR SERVIDOR ---

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log('🚀 Servidor corriendo en http://localhost:3000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();