package com.xjh.pojo;
//@MappingSqlTable:
//CREATE TABLE `user` (
//        `uid` bigint(20) NOT NULL AUTO_INCREMENT,
//        `upwd` varchar(30) NOT NULL DEFAULT '123456',
//        PRIMARY KEY (`uid`)
//        ) ENGINE=InnoDB AUTO_INCREMENT=123465 DEFAULT CHARSET=utf8;
public class User {
    Long id;
    String pwd;

    public User(){}

    public User(Long id, String pwd) {
        this.id = id;
        this.pwd = pwd;
    }

    @Override
    public String toString() {
        return "User{" +
                ", id=" + id +
                ", pwd='" + pwd + '\'' +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }
}
