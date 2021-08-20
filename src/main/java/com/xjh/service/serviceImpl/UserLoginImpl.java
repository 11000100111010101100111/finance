package com.xjh.service.serviceImpl;

import com.xjh.dao.LoginDao;
import com.xjh.pojo.User;
import com.xjh.service.UserLogin;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("userLoginImpl")
public class UserLoginImpl implements UserLogin {
    @Resource(name = "loginDao")
    LoginDao userDao;

    @Override
    public String login(User user) {
        User item = userDao.login(user.getId());

        String res = ";";

        return null;
    }
}
