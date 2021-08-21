package com.xjh.service;

import com.xjh.pojo.AppPaySlip;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/21
 * Time: 21:34
 **/
public interface ApplicationService {
    public HashMap<String ,Object> getApplicationList(String uid);
    public HashMap<String,Object> getApplicating(String id);
    public Long addApplication(AppPaySlip appPaySlip,String uid);
}
