package com.xjh.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {

    @RequestMapping("/home")
    public String home(){
        return "home";
    }

    @RequestMapping("/application")
    public String application(){
        return "application";
    }

    @RequestMapping("/audit")
    public String audit(){
        return "audit";
    }

    @RequestMapping("/toLogin")
    public String tologin(){
        return "login";
    }
}
