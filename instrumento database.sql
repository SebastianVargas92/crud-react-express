/*
SQLyog Ultimate v9.02 
MySQL - 5.5.5-10.4.14-MariaDB : Database - instrumentos_db
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`instrumentos_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `instrumentos_db`;

/*Table structure for table `instrumento` */

DROP TABLE IF EXISTS `instrumento`;

CREATE TABLE `instrumento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(30) DEFAULT NULL,
  `modelo` varchar(30) DEFAULT NULL,
  `imagen` varchar(30) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `costoEnvio` varchar(10) DEFAULT NULL,
  `cantidadVendida` int(11) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `instrumento` varchar(30) DEFAULT NULL,
  `baja` char(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `instrumento` */

insert  into `instrumento`(`id`,`marca`,`modelo`,`imagen`,`precio`,`costoEnvio`,`cantidadVendida`,`descripcion`,`instrumento`,`baja`) values (1,'fender','sx','nro4.jpg',230,'100',2,'guitarra profesional','Guitarra Acústica',NULL),(2,'Staggs','M30','nro10.jpg',123,'g',3,'mandolina ','Mandolina Instrument',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
