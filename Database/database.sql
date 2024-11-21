-- Tabla Provincias
CREATE TABLE Provincias (
    Id INT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL
);

-- Tabla Cantones
CREATE TABLE Cantones (
    Id INT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Id_Provincia INT,
    FOREIGN KEY (Id_Provincia) REFERENCES Provincias(Id)
);

-- Tabla Categorias
CREATE TABLE Categorias (
    Id INT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL
);

-- Tabla ICE
CREATE TABLE ICE (
    Id INT PRIMARY KEY,
    Codigo VARCHAR(20) NOT NULL,
    Descripcion VARCHAR(200)
);

-- Tabla Clientes
CREATE TABLE Clientes (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Identificacion VARCHAR(20) NOT NULL UNIQUE,
    Tipo_Identificacion VARCHAR(50) NOT NULL,
    Nombre VARCHAR(100) NOT NULL,
    Apellido VARCHAR(100) NOT NULL,
    Direccion VARCHAR(200),
    Id_Canton INT,
    Telefono VARCHAR(20),
    Correo VARCHAR(100),
    FOREIGN KEY (Id_Canton) REFERENCES Cantones(Id)
);

-- Tabla Productos
CREATE TABLE Productos (
    Codigo INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL UNIQUE,
    Precio_Unitario DECIMAL(10, 2) NOT NULL,
    Precio_Adquisicion DECIMAL(10, 2),
    Tasa_IVA INT,
    Id_Categoria INT,
    Id_ICE INT,
    imagen_url VARCHAR(255),
    FOREIGN KEY (Id_Categoria) REFERENCES Categorias(Id),
    FOREIGN KEY (Id_ICE) REFERENCES ICE(Id)
) AUTO_INCREMENT=1000;


-- Tabla Facturas_Header
CREATE TABLE Facturas_Header (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Id_Cliente INT,
    Fecha DATE NOT NULL,
    Sub_Total_0 DECIMAL(10, 2),
    Sub_Total_15 DECIMAL(10, 2),
    Subtotal DECIMAL(10, 2),
    Descuento DECIMAL(10, 2),
    ICE DECIMAL(10, 2),
    IVA DECIMAL(10, 2),
    Total DECIMAL(10, 2),
    Total_Ganancia DECIMAL(10, 2),
    FOREIGN KEY (Id_Cliente) REFERENCES Clientes(Id)
);

-- Tabla Facturas_Detail
CREATE TABLE Facturas_Detail (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Id_Factura INT,
    Id_Producto INT,
    Cantidad INT NOT NULL,
    Descuento DECIMAL(10, 2),
    Subtotal DECIMAL(10, 2),
    Ganancia DECIMAL(10, 2),
    FOREIGN KEY (Id_Factura) REFERENCES Facturas_Header(ID),
    FOREIGN KEY (Id_Producto) REFERENCES Productos(Codigo)
);
