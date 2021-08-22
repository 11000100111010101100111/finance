package com.xjh.service.serviceImpl;

import com.alibaba.fastjson.JSON;
import com.xjh.dao.ApplicationDao;
import com.xjh.pojo.AppPaySlip;
import com.xjh.service.ApplicationService;
import com.xjh.service.DateUtil;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.Date;
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
        Integer id = apDao.addApplication(appPaySlip);
        Long item=0l;
        System.out.println(id);
        if(id>0) {
            item = appPaySlip.getId();
            int single = apDao.addAppForm(item, Long.parseLong(uid), appPaySlip.getStatus());
        }
        return item;
    }

    @Override
    public String modifyApplication(AppPaySlip appPaySlip, String uid) {
        Integer item = apDao.modifyApplication(appPaySlip);
        return item>0?"succeed":"修改失败！";
    }

    @Override
    public List<AppPaySlip> findAppList(Date time_start, Date time_end, Short costType, Short chargeType,Long uid) {
//        System.out.println(time_start+"=="+time_end+"==="+costType+"="+chargeType);
//        System.out.println(DateUtil.DateToStr(time_start)+"=="+DateUtil.DateToStr(time_end)+"==="+costType+"="+chargeType);
        List<AppPaySlip> list =null;
        try {
            list = apDao.findAppList(time_start, time_end, costType, chargeType,uid);
        }catch (Exception e){
            System.out.println(e.getLocalizedMessage()+e.getMessage());
        }
        return list;
    }

    @Override
    public String removeApplication(String id) {

        String val = "error";
        Integer single = 0;
        try {
            single = apDao.removeApplication(Long.parseLong(id));
            if (single>0)
                single = apDao.removeSlip(Long.parseLong(id));
            val = single>0?"succeed":"删除失败";
        }catch (Exception e){
            System.out.println(e.getLocalizedMessage()+e.getMessage());
        }
        return val;
    }

    @Override
    @Transactional
    public Integer addAudit(String appid, String uid) {
        Integer val =0;
//        actionA();	//执行动作A
       goback("",val);
//        actionB();
        goback("",val);

        goback("",val);

        goback("",val);

        return null;
    }
    void goback(String message,Integer single){
        if(single<=0){
            //抛出异常，事务回滚，即动作A撤销，动作B不执行
            throw new RuntimeException(message);
        }
    }
}
