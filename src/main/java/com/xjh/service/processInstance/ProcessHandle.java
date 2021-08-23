package com.xjh.service.processInstance;

import com.xjh.dao.ApplicationDao;
import com.xjh.pojo.EasyUser;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.*;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/22
 * Time: 16:55
 **/

@Service("processHandle")
public class ProcessHandle implements AddApplicationProcess{
    @Resource(name = "applicationDao")
    ApplicationDao apDao;


    FitProcess fitProcess;

    @Override
    public void addMembers(String uid,String id){
        System.out.println(id);
        short costType = apDao.selectCostType(Long.parseLong(id));

        System.out.println(id+"-----"+costType);

        fitProcess = costType == 1? new DirectCosts(Long.parseLong(id),Long.parseLong(uid))
                :new NonDirectCosts(Long.parseLong(id),Long.parseLong(uid));

//        System.out.println(fitProcess.getProcessId()+"++++"+fitProcess.getProcessUid());
        LinkedHashMap<Long ,Integer> members = new LinkedHashMap<Long,Integer>();
        List<EasyUser> item = new ArrayList<EasyUser>();

        Long keyId = Long.parseLong(uid);

//        item = apDao.selectMember(keyId );

        members.put(keyId,apDao.selectGrade(keyId));

        while ( ( item = apDao.selectMember(keyId ) ).size()>0){

//            System.out.println("==>"+keyId);
            for (EasyUser easyUser : item) {
                members.put(easyUser.getUid(),easyUser.getGrade());
//                System.out.println(easyUser.getUid()+"***"+easyUser.getGrade());
                keyId = easyUser.getUid();
            }
        }
        fitProcess.setMemberList(members);
    }

    public FitProcess getFitProcess() {
        return fitProcess;
    }
    @Override
    @Transactional
    public Integer addAudit(String appid, String uid) {
        if(fitProcess.getMemberList().size()<=0){
            return -1;
        }
        Integer val =0;
//        Long ids[] = new Long[fitProcess.getMemberList().size()];
        Iterator<Map.Entry<Long, Integer>> iterator = fitProcess.getMemberList().entrySet().iterator();
        short single = 2;
        while (iterator.hasNext()) {

            Map.Entry<Long, Integer> item = iterator.next();

            System.out.println(item.getKey()+"***"+item.getValue());
            val = apDao.addApplicationNode(Long.parseLong(appid), item.getKey());
            if(val<=0)
                //抛出异常，事务回滚，即动作撤销，后动作不执行
                throw new RuntimeException("审批链构成失败，从编号为：" + item.getKey() + "处断裂，已回滚！");
            if (single>=0) single-=1;
            if(single == 0) {
                //修改提交申请者的上级审批状态为待审批
                apDao.charageNodeState((short) 2,item.getKey(),Long.parseLong(appid));
            }
        }

//    1:"待提交"
//    2:"待审核"<---
//    3:"未通过"
//    4:"待提交"
//    5:"已通过"
        String remark = apDao.selectremark(Long.parseLong(appid));
        Short operator = 2;
        apDao.writeNodeMsg(Long.parseLong(uid), Long.parseLong(appid),operator, remark);
//        if(val<=0)
//            throw new RuntimeException("审批链构成失败，插入提交者的提交信息失败，已回滚！");

        apDao.charageState(operator,Long.parseLong(appid));
//        if(val<=0) throw new RuntimeException("审批链构成失败，插入提交者的提交信息失败，已回滚！");

        return val;
    }

}
