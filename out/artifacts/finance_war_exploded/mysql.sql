/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 5.7.15 : Database - finance
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`finance` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `finance`;

/*Table structure for table `app_form` */

DROP TABLE IF EXISTS `app_form`;

CREATE TABLE `app_form` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `payslip_id` bigint(20) DEFAULT NULL,
  `oder_user_id` bigint(20) DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `app_form` */

/*Table structure for table `app_list` */

DROP TABLE IF EXISTS `app_list`;

CREATE TABLE `app_list` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `application_id` bigint(20) DEFAULT NULL,
  `node_user_id` bigint(20) DEFAULT NULL,
  `operator` smallint(6) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `remark` varchar(128) DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `app_list` */

/*Table structure for table `easyuser` */

DROP TABLE IF EXISTS `easyuser`;

CREATE TABLE `easyuser` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) DEFAULT NULL,
  `uname` varchar(30) DEFAULT NULL,
  `posts` varchar(20) DEFAULT NULL,
  `grade` int(11) DEFAULT NULL,
  `department` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `easyuser` */

insert  into `easyuser`(`id`,`uid`,`uname`,`posts`,`grade`,`department`) values 
(1,123456,'肖家海','总经理',2,'总部'),
(2,123457,'张三','财务经理',3,'总部'),
(3,123458,'李四','董事长',1,'总部'),
(4,123459,'王五','分管副总',4,'信息部'),
(5,123460,'张麻子','部门负责人',5,'信息部'),
(6,123461,'狗蛋','财务负责人',6,'信息部'),
(7,123462,'路人甲','物流采购',7,'信息部'),
(8,123463,'路人乙','材料采购',7,'信息部'),
(9,123464,'路人丙','设备采购',7,'信息部');

/*Table structure for table `employee` */

DROP TABLE IF EXISTS `employee`;

CREATE TABLE `employee` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) DEFAULT NULL,
  `lower_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `employee` */

/*Table structure for table `payment_slip` */

DROP TABLE IF EXISTS `payment_slip`;

CREATE TABLE `payment_slip` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `payee` varchar(50) DEFAULT NULL,
  `bank` varchar(50) DEFAULT NULL,
  `bankCount` varchar(30) DEFAULT NULL,
  `costType` smallint(6) DEFAULT NULL,
  `chargeType` smallint(6) DEFAULT NULL,
  `amountCategory` smallint(6) DEFAULT NULL,
  `appAmount` float DEFAULT NULL,
  `audioAmount` float DEFAULT NULL,
  `illustrate` varchar(215) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `payment_slip` */

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `uid` bigint(20) NOT NULL AUTO_INCREMENT,
  `upwd` varchar(30) NOT NULL DEFAULT '123456',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=123465 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`uid`,`upwd`) values 
(123456,'123456'),
(123457,'123456'),
(123458,'123456'),
(123459,'123456'),
(123460,'123456'),
(123461,'123456'),
(123462,'123456'),
(123463,'123456'),
(123464,'123456');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
