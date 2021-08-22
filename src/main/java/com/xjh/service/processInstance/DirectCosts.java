package com.xjh.service.processInstance;

import java.lang.reflect.Field;
import java.util.*;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/22
 * Time: 16:46
 **/
public class DirectCosts extends FitProcess {
    public DirectCosts(Long processId, Long processUid) {
        super(processId, processUid);
    }

    @Override
    public void setMemberList(LinkedHashMap<Long, Integer> memberList) {
        super.setMemberList(memberList);

        //移除最后一个不记录
        Map.Entry<Long,Integer> last = getLast();

        //移除之前的倒数第二个并记录
        last = getLast();
//        移除之前的倒数第三个并记录
        Map.Entry<Long,Integer> last1 = getLast();

//        重新添加之前的倒数第二和倒数第三个，此时交换了两者的顺序
        this.memberList.put(last.getKey(),last.getValue());
        this.memberList.put(last1.getKey(),last1.getValue());

    }

    Map.Entry<Long,Integer> getLast(){
        Field tail = null;
        Map.Entry<Long,Integer> entry =null;
        try {
            tail = this.memberList.getClass().getDeclaredField("tail");
            tail.setAccessible(true);
            entry= (Map.Entry<Long,Integer>) tail.get(this.memberList);

//            移除最后一个键值对
            this.memberList.remove(entry.getKey(),entry.getValue());

        } catch (NoSuchFieldException|IllegalAccessException e) {
            e.printStackTrace();
        }
        return  entry;
    }

    @Override
    public void setMemberList() {
        super.setMemberList();
    }
}
