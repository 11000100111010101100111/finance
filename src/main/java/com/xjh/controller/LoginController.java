package com.xjh.controller;

import com.alibaba.fastjson.JSON;
import com.xjh.pojo.EasyUser;
import com.xjh.pojo.User;
import com.xjh.service.UserLogin;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.Random;

@Controller
public class LoginController {
    @Resource(name = "userLoginImpl")
    UserLogin userLogin;

    StringBuffer code = new StringBuffer("12345");
    final int CODE_SIZE = 5;


    @RequestMapping("/login")
    @ResponseBody
    public String login(HttpSession httpSession, @RequestParam("uid")String uid, @RequestParam("upwd")String upwd, @RequestParam("ucode")String ucode){

        System.out.println(uid+"-"+upwd+":"+ucode);
        if( !ucode.contentEquals(code) ){

           return "验证码不正确！";
        }
        User user = new User(Long.parseLong(uid),upwd);

        short res = userLogin.login(user);
        if(res==2)
            httpSession.setAttribute("uid",uid);
//            httpSession.setAttribute(uid,"uid");
//        res==0?"账号不存在！":(res==1?"登录失败！":"登陆成功！")
        return JSON.toJSONString(res);
    }

    @RequestMapping("/exit")
    @ResponseBody
    public String exit(HttpSession httpSession){
        System.out.println("=====");
        System.out.println(httpSession.getAttribute("uid"));
        String str="";
        if(httpSession.getAttribute("uid")==null){
            return JSON.toJSONString("没有登录信息");
        }
        try {
            httpSession.removeAttribute("uid");
            str = "退出成功";
        }catch (Exception e){
            str = "退出失败";
        }
        return JSON.toJSONString(str);
    }

    //获取验证码
    @RequestMapping("/getCode")
    @ResponseBody
    public String code(){
//        this.code.delete(0,this.code.length());
//        for (int i=0;i<this.CODE_SIZE;i++) {
//            this.code.append((new Random()).nextInt(9));
//        }
        this.code = new StringBuffer(userLogin.setCode(this.CODE_SIZE));
//        while ((this.code.append((new Random()).nextInt(9))).length()<5){}

        return JSON.toJSONString(code.toString());
    }


    @RequestMapping("/uid")
    @ResponseBody
    public String getUId(@RequestParam("uid")String uid){

        return "";
    }

    @RequestMapping("/getUser")
    @ResponseBody
    public String getUser(@RequestParam("uid") String uid){
        EasyUser item = userLogin.getUser(uid);
        String res = JSON.toJSONString(item);
        System.out.println(item);
        return res;
    }

    @RequestMapping("/getHomeList")
    @ResponseBody
    public String homeList(@RequestParam("uid")String uid){
        return  JSON.toJSONString(userLogin.getHomeList(uid));
    }
}
