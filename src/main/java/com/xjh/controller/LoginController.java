package com.xjh.controller;

import com.xjh.pojo.User;
import com.xjh.service.UserLogin;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
public class LoginController {
    @Resource(name = "userLoginImpl")
    UserLogin userLogin;

    String code;

    @RequestMapping("/login")
    @ResponseBody
    public String login(@RequestParam("uid")String uid,@RequestParam("upwd")String upwd,@RequestParam("ucode")String ucode){

        if( !ucode.equals(code) ){

           return "error";
       }
        User user = new User();
        user.setId(Long.parseLong(uid));
        user.setPwd(upwd);

        String res = userLogin.login(user);

        return "";
    }


    @RequestMapping("/code")
    @ResponseBody
    public String code(){
        this.code = "123456";

        return code;
    }


    @RequestMapping("/uid")
    @ResponseBody
    public String getUId(@RequestParam("uid")String uid){

        return "";
    }
}
