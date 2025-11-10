# Install
### Angular
-- Lanzar servidor ng serve
### Fastify
- npm install fastify @prisma/client @fastify/cors
- npm install -D prisma typescript ts-node @types/node
- npm install @prisma/client
- npx prisma migrate dev --name "comentario" //Actualizar esquema base de datos
-- Lanzar servidor npx ts-node src/server.ts
# SQL
- sudo apt install mysql-server
- Acceder: sudo mysql -u root
## CREATE/ALTER
CREATE USER javier IDENTIFIED BY '04jpGGPJ04';
CREATE DATABASE web_alfaro;
SELECT user, host FROM mysql.user WHERE user = 'javier';
GRANT ALL PRIVILEGES ON web_alfaro.* TO 'javier'@'%';

## INSERT
