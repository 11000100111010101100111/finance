/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50532
Source Host           : localhost:3306
Source Database       : finance

Target Server Type    : MYSQL
Target Server Version : 50532
File Encoding         : 65001

Date: 2002-01-01 00:05:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `app_form`
-- ----------------------------
DROP TABLE IF EXISTS `app_form`;
CREATE TABLE `app_form` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `payslip_id` bigint(20) DEFAULT NULL,
  `oder_user_id` bigint(20) DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `single` smallint(6) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of app_form
-- ----------------------------
INSERT INTO `app_form` VALUES ('3', '3', '123464', '1', '2021-08-23 09:06:50', '0');
INSERT INTO `app_form` VALUES ('4', '2', '123464', '2', '2021-08-23 08:00:00', '1');
INSERT INTO `app_form` VALUES ('5', '1', '123464', '2', '2021-08-22 21:30:54', '1');

-- ----------------------------
-- Table structure for `app_list`
-- ----------------------------
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of app_list
-- ----------------------------
INSERT INTO `app_list` VALUES ('1', '5', '123464', '2', '2021-08-23 09:33:23', '无', null);
INSERT INTO `app_list` VALUES ('2', '5', '123461', '2', null, null, null);
INSERT INTO `app_list` VALUES ('3', '5', '123460', null, null, null, null);
INSERT INTO `app_list` VALUES ('4', '5', '123459', null, null, null, null);
INSERT INTO `app_list` VALUES ('5', '5', '123457', null, null, null, null);
INSERT INTO `app_list` VALUES ('6', '5', '123458', null, null, null, null);
INSERT INTO `app_list` VALUES ('7', '4', '123464', '2', '2021-08-23 09:58:16', '购买机房服务器2台', null);
INSERT INTO `app_list` VALUES ('8', '4', '123461', '2', null, null, null);
INSERT INTO `app_list` VALUES ('9', '4', '123460', null, null, null, null);
INSERT INTO `app_list` VALUES ('10', '4', '123459', null, null, null, null);
INSERT INTO `app_list` VALUES ('11', '4', '123457', null, null, null, null);
INSERT INTO `app_list` VALUES ('12', '4', '123458', null, null, null, null);

-- ----------------------------
-- Table structure for `easyuser`
-- ----------------------------
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

-- ----------------------------
-- Records of easyuser
-- ----------------------------
INSERT INTO `easyuser` VALUES ('1', '123456', '肖家海', '董事长', '1', '总部');
INSERT INTO `easyuser` VALUES ('2', '123457', '张三', '总经理', '2', '总部');
INSERT INTO `easyuser` VALUES ('3', '123458', '李四', '财务经理', '3', '总部');
INSERT INTO `easyuser` VALUES ('4', '123459', '王五', '分管副总', '4', '信息部');
INSERT INTO `easyuser` VALUES ('5', '123460', '张麻子', '部门负责人', '5', '信息部');
INSERT INTO `easyuser` VALUES ('6', '123461', '狗蛋', '财务负责人', '6', '信息部');
INSERT INTO `easyuser` VALUES ('7', '123462', '路人甲', '物流采购', '7', '信息部');
INSERT INTO `easyuser` VALUES ('8', '123463', '路人乙', '材料采购', '7', '信息部');
INSERT INTO `easyuser` VALUES ('9', '123464', '路人丙', '设备采购', '7', '信息部');

-- ----------------------------
-- Table structure for `employee`
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) DEFAULT NULL,
  `lower_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of employee
-- ----------------------------
INSERT INTO `employee` VALUES ('1', '123461', '123464');
INSERT INTO `employee` VALUES ('2', '123460', '123461');
INSERT INTO `employee` VALUES ('3', '123459', '123460');
INSERT INTO `employee` VALUES ('4', '123458', '123459');
INSERT INTO `employee` VALUES ('5', '123457', '123458');
INSERT INTO `employee` VALUES ('6', '123456', '123457');

-- ----------------------------
-- Table structure for `home_list`
-- ----------------------------
DROP TABLE IF EXISTS `home_list`;
CREATE TABLE `home_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `path` varchar(100) DEFAULT NULL,
  `grade` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of home_list
-- ----------------------------
INSERT INTO `home_list` VALUES ('1', '申请', 'http://localhost:8080/finance_war_exploded/application', '7');
INSERT INTO `home_list` VALUES ('2', '我的申请', 'http://localhost:8080/finance_war_exploded/application', '7');
INSERT INTO `home_list` VALUES ('3', '审批', 'http://localhost:8080/finance_war_exploded/audit', '1');
INSERT INTO `home_list` VALUES ('4', '审批', 'http://localhost:8080/finance_war_exploded/audit', '2');
INSERT INTO `home_list` VALUES ('5', '审批', 'http://localhost:8080/finance_war_exploded/audit', '3');
INSERT INTO `home_list` VALUES ('6', '审批', 'http://localhost:8080/finance_war_exploded/audit', '4');
INSERT INTO `home_list` VALUES ('7', '审批', 'http://localhost:8080/finance_war_exploded/audit', '5');
INSERT INTO `home_list` VALUES ('8', '审批', 'http://localhost:8080/finance_war_exploded/audit', '6');

-- ----------------------------
-- Table structure for `payment_slip`
-- ----------------------------
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
  `status` smallint(6) DEFAULT NULL,
  `single` smallint(6) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of payment_slip
-- ----------------------------
INSERT INTO `payment_slip` VALUES ('1', '江西省科学院', '中国银行', '12345678954846156', '1', '1', '1', '2000', '2500', '无', '1', '1');
INSERT INTO `payment_slip` VALUES ('2', '江西省科学院', '中国农业银行', '6217001000325481', '1', '1', '1', '50000', '50000', '购买机房服务器2台', '1', '1');
INSERT INTO `payment_slip` VALUES ('3', '南昌大学第一附属医院', '中国建设银行', '4566512230000145744', '1', '1', '1', '50000', '50000', '防疫用品', '1', '0');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` bigint(20) NOT NULL AUTO_INCREMENT,
  `upwd` varchar(30) NOT NULL DEFAULT '123456',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=123465 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('123456', '123456');
INSERT INTO `user` VALUES ('123457', '123456');
INSERT INTO `user` VALUES ('123458', '123456');
INSERT INTO `user` VALUES ('123459', '123456');
INSERT INTO `user` VALUES ('123460', '123456');
INSERT INTO `user` VALUES ('123461', '123456');
INSERT INTO `user` VALUES ('123462', '123456');
INSERT INTO `user` VALUES ('123463', '123456');
INSERT INTO `user` VALUES ('123464', '123456');
