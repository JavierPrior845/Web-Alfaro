import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';
import cors from '@fastify/cors';

// Definición de Interfaces para los cuerpos (body) de las peticiones
interface SolicitudInfoBody {
  nombre: string;
  telefono?: string;
  email: string;
  viviendaId: number; // ID de la casa que están viendo
}

interface SuscripcionBody {
  email: string;
}

// Inicializa Fastify y Prisma
const app = fastify({ logger: true });
const prisma = new PrismaClient();

// --- Configuración Esencial ---

// 1. Registro de CORS (Vital para que Angular se conecte)
app.register(cors, {
  origin: '*', // Permite todas las peticiones (para desarrollo)
});


// --- ENDPOINTS PÚBLICOS (LECTURA) ---

/**
 * Endpoint de LISTA (Rápido)
 * Devuelve solo la info necesaria para las tarjetas del Home.
 * Ruta: GET /api/viviendas
 */
app.get('/api/viviendas', async (request, reply) => {
  try {
    // Usamos el nuevo modelo 'housingLocation' (en inglés, como en el schema)
    const viviendas = await prisma.housingLocation.findMany({
      select: {
        id: true,
        name: true,           // Antes 'nombre'
        city: true,           // Antes 'ciudad'
        state: true,          // Antes 'provinciaEstado'
        photo: true,          // Antes 'fotoPrincipalUrl'
        minimunPrice: true,   // Antes 'precioMinimo'
      },
      orderBy: {
        id: 'asc'
      }
    });
    reply.code(200).send({ success: true, data: viviendas });
  } catch (error) {
    app.log.error(error);
    reply.code(500).send({ error: 'Error interno del servidor al obtener las viviendas.' });
  }
});

/**
 * Endpoint de DETALLE (Completo)
 * Devuelve UNA vivienda por ID, con TODAS sus relaciones.
 * Ruta: GET /api/viviendas/:id
 */
app.get<{ Params: { id: string } }>('/api/viviendas/:id', async (request, reply) => {
  try {
    const viviendaId = parseInt(request.params.id);

    if (isNaN(viviendaId)) {
      reply.code(400).send({ error: 'ID de vivienda inválido.' });
      return;
    }

    const vivienda = await prisma.housingLocation.findUnique({
      where: { id: viviendaId },
      include: {
        units: true,             // Tabla 'Unit'
        galleryImages: true,     // Tabla 'GalleryImage'
        downloadDocuments: true, // Tabla 'DownloadDocument'
        socialMediaLinks: true,  // Tabla 'SocialMediaLink'
      },
    });

    if (!vivienda) {
      reply.code(404).send({ error: 'Vivienda no encontrada.' });
      return;
    }

    reply.code(200).send({ success: true, data: vivienda });
  } catch (error) {
    app.log.error(error);
    reply.code(500).send({ error: 'Error interno del servidor.' });
  }
});


// --- ENDPOINTS DE ESCRITURA (FORMULARIOS) ---

/**
 * Endpoint POST para el formulario "Solicitud de Información"
 * Ruta: POST /api/solicitud-info
 */
app.post<{ Body: SolicitudInfoBody }>('/api/solicitud-info', async (request, reply) => {
  try {
    const { nombre, telefono, email, viviendaId } = request.body;

    if (!nombre || !email || !viviendaId) {
      reply.code(400).send({ error: 'Nombre, Email y viviendaId son obligatorios.' });
      return;
    }

    // Guardamos en la tabla 'SolicitudInfo'
    // Mapeamos 'viviendaId' (del frontend) a 'housingLocationId' (de la BD)
    const nuevaSolicitud = await prisma.solicitudInfo.create({
      data: {
        nombre: nombre,
        telefono: telefono,
        email: email,
        housingLocationId: viviendaId, // <-- Conexión correcta con la Foreign Key
      },
    });

    app.log.info(`Solicitud de info guardada: ${nuevaSolicitud.email}`);
    reply.code(201).send({ success: true, data: nuevaSolicitud });

  } catch (error: any) {
    app.log.error(error);
    // P2003 es el código de error de Prisma para fallo de clave foránea
    if (error.code === 'P2003') { 
      reply.code(404).send({ error: 'La vivienda especificada no existe.' });
    } else {
      reply.code(500).send({ error: 'Error interno del servidor.' });
    }
  }
});

/**
 * Endpoint POST para el formulario "Suscripción" (Footer)
 * Ruta: POST /api/suscripcion
 */
app.post<{ Body: SuscripcionBody }>('/api/suscripcion', async (request, reply) => {
  try {
    const { email } = request.body;

    if (!email) {
      reply.code(400).send({ error: 'Email es obligatorio.' });
      return;
    }

    const nuevaSuscripcion = await prisma.suscripcion.create({
      data: {
        email: email,
      },
    });

    app.log.info(`Suscripción guardada: ${nuevaSuscripcion.email}`);
    reply.code(201).send({ success: true, data: nuevaSuscripcion });

  } catch (error: any) {
    app.log.error(error);
    if (error.code === 'P2002') { 
      reply.code(409).send({ error: 'Este correo electrónico ya está suscrito.' });
    } else {
      reply.code(500).send({ error: 'Error interno del servidor.' });
    }
  }
});

// --- Lanzar el Servidor ---

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    app.log.info(`Servidor escuchando en http://localhost:3000`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();