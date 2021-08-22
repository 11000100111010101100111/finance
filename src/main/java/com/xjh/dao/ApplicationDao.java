package com.xjh.dao;

import com.xjh.pojo.AppPaySlip;
import com.xjh.pojo.EasyUser;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/21
 * Time: 20:59
 **/
@Repository
public interface ApplicationDao {
    public List<AppPaySlip> getApplicationList(Long uid);
    public AppPaySlip getApplication(Long id);
    public Integer addApplication(AppPaySlip appPaySlip);
    public Integer addAppForm(@Param("payslip_id")Long slip_id,@Param("uid") Long uid,@Param("status") short status);
    public Integer modifyApplication(AppPaySlip appPaySlip);

    //条件查找申请信息
    public List<AppPaySlip> findAppList(@Param("time_start") Date time_satrt,
                                  @Param("time_end") Date time_end,
                                  @Param("costType") Short costType,
                                  @Param("chargeType")Short chargeType,
                                        @Param("uid") Long uid);


    public Integer removeApplication(Long id);
    public Integer removeSlip(Long id);

    public short selectCostType(Long id);

//    根据员工id查询他的直接领导的id和等级
    public List<EasyUser> selectMember(Long id);
    public Integer selectGrade(Long id);

    //插入审批流程到审批流程表
    public Integer addApplicationNode(@Param("aid")Long aid,@Param("uid") Long uid);
    //查询备注信息
    public String selectremark(Long aid);
    //填入当前执行结点操作结果
    public Integer writeNodeMsg(@Param("uid")Long uid,@Param("aid")Long aid,@Param("operator") Short operator,@Param("remark")String remark);
//插入成功后，修改app_form中对应状态为【待审核->2】
    public Integer charageState(@Param("status")Short status,@Param("aid") Long aid);
    //修改审批结点的售票状态
    public Integer charageNodeState(@Param("status")Short status,@Param("uid") Long uid,@Param("aid")Long aid);

}
