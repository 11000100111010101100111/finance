package com.xjh.service.processInstance;

import java.util.*;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/22
 * Time: 16:44
 **/
public class BaseProcess {

    Long processId;//申请实例id
    Long processUid;//申请人id
    LinkedHashMap<Long,Integer> memberList =null;

    public BaseProcess(Long processId, Long processUid) {
        this.processId = processId;
        this.processUid = processUid;
    }

    public Long getProcessId() {
        return processId;
    }

    public void setProcessId(Long processId) {
        this.processId = processId;
    }

    public Long getProcessUid() {
        return processUid;
    }

    public void setProcessUid(Long processUid) {
        this.processUid = processUid;
    }

    public LinkedHashMap<Long, Integer> getMemberList() {
        return memberList;
    }

    public void setMemberList(LinkedHashMap<Long, Integer> memberList) {
        this.memberList = memberList;
        this.sort();
    }
    public void setMemberList() {
        this.sort();
    }

    public void sort(){
        List<Map.Entry<Long, Integer>> infoIds =new ArrayList<Map.Entry<Long, Integer>>(this.memberList.entrySet());
        //排序
        Collections.sort(infoIds, new Comparator<Map.Entry<Long, Integer>>() {
            public int compare(Map.Entry<Long, Integer> o1, Map.Entry<Long, Integer> o2) {
                Integer p1 =  o1.getValue();
                Integer p2 = o2.getValue();;
                return p2-p1;//如果要升序， 改为return Integer.valueOf(p1)-Integer.valueOf(p2);
            }
        });

        //转换成新map输出
        LinkedHashMap<Long, Integer> newMap = new LinkedHashMap <Long, Integer>();

        for(Map.Entry<Long, Integer> entity : infoIds){
            newMap.put(entity.getKey(), entity.getValue());
//            System.out.println("***---"+entity.getKey());
        }
        this.memberList = newMap;
    }
}
