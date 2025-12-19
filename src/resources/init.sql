-- init.sql

-- ----------------------------
-- Create Data Base
-- ----------------------------
CREATE DATABASE "TaskManager";
ALTER DATABASE "TaskManager" 
SET timezone TO 'UTC';

-- ----------------------------
-- Tables
-- ----------------------------
CREATE TABLE IF
	NOT EXISTS "public"."users" (
    id_user BIGSERIAL PRIMARY KEY,
    names VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

DELETE FROM "public"."users";

INSERT INTO "public"."users" (names, email, password)
VALUES 
    ('Carlos Mendoza', 'carlos.mendoza@yopmail.com', 'TAccess321???');

CREATE TABLE IF
	NOT EXISTS "public"."tasks" (
    id_task BIGSERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    status VARCHAR(20) NOT NULL CHECK (status IN ('pendiente', 'en progreso', 'completada')),
    priority VARCHAR(10) NOT NULL CHECK (priority IN ('baja', 'media', 'alta')),
    user_id BIGINT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES "public"."users"(id_user) ON DELETE CASCADE
);

DELETE  FROM "public"."tasks";  

INSERT INTO "public"."tasks" (title, description, status, priority, user_id)
VALUES 
    ('Configurar API Base', 'Instalar Express y configurar el Singleton de Postgres', 'completada', 'alta', 1),
    ('Diseñar Componentes React', 'Crear los botones y formularios base en Vite', 'en progreso', 'media', 1),
    ('Pruebas de Endpoints', 'Testear con Postman los servicios de contactos', 'pendiente', 'alta', 1),
    ('Documentación Técnica', 'Escribir el README con las instrucciones del proyecto', 'pendiente', 'baja', 1),
    ('Optimizar Queries', 'Revisar los índices de la tabla contacts', 'en progreso', 'media', 1);