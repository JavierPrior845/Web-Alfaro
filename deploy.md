# Install
### Angular
-- Lanzar servidor ng serve
### Fastify
- npm install fastify @prisma/client @fastify/cors
- npm install -D prisma typescript ts-node @types/node
- npm install @prisma/client
- npx prisma migrate dev --name "comentario"  ||  npx prisma db push //Actualizar esquema base de datos
-- Lanzar servidor npx ts-node src/server.ts || npx ts-node --esm src/server.ts
# SQL
- sudo apt install mysql-server
- Acceder: sudo mysql -u root
## CREATE/ALTER
CREATE USER javier IDENTIFIED BY '04jpGGPJ04';
CREATE DATABASE web_alfaro;
SELECT user, host FROM mysql.user WHERE user = 'javier';
GRANT ALL PRIVILEGES ON web_alfaro.* TO 'javier'@'%';

## INSERT

-- ==================================================
-- ID 0: EDIFICIO AURORA REDONDO
-- ==================================================
INSERT INTO `housing_locations` 
(id, name, city, state, photo, realEstateName, realEstateLink, minimunPrice, resume, mapLink, createdAt)
VALUES
(
  0,
  'Edificio Aurora Redondo',
  'Murcia',
  'Barrio del Carmen',
  'assets/gonzalez conde_5-Foto.jpg',
  'AnovaHomes',
  'https://www.anovahomes.com/',
  '10000€',
  'Diseñado por Juan Carlos Cartagena Arquitectos, este exclusivo edificio residencial de obra nueva está ubicado junto a la iglesia del Carmen. Combina la elegancia histórica de su fachada protegida con un diseño contemporáneo en cinco alturas. Consta de 15 viviendas de 1 a 5 dormitorios, adecuadas para distintos tipos de compradores, todas con plaza de garaje en sótano y trasteros distribuidos en dos niveles. En planta baja cuenta con un local comercial de 389,69 m². Destacan acabados de alta calidad y eficiencia energética, en un proyecto que respeta la identidad arquitectónica original con modernas comodidades.',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665.4823069294587!2d-1.1181602905529737!3d38.0052129310496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6382378c4223b7%3A0xbcf245bc7bc0ac4c!2sDiseminado%20Diego%20Carmona%2C%202%2C%2030007%20Zarandona%2C%20Murcia!5e1!3m2!1ses!2ses!4v1762621605517!5m2!1ses!2ses',
  NOW()
);

-- Redes Sociales (ID 0)
INSERT INTO `social_media_links` (nombreRedSocial, rutaArchivo, housingLocationId) VALUES 
('Instagram', 'https://www.instagram.com/anova_homes/', 0),
('TikTok', 'https://www.tiktok.com/@anova_homes', 0),
('Linkedin', 'https://www.linkedin.com/company/anova-inmobiliaria/', 0);

-- Documentos (ID 0)
INSERT INTO `download_documents` (nombreBoton, rutaArchivo, housingLocationId) VALUES 
('Comercialización', 'assets/pdfs/descargas/GonzalezConde/COMERCIALIZACION.pdf', 0),
('Memoria de Calidades', 'assets/pdfs/descargas/GonzalezConde/MEMORIA_DE_CALIDADES.pdf', 0);

-- Galería (ID 0)
INSERT INTO `gallery_images` (url, housingLocationId) VALUES 
('assets/pdfs/fotos/GonzalezConde/gonzalezconde_3-Foto.jpg', 0),
('assets/pdfs/fotos/GonzalezConde/gonzalezconde_5-Foto.jpg', 0),
('assets/pdfs/fotos/GonzalezConde/gonzalezconde_Lateralder_mod.jpg', 0),
('assets/pdfs/fotos/GonzalezConde/gonzalezconde_Lateralder.jpg', 0),
('assets/pdfs/fotos/GonzalezConde/gonzalezconde_Lateralizq_mod.jpg', 0);

