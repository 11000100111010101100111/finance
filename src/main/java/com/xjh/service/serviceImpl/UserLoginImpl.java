package com.xjh.service.serviceImpl;

import com.alibaba.fastjson.JSON;
import com.xjh.dao.LoginDao;
import com.xjh.pojo.EasyUser;
import com.xjh.pojo.HomeList;
import com.xjh.pojo.User;
import com.xjh.service.UserLogin;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

@Service("userLoginImpl")
public class UserLoginImpl implements UserLogin {
    @Resource(name = "loginDao")
    LoginDao userDao;

    @Override
    public short login(User user) {
        //@AOTO 0:账号不存在、1：登录失败、2：登陆成功
        User item = userDao.login(user.getId());
        if (item==null||item.getId()==null){
            return 0;
        }
        return (short) (item.getId().equals(user.getId()) && item.getPwd().equals(user.getPwd())?2:1);
    }

    //生成验证码
    @Override
    public String setCode(int size) {
        StringBuilder sb = new StringBuilder("");
//        48-57:0-9
//        65-90:A-Z
//        97-122:a-z
//        while ((sb.append((new Random()).nextInt(90)+65)).length()<size){}
        int item = 0;
        while (sb.length()<size)
        {
            while(( (item =(new Random()).nextInt(74)+48)>57 && item<65)
                    || (item>90&&item<97) ){}
//            System.out.println(item + ":" + (char) (item));
            sb.append((char) (item));
        }
        return sb.toString();
    }

    @Override
    public EasyUser getUser(String uid) {
        EasyUser item = userDao.getUser(Long.parseLong(uid));
        return item;
    }

    //根据用户Id获取导航栏列表
    @Override
    public HashMap<String ,Object> getHomeList(String uid) {
        HashMap<String ,Object> res = new HashMap<String ,Object>();
        String single = "succeed";
        try {
            List<HomeList> homeLists = userDao.getHomeList(Long.parseLong(uid));
            res.put("list",homeLists);
        }catch (Exception e){
            single = "error";
        }
        res.put("single",single);

        return res;
    }
}
