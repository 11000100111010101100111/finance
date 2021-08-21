package com.xjh.controller;

import com.alibaba.fastjson.JSON;
import com.xjh.pojo.AppPaySlip;
import com.xjh.service.ApplicationService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.HashMap;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/21
 * Time: 21:39
 **/
@Controller
public class ApplicationController {
    @Resource(name = "applicationServiceImpl")
    ApplicationService applicationService;

    @ResponseBody
    @RequestMapping("/getApplicationList")
    public String getAppList(HttpSession httpSession, @RequestParam("uid")String uid){
        HashMap<String,Object> list = new HashMap<String ,Object>();
        String id = (String)httpSession.getAttribute("uid");
        if(id==null||id.equals("")){
            list.put("single","error");
        }else {
            list=applicationService.getApplicationList(uid);
        }
        return JSON.toJSONString(list);
    }

    @ResponseBody
    @RequestMapping("/getApplication")
    public String getApplication(HttpSession httpSession,@RequestParam("id")String id){
        HashMap<String,Object> list = new HashMap<String,Object>();
        list=applicationService.getApplicating(id);
        return JSON.toJSONString(list);
    }

    @ResponseBody
    @RequestMapping("/addApplication")
    public String addApplication(HttpSession httpSession,
                                 @RequestParam("id")Long sid,
                                 @RequestParam("costType")short costType,
                                 @RequestParam("chargeType")short chargeType,
                                 @RequestParam("payee")String payee,
                                 @RequestParam("bank")String bank,
                                 @RequestParam("bankCount")String bankCount,
                                 @RequestParam("amountCategory")short amountCategory,
                                 @RequestParam("illustrate")String illustrate,
                                 @RequestParam("appAmount")double appAmount,
                                 @RequestParam("audioAmount")double audioAmount,
                                 @RequestParam("status")short status){

        String single="error";
        AppPaySlip appPaySlip = new AppPaySlip(sid,payee,bank,bankCount,costType,chargeType,amountCategory,appAmount,audioAmount,illustrate,status);
//        AppPaySlip a = (AppPaySlip) JSON.parse(appPaySlip);
        System.out.println(appPaySlip);
        String id =(String)httpSession.getAttribute("uid");
        System.out.println(id);
        HashMap<String ,Object> val = new HashMap<String,Object>();
        if(!"".equals(id)&&id!=null) {

            try {
                Long aid = applicationService.addApplication(appPaySlip, id);
                val.put("id", aid);
                single = "succeed";
            } catch (Exception e) {
                System.out.println("添加申请失败");
            }
        }
        val.put("single",single);
        return JSON.toJSONString(val);
    }
}
