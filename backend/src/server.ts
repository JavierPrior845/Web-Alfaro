import fastify from 'fastify';
import { PrismaClient, Prisma } from '@prisma/client';
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


// --- Definición de Endpoints ---

/**
 * Endpoint GET para recuperar TODAS las viviendas (obras)
 * Ruta: GET /api/viviendas
 */
app.get('/api/viviendas', async (request, reply) => {
  try {
    const viviendas = await prisma.vivienda.findMany({
      // Usamos 'include' para traer las relaciones (tablas anidadas)
      include: {
        unidades: true, // Incluye la tabla de unidades
        galeria: true,  // Incluye la galería de imágenes
      },
    });
    reply.code(200).send({ success: true, data: viviendas });
  } catch (error) {
    app.log.error(error);
    reply.code(500).send({ error: 'Error interno del servidor al obtener las viviendas.' });
  }
});

/**
 * Endpoint POST para el formulario "Solicitud de Información" (Detalle de Vivienda)
 * Ruta: POST /api/solicitud-info
 */
app.post<{ Body: SolicitudInfoBody }>('/api/solicitud-info', async (request, reply) => {
  try {
    const { nombre, telefono, email, viviendaId } = request.body;

    if (!nombre || !email || !viviendaId) {
      reply.code(400).send({ error: 'Nombre, Email y viviendaId son obligatorios.' });
      return;
    }

    const nuevaSolicitud = await prisma.solicitudInfo.create({
      data: {
        nombre: nombre,
        telefono: telefono,
        email: email,
        viviendaId: viviendaId, // Enlazamos con la vivienda
      },
    });

    app.log.info(`Solicitud de info guardada: ${nuevaSolicitud.email}`);
    reply.code(201).send({ success: true, data: nuevaSolicitud });

  } catch (error: any) {
    app.log.error(error);
    if (error.code === 'P2003') { // Foreign key constraint failed
      reply.code(404).send({ error: 'La vivienda (viviendaId) especificada no existe.' });
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
    if (error.code === 'P2002') { // Unique constraint failed
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