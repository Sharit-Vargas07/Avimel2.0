-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 01-06-2025 a las 23:56:45
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `avimel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aves`
--

CREATE TABLE `aves` (
  `id_ave` int NOT NULL,
  `nombre_comun` varchar(250) NOT NULL,
  `nombre_cientifico` varchar(250) NOT NULL,
  `familia` varchar(60) NOT NULL,
  `descripcion` text NOT NULL,
  `habitat` varchar(250) NOT NULL,
  `imagen` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `avistamientos`
--

CREATE TABLE `avistamientos` (
  `id_avistamiento` int NOT NULL,
  `fk_ruta` int NOT NULL,
  `fk_ave` int NOT NULL,
  `fecha` date NOT NULL,
  `hora` datetime NOT NULL,
  `comentario` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutas`
--

CREATE TABLE `rutas` (
  `id_ruta` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text NOT NULL,
  `dificultad` enum('Baja','Media','Alta') NOT NULL,
  `longitud_km` varchar(50) NOT NULL,
  `duracion_aprox_horas` int NOT NULL,
  `fk_id_sitio_turistico` int NOT NULL,
  `fk_usuario` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sitios_turisticos`
--

CREATE TABLE `sitios_turisticos` (
  `id_sitios_turisticos` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `ubicacion` varchar(50) NOT NULL,
  `descripcion` text NOT NULL,
  `actividades` varchar(50) NOT NULL,
  `fk_usuario` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `contrasena` varchar(50) NOT NULL,
  `rol` enum('Administrador','Visitantes') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aves`
--
ALTER TABLE `aves`
  ADD PRIMARY KEY (`id_ave`);

--
-- Indices de la tabla `avistamientos`
--
ALTER TABLE `avistamientos`
  ADD PRIMARY KEY (`id_avistamiento`),
  ADD KEY `fk_ruta` (`fk_ruta`),
  ADD KEY `fk_ave` (`fk_ave`);

--
-- Indices de la tabla `rutas`
--
ALTER TABLE `rutas`
  ADD PRIMARY KEY (`id_ruta`),
  ADD KEY `fk_id_sitio_turistico` (`fk_id_sitio_turistico`),
  ADD KEY `fk_usuario` (`fk_usuario`);

--
-- Indices de la tabla `sitios_turisticos`
--
ALTER TABLE `sitios_turisticos`
  ADD PRIMARY KEY (`id_sitios_turisticos`),
  ADD KEY `fk_usuario` (`fk_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aves`
--
ALTER TABLE `aves`
  MODIFY `id_ave` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `avistamientos`
--
ALTER TABLE `avistamientos`
  MODIFY `id_avistamiento` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rutas`
--
ALTER TABLE `rutas`
  MODIFY `id_ruta` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sitios_turisticos`
--
ALTER TABLE `sitios_turisticos`
  MODIFY `id_sitios_turisticos` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `avistamientos`
--
ALTER TABLE `avistamientos`
  ADD CONSTRAINT `avistamientos_ibfk_1` FOREIGN KEY (`fk_ruta`) REFERENCES `rutas` (`id_ruta`),
  ADD CONSTRAINT `avistamientos_ibfk_2` FOREIGN KEY (`fk_ave`) REFERENCES `aves` (`id_ave`);

--
-- Filtros para la tabla `rutas`
--
ALTER TABLE `rutas`
  ADD CONSTRAINT `rutas_ibfk_1` FOREIGN KEY (`fk_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `rutas_ibfk_2` FOREIGN KEY (`fk_id_sitio_turistico`) REFERENCES `sitios_turisticos` (`id_sitios_turisticos`);

--
-- Filtros para la tabla `sitios_turisticos`
--
ALTER TABLE `sitios_turisticos`
  ADD CONSTRAINT `sitios_turisticos_ibfk_1` FOREIGN KEY (`fk_usuario`) REFERENCES `usuarios` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
