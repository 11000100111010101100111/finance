package com.xjh.dao;

import com.xjh.pojo.AppPaySlip;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/21
 * Time: 20:59
 **/
@Repository("applicationDao")
public interface ApplicationDao {
    public List<AppPaySlip> getApplicationList(Long uid);
    public AppPaySlip getApplication(Long id);
    public Long AddApplication();
    public Integer addAppForm(@Param("payslip_id")Long slip_id,@Param("uid") Long uid,@Param("status") short status);
}
