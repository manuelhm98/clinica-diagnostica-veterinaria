-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.25 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando datos para la tabla clinica-api.breeds: ~5 rows (aproximadamente)
DELETE FROM `breeds`;
/*!40000 ALTER TABLE `breeds` DISABLE KEYS */;
/*!40000 ALTER TABLE `breeds` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.clinical_services: ~2 rows (aproximadamente)
DELETE FROM `clinical_services`;
/*!40000 ALTER TABLE `clinical_services` DISABLE KEYS */;
/*!40000 ALTER TABLE `clinical_services` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.clinical_services_type: ~2 rows (aproximadamente)
DELETE FROM `clinical_services_type`;
/*!40000 ALTER TABLE `clinical_services_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `clinical_services_type` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.colors: ~3 rows (aproximadamente)
DELETE FROM `colors`;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.crossing: ~0 rows (aproximadamente)
DELETE FROM `crossing`;
/*!40000 ALTER TABLE `crossing` DISABLE KEYS */;
/*!40000 ALTER TABLE `crossing` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.customers: ~5 rows (aproximadamente)
DELETE FROM `customers`;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.deworming: ~1 rows (aproximadamente)
DELETE FROM `deworming`;
/*!40000 ALTER TABLE `deworming` DISABLE KEYS */;
/*!40000 ALTER TABLE `deworming` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.deworming_type: ~2 rows (aproximadamente)
DELETE FROM `deworming_type`;
/*!40000 ALTER TABLE `deworming_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `deworming_type` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.doctors: ~3 rows (aproximadamente)
DELETE FROM `doctors`;
/*!40000 ALTER TABLE `doctors` DISABLE KEYS */;
/*!40000 ALTER TABLE `doctors` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.esthetic: ~0 rows (aproximadamente)
DELETE FROM `esthetic`;
/*!40000 ALTER TABLE `esthetic` DISABLE KEYS */;
/*!40000 ALTER TABLE `esthetic` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.esthetic_type: ~0 rows (aproximadamente)
DELETE FROM `esthetic_type`;
/*!40000 ALTER TABLE `esthetic_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `esthetic_type` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.patiens_type: ~2 rows (aproximadamente)
DELETE FROM `patiens_type`;
/*!40000 ALTER TABLE `patiens_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `patiens_type` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.patients: ~5 rows (aproximadamente)
DELETE FROM `patients`;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.pest_control: ~0 rows (aproximadamente)
DELETE FROM `pest_control`;
/*!40000 ALTER TABLE `pest_control` DISABLE KEYS */;
/*!40000 ALTER TABLE `pest_control` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.pest_control_type: ~2 rows (aproximadamente)
DELETE FROM `pest_control_type`;
/*!40000 ALTER TABLE `pest_control_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `pest_control_type` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.quotes: ~5 rows (aproximadamente)
DELETE FROM `quotes`;
/*!40000 ALTER TABLE `quotes` DISABLE KEYS */;
/*!40000 ALTER TABLE `quotes` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.quotes_type: ~5 rows (aproximadamente)
DELETE FROM `quotes_type`;
/*!40000 ALTER TABLE `quotes_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `quotes_type` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.results: ~1 rows (aproximadamente)
DELETE FROM `results`;
/*!40000 ALTER TABLE `results` DISABLE KEYS */;
/*!40000 ALTER TABLE `results` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.roles: ~2 rows (aproximadamente)
DELETE FROM `roles`;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` (`id`, `rol`) VALUES
	(1, 'Administrador'),
	(2, 'Moderador');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.sexes: ~2 rows (aproximadamente)
DELETE FROM `sexes`;
/*!40000 ALTER TABLE `sexes` DISABLE KEYS */;
INSERT INTO `sexes` (`id`, `type`) VALUES
	(1, 'Macho'),
	(2, 'Hembra');
/*!40000 ALTER TABLE `sexes` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.shifts: ~2 rows (aproximadamente)
DELETE FROM `shifts`;
/*!40000 ALTER TABLE `shifts` DISABLE KEYS */;
INSERT INTO `shifts` (`id`, `type`) VALUES
	(1, 'Nocturno'),
	(2, 'Diurno');
/*!40000 ALTER TABLE `shifts` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.speciality: ~2 rows (aproximadamente)
DELETE FROM `speciality`;
/*!40000 ALTER TABLE `speciality` DISABLE KEYS */;
/*!40000 ALTER TABLE `speciality` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.species: ~6 rows (aproximadamente)
DELETE FROM `species`;
/*!40000 ALTER TABLE `species` DISABLE KEYS */;
/*!40000 ALTER TABLE `species` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.users: ~2 rows (aproximadamente)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `names`, `lastnames`, `email`, `password`, `state`, `shiftsId`, `rolesId`) VALUES
	(3, 'Carlos Daniel', 'Contreras Hernandez', 'tiburonchan3@gmail.com', '$2a$10$q5hGZ5MKrL0hklDF91eRGu01VoS1BKUAgyL4c7Dai2ELO11M9qLaO', 1, 2, 1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.vaccination: ~3 rows (aproximadamente)
DELETE FROM `vaccination`;
/*!40000 ALTER TABLE `vaccination` DISABLE KEYS */;
/*!40000 ALTER TABLE `vaccination` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.vaccination_dose: ~0 rows (aproximadamente)
DELETE FROM `vaccination_dose`;
/*!40000 ALTER TABLE `vaccination_dose` DISABLE KEYS */;
/*!40000 ALTER TABLE `vaccination_dose` ENABLE KEYS */;

-- Volcando datos para la tabla clinica-api.vaccination_type: ~2 rows (aproximadamente)
DELETE FROM `vaccination_type`;
/*!40000 ALTER TABLE `vaccination_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `vaccination_type` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
