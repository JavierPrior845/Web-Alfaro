# Install
### Angular
-- Lanzar servidor ng serve
-- npm install gsap
-- npm install
### Fastify
- npm install fastify @prisma/client @fastify/cors
- npm install -D prisma typescript ts-node @types/node
- npm install @prisma/client
- npx prisma migrate dev --name "comentario"  ||  npx prisma db push //Actualizar esquema base de datos
-- Lanzar servidor npx ts-node src/server.ts || npx ts-node --esm src/server.ts

-- Cambiar esquema de base de datos
- npx prisma migrate reset
- npx prisma db push
# SQL
- sudo apt install mysql-server
- Acceder: sudo mysql -u root
## CREATE/ALTER
CREATE USER javier IDENTIFIED BY '04jpGGPJ04';
CREATE DATABASE web_alfaro;
SELECT user, host FROM mysql.user WHERE user = 'javier';
GRANT ALL PRIVILEGES ON web_alfaro.* TO 'javier'@'%';

## INSERT
-- 1. Desactivar checks de llaves foráneas para poder limpiar e insertar sin orden estricto
SET FOREIGN_KEY_CHECKS = 0;

-- 2. Limpiar tablas existentes (Reinicia los auto-increment a 1)
TRUNCATE TABLE social_media_links;
TRUNCATE TABLE gallery_images;
TRUNCATE TABLE download_documents;
TRUNCATE TABLE units;
TRUNCATE TABLE solicitudes_info;
TRUNCATE TABLE housing_locations;
TRUNCATE TABLE colabs;

-- --------------------------------------------------------
-- 3. INSERTAR COLABS (Inmobiliarias)
-- Nota: Asignamos IDs fijos (1 y 2) para referenciarlos luego
-- --------------------------------------------------------

INSERT INTO colabs (id, name, logo, website, description, address, phone, email) VALUES
(1, 'Siroco', 'assets/pdfs/fotos/Inmobiliarias/logo-sirocco.png', 'https://sirocoinmuebles.com/', 'Siroco Inmuebles combina su experiencia como arquitecto y asesor inmobiliario para ofrecer un servicio integral: valoración, marketing profesional, home staging, asesoría jurídica y fiscal, y un acompañamiento cercano en todo el proceso de compraventa, con la seguridad y la transparencia que mereces.', 'C/ Sánchez Madrigal 9, Edificio Villaleal, Bajo, 30004, Murcia, España.', '(+34) 610 89 41 63', 'info@sirocoinmuebles.com'),
(2, 'Anova Homes', 'assets/pdfs/fotos/Inmobiliarias/logo-anova.png', 'https://www.anovahomes.com/', 'Anova Homes es una inmobiliaria moderna que ofrece un servicio integral en venta y alquiler: valoración gratuita, marketing profesional, home staging, tours virtuales y gestión jurídica completa, apostando siempre por la transparencia y una atención cercana.', 'C/ Marqués de Ordoño, 1, 4A, 30002 Murcia', '(+34) 644 03 32 19', 'hola@anovahomes.com');

-- --------------------------------------------------------
-- 4. INSERTAR REDES SOCIALES (Vinculadas a Colabs)
-- --------------------------------------------------------

INSERT INTO social_media_links (nombreRedSocial, rutaArchivo, colabId) VALUES
-- Redes de Siroco (ID 1)
('Instagram', 'https://www.instagram.com/sirocoinmuebles/', 1),
('TikTok', 'https://www.tiktok.com/@sirocoinmuebles', 1),
('LinkedIn', 'https://www.linkedin.com/in/antonio-hern%C3%A1ndez-2b4a2b1a7/', 1),
-- Redes de Anova Homes (ID 2)
('Instagram', 'https://www.instagram.com/anova_homes/', 2),
('TikTok', 'https://www.tiktok.com/@anova_homes', 2),
('LinkedIn', 'https://www.linkedin.com/company/anova-inmobiliaria/', 2);

-- --------------------------------------------------------
-- 5. INSERTAR HOUSING LOCATIONS (Viviendas)
-- IDs asignados: 
-- 1: Edificio Aurora Redondo (RealEstate: Anova - ID 2)
-- 2: Edificio Barrio del Progreso (Sin RealEstate)
-- 3: Edificio Reino de Murcia (RealEstate: Siroco - ID 1)
-- --------------------------------------------------------

