package com.xjh.pojo;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/21
 * Time: 14:32
 **/
//@MappingSqlTable:
//CREATE TABLE `easyuser` (
//        `id` bigint(20) NOT NULL AUTO_INCREMENT,
//        `uid` bigint(20) DEFAULT NULL,
//        `uname` varchar(30) DEFAULT NULL,
//        `posts` varchar(20) DEFAULT NULL,
//        `grade` int(11) DEFAULT NULL,
//        `department` varchar(30) DEFAULT NULL,
//        PRIMARY KEY (`id`)
//        ) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
public class EasyUser extends User{
    Long id;
    Long uid;
    String uname;
    String posts;
    int grade;
    String department;

    public EasyUser() {
    }

    public EasyUser(Long id, Long uid, String uname, String posts, int grade, String department) {
        this.id = id;
        this.uid = uid;
        this.uname = uname;
        this.posts = posts;
        this.grade = grade;
        this.department = department;
    }

    public EasyUser(Long uid, String uname, String posts, int grade, String department) {
        this.uid = uid;
        this.uname = uname;
        this.posts = posts;
        this.grade = grade;
        this.department = department;
    }

    @Override
    public String toString() {
        return "EasyUser{" +
                "id=" + id +
                ", uid=" + uid +
                ", name='" + uname + '\'' +
                ", posts='" + posts + '\'' +
                ", grade=" + grade +
                ", department='" + department + '\'' +
                '}';
    }

    @Override
    public Long getId() {
        return id;
    }

    @Override
    public void setId(Long id) {
        this.id = id;
    }

    public Long getUid() {
        return uid;
    }

    public void setUid(Long uid) {
        this.uid = uid;
    }

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }

    public String getPosts() {
        return posts;
    }

    public void setPosts(String posts) {
        this.posts = posts;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}
