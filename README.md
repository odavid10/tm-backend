# 🚀 Task Manager API

Backend robusto construido con Node.js y Express para la gestión de tareas en un tablero estilo Kanban. Incluye autenticación JWT y persistencia en base de datos.

## 🛠️ Tecnologías utilizadas

- **Runtime**: Node.js
- **Framework**: Express
- **Lenguaje**: JavaScript
- **Base de Datos**: PostgreSQL
- **Autenticación**: JSON Web Tokens (JWT)

## 📋 Características

- Autenticación de usuarios (Registro/Login).
- CRUD completo de tareas.
- **Agrupación de tareas**: Endpoint optimizado para devolver tareas categorizadas por `pending`, `inProgress` y `complete`.
- Middleware de protección de rutas mediante ID de usuario.

## ⚙️ Instalación

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/task-manager-backend.git](https://github.com/tu-usuario/task-manager-backend.git)
   ```
2. Instalar dependencias

   ```
    npm install
   ```

3. Inicializació de Base de Datos

   Ejecutar init.sql en la terminal de la base de datos postgres

4. Configurar variables de entorno (.env.sample)

5. Ejecución
   ```
    npm run dev
   ```

## 🛣️ Endpoints Principales

- POST /auth/login - Iniciar sesión.

- POST /auth/register - Registrar usuario.

- GET /tasks - Listar tareas agrupadas por estado.

- POST /tasks - Crear una nueva tarea.

- PUT /tasks/:id - Actualizar estado o detalles.

- PDELETEUT /tasks/:id - eliminar una tarea.
