package com.xjh.service.processInstance;

import java.util.*;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/22
 * Time: 16:46
 **/
public class NonDirectCosts extends  FitProcess {
    public NonDirectCosts(Long processId, Long processUid) {
        super(processId, processUid);
    }

    @Override
    public void setMemberList(LinkedHashMap<Long, Integer> memberList) {
        super.setMemberList(memberList);
    }

    @Override
    public void setMemberList() {
        super.setMemberList();

    }
}
