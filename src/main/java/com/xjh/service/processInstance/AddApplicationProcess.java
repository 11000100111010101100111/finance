package com.xjh.service.processInstance;

import org.springframework.transaction.annotation.Transactional;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/22
 * Time: 17:15
 **/
public interface AddApplicationProcess {

    public void addMembers(String uid,String id);
    public FitProcess getFitProcess();

    public Integer addAudit(String appid, String uid);
}
