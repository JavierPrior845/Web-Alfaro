# 🏗️ Alfaro Promociones - Real Estate Platform

![Status](https://img.shields.io/badge/Status-Production-success)
![Stack](https://img.shields.io/badge/Stack-MEAN%20%28Fastify%29-blue)
![License](https://img.shields.io/badge/License-Proprietary-red)

A high-performance Full Stack web application designed for a real estate developer. This platform manages housing projects, architectural visualizations, and commercial collaborations through a custom CMS architecture.

**Live URL:** [alfaroedificacion.com](https://alfaroedificacion.com)

## 🚀 Key Features

* **High-Performance Backend:** Built with **Fastify** for low overhead and high throughput.
* **Dynamic Data Modeling:** Uses **Prisma ORM** with MySQL to handle complex relationships between Housing Locations, Units, and Collaborators (`Colabs`).
* **Automated Data Sync:** Includes custom SQL scripts and Prisma seeders to synchronize JSON-based legacy data structures into a normalized relational database.
* **Production Infrastructure:** Deployed on a Linux VPS using **Nginx** as a reverse proxy and **Systemd** for process management.
* **Responsive Frontend:** Angular-based SPA delivering a seamless experience across devices.

## 🛠️ Technical Stack

### Backend
* **Runtime:** Node.js
* **Framework:** [Fastify](https://www.fastify.io/) (Chosen over Express for performance).
* **ORM:** [Prisma](https://www.prisma.io/) (Type-safe database access).
* **Database:** MySQL.

### Frontend
* **Framework:** Angular (Latest).
* **Styling:** SCSS / Tailwind.

### DevOps & Infrastructure
* **Web Server:** Nginx (Reverse Proxy, SSL termination).
* **Process Manager:** Systemd.
* **Containerization:** Docker support (in progress).

## 📂 Project Structure

```bash
├── server/               # Fastify Backend
│   ├── prisma/           # Schema & Migrations
│   │   ├── schema.prisma # DB Definition
│   │   
│   ├── src/
│   │   └── server.ts     # Entry point
│   └── .env              # Environment variables (Ignored)
│
├── frontend/             # Angular Application
│   ├── src/
│   └── angular.json
│
└── /etc/nginx/           # Nginx Configuration (Reference)
🔧 Installation & Local Setup
```

## Prerequisites

- Node.js (v18+)
- MySQL Database
- npm or pnpm


1. Clone the repository
```Bash

git clone [https://github.com/your-username/alfaro-real-estate.git](https://github.com/your-username/alfaro-real-estate.git)
cd alfaro-real-estate
```
2. Backend Setup
```Bash

cd server
npm install
# Configure your .env file with DATABASE_URL
npx prisma generate
npx prisma db push
npm run dev
```

3. Frontend Setup
```Bash

cd frontend
npm install
npm start
```

# 📡 API Architecture
The backend exposes a RESTful API consumed by the Angular client. Key endpoints include:

GET /api/locations: Fetches all real estate projects with relations.

GET /api/colabs: Retrieves partner agencies info.

POST /api/contact: Handles customer inquiries via email services.

# ⚙️ Deployment (VPS)
This project is currently deployed on a Linux VPS.

Nginx Configuration Snippet:

```Nginx

server {
    server_name alfaroedificacion.com;
    
    # Angular Static Files
    location / {
        root /var/www/frontend/browser;
        try_files $uri $uri/ /index.html;
    }

    # Fastify API Proxy
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
    }
}
```
👤 Author
Javier Prior - Computer Engineering Student @ UMU

Focus: AI Engineering, Full Stack Development.

© 2024 Alfaro Promociones. All rights reserved.