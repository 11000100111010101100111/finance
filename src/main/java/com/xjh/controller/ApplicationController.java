package com.xjh.controller;

import com.alibaba.fastjson.JSON;
import com.xjh.pojo.AppPaySlip;
import com.xjh.service.ApplicationService;
import com.xjh.util.DateUtil;
import com.xjh.service.processInstance.AddApplicationProcess;
import com.xjh.util.LogUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.*;

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

    //依赖注入添加审批链的执行句柄
    @Resource(name = "processHandle")
    AddApplicationProcess applicationProcess;

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
                System.out.println(e.getLocalizedMessage()+e.getMessage());
            }
        }
        val.put("single",single);
        return JSON.toJSONString(val);
    }

    @ResponseBody
    @RequestMapping("/modifyApplication")
    public String modifyApplication(HttpSession httpSession,
                                 @RequestParam("id")Long sid,
                                 @RequestParam("costType")short costType,
                                 @RequestParam("chargeType")short chargeType,
                                 @RequestParam("payee")String payee,
                                 @RequestParam("bank")String bank,
                                 @RequestParam("bankCount")String bankCount,
                                 @RequestParam("amountCategory")short amountCategory,
                                 @RequestParam("illustrate")String illustrate,
                                 @RequestParam("appAmount")double appAmount,
                                 @RequestParam("audioAmount")double audioAmount){

        String single="error";
        AppPaySlip appPaySlip = new AppPaySlip(sid,payee,bank,bankCount,costType,chargeType,amountCategory,appAmount,audioAmount,illustrate);

        System.out.println(appPaySlip);
        String id =(String)httpSession.getAttribute("uid");
        System.out.println(id);
        HashMap<String ,Object> val = new HashMap<String,Object>();
        if(!"".equals(id)&&id!=null) {

            try {
                String aid = applicationService.modifyApplication(appPaySlip, id);
                single = aid;
            } catch (Exception e) {
                System.out.println("修改申请失败");
                System.out.println(e.getLocalizedMessage()+e.getMessage());
            }
        }else{
            single = "登录信息失效";
        }
        val.put("single",single);
        return JSON.toJSONString(val);
    }

    @ResponseBody
    @RequestMapping("/removeApplication")
    public String removeApplication(HttpSession httpSession,@RequestParam("ids") String[] ids){
        String uid =(String) httpSession.getAttribute("uid");
        System.out.println(ids.toString()+"------------");
//        List<String> ids = (ArrayList<String>) id;
//        System.out.println(ids);
        String single ="error";
        HashMap<String ,Object> val = new HashMap<String,Object>();
        if("".equals(uid)||uid==null){
            single = "登录信息已过期";
            val.put("single",single);
//            return JSON.toJSONString(single);
        }
        List<String> error = new ArrayList<String>();
        for (String s : ids) {
            System.out.println(s);
            String item = applicationService.removeApplication(s);
            if(item != "succeed") error.add(s);
        }
        val.put("list",error) ;
        val.put("single",error.size()>0?"error":"succeed");

        return JSON.toJSONString(val);
    }


    @ResponseBody
    @RequestMapping("/submitApplication")
    public String submitApp(HttpSession httpSession,@RequestParam("sid") String uid,@RequestParam("id") String id){
        String u = (String) httpSession.getAttribute("uid");
        String val = "error";
        if(u==null||"".equals(u)) {
            LogUtil.logInfo("用户登录信息已失效!",ApplicationController.class.getName(),"submitApp");
            return JSON.toJSONString("用户登录信息已失效");
        }
        LogUtil.logInfo("用户"+uid+"登录",ApplicationController.class.getName(),"submitApp");
        try {
            applicationProcess.addMembers(uid, id);
            applicationProcess.addAudit(id, uid);
            val="succeed";
            LogUtil.logInfo("用户"+uid+"提交申请成功",ApplicationController.class.getName(),"submitApp");
        }catch (Exception e){
            System.out.println(e.getMessage()+"----------");
            val ="提交申请失败！";
            LogUtil.logError("用户"+uid+"提交申请失败",ApplicationController.class.getName(),"submitApp");
        }
        return JSON.toJSONString(val);
    }

    @ResponseBody
    @RequestMapping("/findAppList")
    public String findAppList(
            @RequestParam(value = "uid", required = false) String uid,
            @RequestParam(value = "starTime", required = false)String starTime,
            @RequestParam(value = "endTime", required = false)String endTime,
            @RequestParam(value = "cost", required = false)Short cost,
            @RequestParam(value = "payType", required = false)Short payType){
//        System.out.println(uid+"=="+starTime+"<--->"+endTime+"=="+cost+"=="+payType);

//        String uid = (String)httpSession.getAttribute("uid");
        String single="error";
        HashMap<String ,Object> list = new HashMap<String,Object>();
        if(uid==null||"".equals(uid))
            single = "用户登录信息已失效";
        else {
            List<AppPaySlip> val = applicationService.findAppList(
                    "".equals(starTime)||starTime ==null?null:DateUtil.StringToDate(starTime.replace('T',' ')+":00"),
                    "".equals(endTime)||endTime ==null?null:DateUtil.StringToDate(endTime.replace('T',' ')+":59"),
                    cost<=0||cost ==null?null:cost,
                    payType<=0||payType ==null?null:payType,
                    Long.parseLong(uid));

            list.put("list",val);
            single = "succeed";
        }

        list.put("single",single);
        return JSON.toJSONString(list);
    }
}
