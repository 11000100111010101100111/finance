package com.xjh.service;

import com.xjh.pojo.EasyUser;
import com.xjh.pojo.HomeList;
import com.xjh.pojo.User;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

public interface UserLogin {
    public short login(User user);
    public String setCode(int size);
    public EasyUser getUser(String uid);
    public HashMap<String ,Object> getHomeList(String uid);
}
