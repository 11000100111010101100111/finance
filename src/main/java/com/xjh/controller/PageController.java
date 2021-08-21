package com.xjh.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {

    @RequestMapping("/home")
    public String toHome(){
        return "home";
    }

    @RequestMapping("/application")
    public String toApplication(){
        return "application";
    }

    @RequestMapping("/audit")
    public String toAudit(){
        return "audit";
    }

    @RequestMapping("/toLogin")
    public String login(){
        return "login";
    }
}
