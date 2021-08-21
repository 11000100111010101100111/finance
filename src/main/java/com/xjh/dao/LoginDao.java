package com.xjh.dao;

import com.xjh.pojo.EasyUser;
import com.xjh.pojo.HomeList;
import com.xjh.pojo.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoginDao {
    public User login(Long id);
    public EasyUser getUser(Long uid);

    public List<HomeList> getHomeList(Long uid);

}
