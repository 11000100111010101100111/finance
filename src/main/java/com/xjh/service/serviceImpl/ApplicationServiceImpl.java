package com.xjh.service.serviceImpl;

import com.alibaba.fastjson.JSON;
import com.xjh.dao.ApplicationDao;
import com.xjh.pojo.AppPaySlip;
import com.xjh.service.ApplicationService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/21
 * Time: 21:35
 **/
@Service("applicationServiceImpl")
public class ApplicationServiceImpl implements ApplicationService {
    @Resource(name = "applicationDao")
    ApplicationDao apDao;


    @Override
    public HashMap<String, Object> getApplicationList(String uid) {
        HashMap<String ,Object> list = new HashMap<String,Object>();
        String single="error";
        try {
            List<AppPaySlip> val = apDao.getApplicationList(Long.parseLong(uid));
            list.put("list",val);
            single="succeed";
        }catch (Exception e){
            System.out.println("===获取申请列表：error");
        }
        list.put("single",single);
        return list;
    }

    @Override
    public HashMap<String, Object> getApplicating(String id) {
        HashMap<String,Object> list = new HashMap<String,Object>();
        String single="error";
        try {
            AppPaySlip paySlip = apDao.getApplication(Long.parseLong(id));
            list.put("list",paySlip);
            single="succeed";
        }catch (Exception e){
            System.out.println("获取"+id+"的信息失败");
        }
        list.put("single",single);
        return list;
    }

    @Override
    public Long addApplication(AppPaySlip appPaySlip,String uid) {
        Long id = apDao.AddApplication();
        if(id>0) {
            id = appPaySlip.getId();
            int single = apDao.addAppForm(id, Long.parseLong(uid), appPaySlip.getStatus());
        }
        return id;
    }
}