INSERT INTO housing_locations (id, estado, name, city, state, photo, resume, renderLink, mapLink, realEstateId, createdAt) VALUES
(1, 'venta', 'Edificio Aurora Redondo', 'Murcia', 'Barrio del Carmen', 'assets/gonzalez conde_5-Foto.jpg', 'Alfaro presenta un proyecto de rehabilitación integral con demolición parcial en el histórico Barrio del Carmen, Murcia. Se trata de un edificio renovado pensado para quienes buscan viviendas modernas, luminosas y funcionales, sin perder la esencia del barrio.\n\nCada espacio está diseñado para ofrecer comodidad y bienestar, con distribución optimizada, materiales de calidad y soluciones eficientes que mejoran la luz natural, la ventilación y el confort. La fachada se actualiza respetando la armonía del entorno, creando un equilibrio perfecto entre tradición y modernidad.\n\nEste proyecto representa una oportunidad de inversión única: viviendas atractivas en una ubicación consolidada, con diseño contemporáneo y calidad garantizada. Alfaro convierte un edificio antiguo en un hogar actual, listo para quienes valoran estilo, funcionalidad y vida urbana de calidad.', NULL, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d381.9216337206188!2d-1.1308198048811309!3d37.97940597346104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd638203f16a3307%3A0xf5d9db67b1c46f05!2sPl.%20Gonz%C3%A1lez%20Conde%2C%206%2C%2030002%20Murcia!5e0!3m2!1ses!2ses!4v1763398946119!5m2!1ses!2ses', 2, NOW()),

(2, 'proyecto', 'Edificio Barrio del Progreso', 'Murcia', 'Barrio del progreso', 'assets/1_3-Foto.jpg', 'Este proyecto, diseñado por Juan Carlos Cartagena Sevilla, propone un edificio de 8 viviendas, con un local en la primera planta y distribución en las plantas 1ª-2ª y 3ª-4ª. Cuenta con aproximadamente 440 m² útiles de vivienda, distribuidas en tipos A y B, y un local de 76,25 m² en la primera planta. Además, dispone de un espacio común de 110 m², complementando la funcionalidad del conjunto en una ubicación privilegiada en Murcia.', NULL, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786.3785863790206!2d-1.1214610303960344!3d37.965124298246145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6378a37f9eb157%3A0xde1d83e2e9629306!2sC.%20Macario%2C%2066%2C%2030012%20San%20Benito%20-%20Progreso%2C%20Murcia!5e0!3m2!1ses!2ses!4v1763399139549!5m2!1ses!2ses', NULL, NOW()),

(3, 'venta', 'Edificio Reino de Murcia', 'Murcia', 'Reino de Murcia', 'assets/PERPECTIVA_DETALLE.jpg', 'Alfaro presenta un proyecto residencial contemporáneo en la Avenida de Zarandona, una de las zonas con mayor proyección del Reino de Murcia. Es un edificio nuevo que combina diseño actual, eficiencia energética y calidad constructiva, en un entorno tranquilo y perfectamente conectado con la ciudad.\n\nLas viviendas se distinguen por su luminosidad, confort y acabados premium, ofreciendo espacios funcionales y modernos, pensados para el estilo de vida actual. La fachada, de líneas limpias y materiales seleccionados, aporta personalidad y presencia urbana, creando una imagen sólida y atractiva.\n\nEste proyecto es una oportunidad inteligente para vivir o invertir, con una ubicación estratégica, calificación energética A y el respaldo de Alfaro como garantía de confianza. Una propuesta para quienes buscan futuro, bienestar y calidad de vida en Murcia.', 'https://my.matterport.com/show/?m=poxMa2bcLc2', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665.4823069294587!2d-1.1181602905529737!3d38.0052129310496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6382378c4223b7%3A0xbcf245bc7bc0ac4c!2sDiseminado%20Diego%20Carmona%2C%202%2C%2030007%20Zarandona%2C%20Murcia!5e1!3m2!1ses!2ses!4v1762621605517!5m2!1ses!2ses', 1, NOW());

-- --------------------------------------------------------
-- 6. INSERTAR UNIDADES (Viviendas individuales)
-- --------------------------------------------------------
-- == Edificio Aurora Redondo (ID 1) ==
-- Nota: Descripción indica que incluyen garaje y trastero.
INSERT INTO units 
(planta, tipologia, m2construidos, m2terraza, dormitorios, banos, garage, trastero, planoPdfUrl, housingLocationId) VALUES
('1', 'A', '151.72', '15.12', '2', NULL, 'Incluido', 'Incluido', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-6-7.pdf', 1),
('1', 'B', '90.16', '—', '2', NULL, 'Incluido', 'Incluido', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-8-9.pdf', 1),
('2', 'A', '163.55', '—', '3', NULL, 'Incluido', 'Incluido', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-10-11.pdf', 1),
('2', 'B', '56.75', '—', '1', NULL, 'Incluido', 'Incluido', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-12-13.pdf', 1),
('2', 'C', '143.27', '—', '3', NULL, 'Incluido', 'Incluido', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-14-15.pdf', 1),
('3', 'A', '163.55', '—', '3', NULL, 'Incluido', 'Incluido', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-10-11.pdf', 1),
('3', 'B', '56.75', '—', '1', NULL, 'Incluido', 'Incluido', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-12-13.pdf', 1),
('3', 'C', '143.27', '—', '3', NULL, 'Incluido', 'Incluido', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-14-15.pdf', 1),
('4', 'A', '163.55', '—', '3', NULL, 'Incluido', 'Incluido', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-10-11.pdf', 1),
('4', 'B', '56.75', '—', '1', NULL, 'Incluido', 'Incluido', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-12-13.pdf', 1),
('4', 'C', '143.27', '—', '3', NULL, 'Incluido', 'Incluido', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-14-15.pdf', 1),
('5', 'A', '285.09', '23.67', '5', NULL, 'Incluido', 'Incluido', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-16-17.pdf', 1),
('5', 'B', '101.27', '23.34', '3', NULL, 'Incluido', 'Incluido', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-18-19.pdf', 1),
('5', 'C', '238.16', '18.94', '4', NULL, 'Incluido', 'Incluido', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-20-21.pdf', 1),
('PB', 'Local A', '398.69', '—', NULL, NULL, NULL, NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-LOCAL.pdf', 1),
('-1', 'Sótano', '3.00', '—', NULL, NULL, NULL, NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-GARAGE.pdf', 1);

-- == Edificio Barrio del Progreso (ID 2) ==
INSERT INTO units 
(planta, tipologia, m2construidos, dormitorios, banos, housingLocationId) VALUES
('1', 'A', '55.81', '2', '1', 2),
('1', 'B', '58.15', '2', '1', 2),
('2', 'A', '55.81', '2', '1', 2),
('2', 'B', '55.15', '2', '1', 2),
('3', 'A', '55.81', '2', '1', 2),
('3', 'B', '50.18', '1', '1', 2),
('4', 'A', '55.81', '2', '1', 2),
('4', 'B', '50.18', '1', '1', 2),
('PB', 'LOCAL', '76.25', '-', NULL, 2);

-- == Edificio Reino de Murcia (ID 3) ==
INSERT INTO units 
(planta, tipologia, m2construidos, m2terraza, dormitorios, banos, planoPdfUrl, housingLocationId) VALUES
('1', 'A', '170.20', '40.4', '3', '2', 'assets/pdfs/planos/Reino_de_Murcia_1A.pdf', 3),
('1', 'B', '117.20', '26.3', '2', '2', 'assets/pdfs/planos/Reino_de_Murcia_1B.pdf', 3),
('1', 'C', '147.15', '10.0', '3', '2', 'assets/pdfs/planos/Reino_de_Murcia_1C.pdf', 3),
('2', 'A', '139.80', '10.0', '3', '2', 'assets/pdfs/planos/Reino_de_Murcia_2A-3A.pdf', 3),
('2', 'B', '90.90', '—', '2', '2', 'assets/pdfs/planos/Reino_de_Murcia_2B-3B', 3),
('2', 'C', '137.15', '—', NULL, NULL, NULL, 3),
('3', 'A', '139.80', '10.0', '3', '2', 'assets/pdfs/planos/Reino_de_Murcia_2A-3A.pdf', 3),
('3', 'B', '90.90', '—', '2', '2', 'assets/pdfs/planos/Reino_de_Murcia_2B-3B.pdf', 3),
('3', 'C', '137.15', '—', NULL, NULL, NULL, 3),
('Ático', 'A', '107.40', '—', NULL, NULL, NULL, 3),
('Ático', 'B', '69.60', '—', NULL, NULL, NULL, 3),
('Sótano', 'Garajes', '3.00', '—', NULL, NULL, 'assets/pdfs/planos/Reino_de_Mucia_Sotano-PB.pdf', 3),
('PB', 'Local', '320.00', '—', NULL, NULL, 'assets/pdfs/planos/Reino_de_Mucia_Sotano-PB.pdf', 3);
-- --------------------------------------------------------
-- 7. INSERTAR GALLERY IMAGES (Fotos)
-- --------------------------------------------------------

INSERT INTO gallery_images (url, housingLocationId) VALUES
-- Aurora Redondo (ID 1)
('assets/pdfs/fotos/GonzalezConde/gonzalezconde_3-Foto.jpg', 1),
('assets/pdfs/fotos/GonzalezConde/gonzalezconde_5-Foto.jpg', 1),
('assets/pdfs/fotos/GonzalezConde/gonzalezconde_Lateralder_mod.jpg', 1),
('assets/pdfs/fotos/GonzalezConde/gonzalezconde_Lateralder.jpg', 1),
('assets/pdfs/fotos/GonzalezConde/gonzalezconde_Lateralizq_mod.jpg', 1),
-- Barrio del Progreso (ID 2)
('assets/pdfs/fotos/BarrioDelProgreso/1_2-Foto1VIVIENDA PLANTA.jpg', 2),
('assets/pdfs/fotos/BarrioDelProgreso/1_3-Foto.jpg', 2),
('assets/pdfs/fotos/BarrioDelProgreso/OPCIONA1VIVIENDAPLANTA.jpg', 2),
('assets/pdfs/fotos/BarrioDelProgreso/OPCIONB1VIVIENDAPLANTA.jpg', 2),
('assets/pdfs/fotos/BarrioDelProgreso/RENDERS_VIVIENDA_POR_PLANTA-1_page-0001.jpg', 2),
('assets/pdfs/fotos/BarrioDelProgreso/RENDERS_VIVIENDA_POR_PLANTA-2_page-0001.jpg', 2),
('assets/pdfs/fotos/BarrioDelProgreso/RENDERS_VIVIENDA_POR_PLANTA-3_page-0001.jpg', 2),
-- Reino de Murcia (ID 3)
('assets/pdfs/fotos/ReinoDeMurcia/FRONTAL.jpg', 3),
('assets/pdfs/fotos/ReinoDeMurcia/GENERAL.jpg', 3),
('assets/pdfs/fotos/ReinoDeMurcia/PLANTA.jpg', 3);

-- --------------------------------------------------------
-- 8. INSERTAR DOWNLOAD DOCUMENTS (Descargas)
-- --------------------------------------------------------

INSERT INTO download_documents (nombreBoton, rutaArchivo, housingLocationId) VALUES
-- Aurora Redondo (ID 1)
('Comercialización', 'assets/pdfs/descargas/GonzalezConde/COMERCIALIZACION.pdf', 1),
('Memoria de Calidades', 'assets/pdfs/descargas/GonzalezConde/MEMORIA_DE_CALIDADES.pdf', 1),
-- Barrio del Progreso (ID 2)
('Planos', 'assets/pdfs/descargas/BarrioDelProgreso/PLANOS1.pdf', 2),
-- Reino de Murcia (ID 3)
('Planos Básicos', 'assets/pdfs/descargas/ReinoDeMurcia/PLANOS_BASICO.pdf', 3),
('Memoria REBT', 'assets/pdfs/descargas/ReinoDeMurcia/598-MEMORIA_REBTfirmada.pdf', 3);

-- 9. Volver a activar checks de llaves foráneas
SET FOREIGN_KEY_CHECKS = 1;