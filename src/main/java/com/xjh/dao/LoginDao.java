package com.xjh.dao;

import com.xjh.pojo.User;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginDao {
    public User login(Long id);
}