-- Unidades (ID 0)
INSERT INTO `units` (vivienda, m2, terrazas, precio, planoPdfUrl, housingLocationId) VALUES
('1ºA', 151.72, '15.12', 'N/D', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-6-7.pdf', 0),
('1ºB', 90.16, '—', 'N/D', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-8-9.pdf', 0),
('2ºA', 163.55, '—', 'N/D', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-10-11.pdf', 0),
('2ºB', 56.75, '—', 'N/D', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-12-13.pdf', 0),
('2ºC', 143.27, '—', 'N/D', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-14-15.pdf', 0),
('3ºA', 163.55, '—', 'N/D', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-10-11.pdf', 0),
('3ºB', 56.75, '—', 'N/D', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-12-13.pdf', 0),
('3ºC', 143.27, '—', 'N/D', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-14-15.pdf', 0),
('4ºA', 163.55, '—', 'N/D', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-10-11.pdf', 0),
('4ºB', 56.75, '—', 'N/D', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-12-13.pdf', 0),
('4ºC', 143.27, '—', 'N/D', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-14-15.pdf', 0),
('5ºA', 285.09, '23.67', 'N/D', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-16-17.pdf', 0),
('5ºB', 101.27, '23.34', 'N/D', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-18-19.pdf', 0),
('5ºC', 238.16, '18.94', 'N/D', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-20-21.pdf', 0),
('Local A', 398.69, '—', 'N/D', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-LOCAL.pdf', 0),
('Sótano', 3, '—', 'N/D', 'assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-GARAGE.pdf', 0);


-- ==================================================
-- ID 1: BARRIO DEL PROGRESO
-- ==================================================
INSERT INTO `housing_locations` 
(id, name, city, state, photo, minimunPrice, resume, mapLink, createdAt)
VALUES
(
  1,
  'Edificio Barrio del Progreso',
  'Murcia',
  'Barrio del progreso',
  'assets/1_3-Foto.jpg',
  '250.000€',
  'Este proyecto, diseñado por Juan Carlos Cartagena Sevilla, propone un edificio de 8 viviendas, con un local en la primera planta y distribución en las plantas 1ª-2ª y 3ª-4ª. Cuenta con aproximadamente 440 m² útiles de vivienda, distribuidas en tipos A y B, y un local de 76,25 m² en la primera planta. Además, dispone de un espacio común de 110 m², complementando la funcionalidad del conjunto en una ubicación privilegiada en Murcia.',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665.4823069294587!2d-1.1181602905529737!3d38.0052129310496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6382378c4223b7%3A0xbcf245bc7bc0ac4c!2sDiseminado%20Diego%20Carmona%2C%202%2C%2030007%20Zarandona%2C%20Murcia!5e1!3m2!1ses!2ses!4v1762621605517!5m2!1ses!2ses',
  NOW()
);

-- Documentos (ID 1)
INSERT INTO `download_documents` (nombreBoton, rutaArchivo, housingLocationId) VALUES 
('Planos', 'assets/pdfs/descargas/BarrioDelProgreso/PLANOS1.pdf', 1);

-- Galería (ID 1)
INSERT INTO `gallery_images` (url, housingLocationId) VALUES 
('assets/pdfs/fotos/BarrioDelProgreso/1_2-Foto1VIVIENDA PLANTA.jpg', 1),
('assets/pdfs/fotos/BarrioDelProgreso/1_3-Foto.jpg', 1),
('assets/pdfs/fotos/BarrioDelProgreso/OPCIONA1VIVIENDAPLANTA.jpg', 1),
('assets/pdfs/fotos/BarrioDelProgreso/OPCIONB1VIVIENDAPLANTA.jpg', 1),
('assets/pdfs/fotos/BarrioDelProgreso/RENDERS_VIVIENDA_POR_PLANTA-1_page-0001.jpg', 1),
('assets/pdfs/fotos/BarrioDelProgreso/RENDERS_VIVIENDA_POR_PLANTA-2_page-0001.jpg', 1),
('assets/pdfs/fotos/BarrioDelProgreso/RENDERS_VIVIENDA_POR_PLANTA-3_page-0001.jpg', 1);

-- Unidades (ID 1)
INSERT INTO `units` (vivienda, m2, terrazas, precio, planoPdfUrl, housingLocationId) VALUES
('Local vivienda 1°A', 69.79, '—', 'N/D', 'N/D', 1),
('vivienda 1°B', 72.71, '—', 'N/D', 'N/D', 1),
('vivienda 2°A', 69.79, '—', 'N/D', 'N/D', 1),
('vivienda 2°B', 72.71, '—', 'N/D', 'N/D', 1),
('vivienda 3°A', 69.79, '—', 'N/D', 'N/D', 1),
('vivienda 3°B', 62.75, '—', 'N/D', 'N/D', 1),
('vivienda 4°A', 69.79, '—', 'N/D', 'N/D', 1),
('vivienda 4°B', 62.75, '—', 'N/D', 'N/D', 1);


-- ==================================================
-- ID 2: EDIFICIO REINO DE MURCIA
-- ==================================================
INSERT INTO `housing_locations` 
(id, name, city, state, photo, realEstateName, realEstateLink, renderLink, minimunPrice, resume, mapLink, createdAt)
VALUES
(
  2,
  'Edificio Reino de Murcia',
  'Murcia',
  'Reino de Murcia',
  'assets/PERPECTIVA_DETALLE.jpg',
  'Siroco',
  'https://sirocoinmuebles.com/',
  'https://my.matterport.com/show/?m=poxMa2bcLc2',
  '222,000€',
  'Proyecto promovido por PROMARHOGAR INFANTE S.L. y diseñado por el arquitecto Juan Sánchez Carrillo. Ubicado en Avenida Miguel Indurain, el edificio cuenta con 11 viviendas, locales comerciales, garaje y trasteros, cumpliendo todas las normativas vigentes. Dispone de amplias viviendas con terrazas, locales comerciales en planta baja, y zonas de almacenamiento en sótano. El diseño incluye terrazas comunitarias para el disfrute de los residentes, combinando funcionalidad y calidad en un entorno accesible y bien situado.',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665.4823069294587!2d-1.1181602905529737!3d38.0052129310496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6382378c4223b7%3A0xbcf245bc7bc0ac4c!2sDiseminado%20Diego%20Carmona%2C%202%2C%2030007%20Zarandona%2C%20Murcia!5e1!3m2!1ses!2ses!4v1762621605517!5m2!1ses!2ses',
  NOW()
);

-- Redes Sociales (ID 2)
INSERT INTO `social_media_links` (nombreRedSocial, rutaArchivo, housingLocationId) VALUES 
('Instagram', 'https://www.instagram.com/sirocoinmuebles/', 2),
('TikTok', 'https://www.tiktok.com/@sirocoinmuebles', 2),
('Linkedin', 'https://www.linkedin.com/in/antonio-hern%C3%A1ndez-2b4a2b1a7/', 2);

-- Documentos (ID 2)
INSERT INTO `download_documents` (nombreBoton, rutaArchivo, housingLocationId) VALUES 
('Planos Globales', 'assets/pdfs/planos/Edificio_Global.pdf', 2),
('Memoria de Calidades', 'assets/pdfs/memoria_calidades.pdf', 2);

-- Galería (ID 2)
INSERT INTO `gallery_images` (url, housingLocationId) VALUES 
('assets/pdfs/fotos/ReinoDeMurcia/FRONTAL.jpg', 2),
('assets/pdfs/fotos/ReinoDeMurcia/GENERAL.jpg', 2),
('assets/pdfs/fotos/ReinoDeMurcia/PLANTA.jpg', 2);

-- Unidades (ID 2)
INSERT INTO `units` (vivienda, m2, terrazas, precio, planoPdfUrl, housingLocationId) VALUES
('1º A', 170.20, '40.40', '275000.00', 'assets/pdfs/planos/Reino_de_Murcia_1A.pdf', 2),
('1º B', 117.20, '26.30', '235000.00', 'assets/pdfs/planos/Reino_de_Murcia_1B.pdf', 2),
('1º C', 147.15, '10.00', '257000.00', 'assets/pdfs/planos/Reino_de_Murcia_1C.pdf', 2),
('2º A', 139.80, '10.00', '298000.00', 'assets/pdfs/planos/Reino_de_Murcia_2A-3A.pdf', 2),
('2º B', 90.90, '—', '222000.00', 'assets/pdfs/planos/Reino_de_Murcia_2B-3B.pdf', 2),
('2º C', 137.15, '—', 'VENDIDO', NULL, 2),
('3º A', 139.80, '10.00', '318000.00', 'assets/pdfs/planos/Reino_de_Murcia_2A-3A.pdf', 2),
('3º B', 90.90, '—', '232000.00', 'assets/pdfs/planos/Reino_de_Murcia_2B-3B.pdf', 2),
('3º C', 137.15, '—', 'VENDIDO', NULL, 2),
('ATICO A', 107.40, '—', 'VENDIDO', 'assets/pdfs/planos/Reino_de_Murcia_4A.pdf', 2),
('ATICO B', 69.60, '—', 'VENDIDO', NULL, 2),
('GARAJES', 3, '—', '54000.00', 'assets/pdfs/planos/Reino_de_Mucia_Sotano-PB.pdf', 2),
('LOCAL', 320, '—', '512000.00', 'assets/pdfs/planos/Reino_de_Mucia_Sotano-PB.pdf', 2);