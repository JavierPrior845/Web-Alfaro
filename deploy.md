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
(1, 'venta', 'Edificio Aurora Redondo', 'Murcia', 'Barrio del Carmen', 'assets/gonzalez conde_5-Foto.jpg', 'Diseñado por Juan Carlos Cartagena Arquitectos, este exclusivo edificio residencial de obra nueva está ubicado junto a la iglesia del Carmen. Combina la elegancia histórica de su fachada protegida con un diseño contemporáneo en cinco alturas. Consta de 15 viviendas de 1 a 5 dormitorios, adecuadas para distintos tipos de compradores, todas con plaza de garaje en sótano y trasteros distribuidos en dos niveles. En planta baja cuenta con un local comercial de 389,69 m². Destacan acabados de alta calidad y eficiencia energética, en un proyecto que respeta la identidad arquitectónica original con modernas comodidades.', NULL, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d381.9216337206188!2d-1.1308198048811309!3d37.97940597346104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd638203f16a3307%3A0xf5d9db67b1c46f05!2sPl.%20Gonz%C3%A1lez%20Conde%2C%206%2C%2030002%20Murcia!5e0!3m2!1ses!2ses!4v1763398946119!5m2!1ses!2ses', 2, NOW()),

(2, 'proyecto', 'Edificio Barrio del Progreso', 'Murcia', 'Barrio del progreso', 'assets/1_3-Foto.jpg', 'Este proyecto, diseñado por Juan Carlos Cartagena Sevilla, propone un edificio de 8 viviendas, con un local en la primera planta y distribución en las plantas 1ª-2ª y 3ª-4ª. Cuenta con aproximadamente 440 m² útiles de vivienda, distribuidas en tipos A y B, y un local de 76,25 m² en la primera planta. Además, dispone de un espacio común de 110 m², complementando la funcionalidad del conjunto en una ubicación privilegiada en Murcia.', NULL, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786.3785863790206!2d-1.1214610303960344!3d37.965124298246145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6378a37f9eb157%3A0xde1d83e2e9629306!2sC.%20Macario%2C%2066%2C%2030012%20San%20Benito%20-%20Progreso%2C%20Murcia!5e0!3m2!1ses!2ses!4v1763399139549!5m2!1ses!2ses', NULL, NOW()),

(3, 'venta', 'Edificio Reino de Murcia', 'Murcia', 'Reino de Murcia', 'assets/PERPECTIVA_DETALLE.jpg', 'Proyecto promovido por PROMARHOGAR INFANTE S.L. y diseñado por el arquitecto Juan Sánchez Carrillo. Ubicado en Avenida Miguel Indurain, el edificio cuenta con 11 viviendas, locales comerciales, garaje y trasteros, cumpliendo todas las normativas vigentes. Dispone de amplias viviendas con terrazas, locales comerciales en planta baja, y zonas de almacenamiento en sótano. El diseño incluye terrazas comunitarias para el disfrute de los residentes, combinando funcionalidad y calidad en un entorno accesible y bien situado.', 'https://my.matterport.com/show/?m=poxMa2bcLc2', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665.4823069294587!2d-1.1181602905529737!3d38.0052129310496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6382378c4223b7%3A0xbcf245bc7bc0ac4c!2sDiseminado%20Diego%20Carmona%2C%202%2C%2030007%20Zarandona%2C%20Murcia!5e1!3m2!1ses!2ses!4v1762621605517!5m2!1ses!2ses', 1, NOW());

-- --------------------------------------------------------
-- 6. INSERTAR UNIDADES (Viviendas individuales)
-- --------------------------------------------------------

-- Unidades para Edificio Aurora Redondo (ID 1)
INSERT INTO units (vivienda, m2, terrazas, dormitorios, banos, planoPdfUrl, housingLocationId) VALUES
('1ºA', 151.72, '15.12', '2', NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-6-7.pdf', 1),
('1ºB', 90.16, '—', '2', NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-8-9.pdf', 1),
('2ºA', 163.55, '—', '3', NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-10-11.pdf', 1),
('2ºB', 56.75, '—', '1', NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-12-13.pdf', 1),
('2ºC', 143.27, '—', '3', NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-14-15.pdf', 1),
('3ºA', 163.55, '—', '3', NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-10-11.pdf', 1),
('3ºB', 56.75, '—', '1', NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-12-13.pdf', 1),
('3ºC', 143.27, '—', '3', NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-14-15.pdf', 1),
('4ºA', 163.55, '—', '3', NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-10-11.pdf', 1),
('4ºB', 56.75, '—', '1', NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-12-13.pdf', 1),
('4ºC', 143.27, '—', '3', NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-14-15.pdf', 1),
('5ºA', 285.09, '23.67', '5', NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-16-17.pdf', 1),
('5ºB', 101.27, '23.34', '3', NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-18-19.pdf', 1),
('5ºC', 238.16, '18.94', '4', NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-20-21.pdf', 1),
('Local A', 398.69, '—', NULL, NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-LOCAL.pdf', 1),
('Sótano', 3.00, '—', NULL, NULL, 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-GARAGE.pdf', 1);

-- Unidades para Edificio Barrio del Progreso (ID 2)
INSERT INTO units (vivienda, m2, terrazas, dormitorios, banos, planoPdfUrl, housingLocationId) VALUES
('1°A', 55.81, NULL, '2', 1, NULL, 2),
('1°B', 58.15, NULL, '2', 1, NULL, 2),
('2°A', 55.81, NULL, '2', 1, NULL, 2),
('2°B', 55.15, NULL, '2', 1, NULL, 2),
('3°A', 55.81, NULL, '2', 1, NULL, 2),
('3°B', 50.18, NULL, '1', 1, NULL, 2),
('4°A', 55.81, NULL, '2', 1, NULL, 2),
('4°B', 50.18, NULL, '1', 1, NULL, 2),
('LOCAL', 76.25, NULL, '-', NULL, NULL, 2);

-- Unidades para Edificio Reino de Murcia (ID 3)
INSERT INTO units (vivienda, m2, terrazas, dormitorios, banos, planoPdfUrl, housingLocationId) VALUES
('1º A', 170.20, '40.4', '3', 2, 'assets/pdfs/planos/Reino_de_Murcia_1A.pdf', 3),
('1º B', 117.20, '26.3', '2', 2, 'assets/pdfs/planos/Reino_de_Murcia_1B.pdf', 3),
('1º C', 147.15, '10.0', '3', 2, 'assets/pdfs/planos/Reino_de_Murcia_1C.pdf', 3),
('2º A', 139.80, '10.0', '3', 2, 'assets/pdfs/planos/Reino_de_Murcia_2A-3A.pdf', 3),
('2º B', 90.90, '—', '2', 2, 'assets/pdfs/planos/Reino_de_Murcia_2B-3B', 3),
('2º C', 137.15, '—', NULL, NULL, NULL, 3),
('3º A', 139.80, '10.0', '3', 2, 'assets/pdfs/planos/Reino_de_Murcia_2A-3A.pdf', 3),
('3º B', 90.90, '—', '2', 2, 'assets/pdfs/planos/Reino_de_Murcia_2B-3B.pdf', 3),
('3º C', 137.15, '—', NULL, NULL, NULL, 3),
('ATICO A', 107.40, '—', NULL, NULL, NULL, 3),
('ATICO B', 69.60, '—', NULL, NULL, NULL, 3),
('GARAJES', 3.00, '—', NULL, NULL, 'assets/pdfs/planos/Reino_de_Mucia_Sotano-PB.pdf', 3),
('LOCAL', 320.00, '—', NULL, NULL, 'assets/pdfs/planos/Reino_de_Mucia_Sotano-PB.pdf', 3);

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