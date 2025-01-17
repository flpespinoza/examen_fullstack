-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS inventory;
USE inventory;

-- Creacion de las tablas, se agregan los campos created_at y
-- updated_at como los genera laravel en las migraciones que dan de alta tablas

-- Tabla de categorías
-- Definir el campo 'name' como UNIQUE para no permitir valores duplicados
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla de productos
-- Uso CHECK para validar que el valor del campo 'stock' no sea meno a 0
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    category_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id),
    CHECK (stock >= 0)
);

-- Insertar datos de prueba
INSERT INTO categories (name) VALUES 
    ('Electrónicos'),
    ('Ropa'),
    ('Alimentos'),
    ('Hogar');

INSERT INTO products (name, stock, category_id) VALUES 
    ('Smartphone XYZ', 15, 1),
    ('Laptop ABC', 8, 1),
    ('Camiseta Básica', 100, 2),
    ('Pantalón Casual', 50, 2),
    ('Arroz Premium', 200, 3),
    ('Aceite de Cocina', 75, 3),
    ('Lámpara LED', 30, 4),
    ('Mesa de Centro', 12, 4);

-- Crear índices para mejorar el rendimiento
CREATE INDEX idx_product_category ON products(category_id);
CREATE INDEX idx_product_name ON products(name);