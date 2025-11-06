# Web
# Pasos Esenciales
## 1. 📋 Planificación y Diseño (Añadido)
Definir la Estructura (Wireframe): Aunque es simple, dibuja un esquema básico de dónde irán las imágenes, la información de contacto y el formulario.
Identidad Visual: Elige paletas de color y fuentes. ¡La web es casi solo imágenes, así que la tipografía y el diseño serán clave!
## 2. 🚀 Desarrollo del Frontend (Angular/TypeScript)
Componentes: Crea componentes para la galería de edificios, el formulario de contacto y el footer (pie de página).
Diseño Responsivo: Asegúrate de que las imágenes y el diseño se vean bien en móviles y tabletas. Esto es vital.
Consumo de API: Define cómo Angular se comunicará con Fastify para enviar los datos del formulario (p. ej., a la ruta /api/contacto).
## 3. ⚙️ Desarrollo del Backend (Fastify)
API Endpoint: Crea una única ruta (POST /api/contacto) que reciba los correos electrónicos.
Almacenamiento de Datos (Añadido): Necesitas un lugar para guardar esos correos. Dado que es simple, una base de datos pequeña como SQLite, o incluso un archivo JSON seguro en el servidor, podría ser suficiente. MongoDB o PostgreSQL también son buenas opciones si quieres practicar con ellas.
Validación: Asegúrate de que el correo electrónico recibido sea válido antes de guardarlo.
## 4. 🌐 Infraestructura y Despliegue
Dominio: Comprar el nombre de la web (p. ej., inmueblesbaratos.com).
Montar en un Servidor (Hosting/VPS): Contratar un servicio (como DigitalOcean, AWS LightSail, Vultr, o un hosting compartido).
Servidor Web (Añadido): Necesitarás un servidor web delante de Fastify para servir los archivos estáticos de Angular y actuar como un reverse proxy para redirigir las peticiones de la API a Fastify. Nginx o Apache son los más comunes.
Certificado HTTPS (SSL/TLS): Configurar el certificado para que la web sea segura (https://). Let's Encrypt es la opción gratuita estándar (generalmente se configura a través de Nginx o Apache).


# Resumen de Estrategia de Ahorro
Para mantener los costes al mínimo, te recomiendo la siguiente estrategia:
Dominio: Aprovecha la oferta de primer año de algún registrador conocido (ej: Namecheap, GoDaddy, Dinahosting, etc.).
Certificado: Usa Let's Encrypt (0 €). El proceso de instalación con Nginx y certbot es un excelente ejercicio de DevOps para tu perfil.
Servidor: Opta por un VPS básico. No solo es el más barato para tus requisitos, sino que te obligará a practicar la configuración de Nginx y la base de datos, que es la parte más valiosa de tu aprendizaje.


# Siguientes pasos: 
Componente de los precios 
Componente del mapa
Descarga del PDF
Formulario solicitar información
Imagenes

