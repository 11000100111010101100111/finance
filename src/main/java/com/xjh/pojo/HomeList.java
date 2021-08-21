package com.xjh.pojo;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/21
 * Time: 20:17
 **/
public class HomeList {
    String name;
    String path;

    public HomeList() {
    }

    public HomeList(String name, String path) {
        this.name = name;
        this.path = path;
    }

    @Override
    public String toString() {
        return "HomeList{" +
                "name='" + name + '\'' +
                ", path='" + path + '\'' +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}
