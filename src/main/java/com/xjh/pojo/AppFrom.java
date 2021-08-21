package com.xjh.pojo;

import java.util.Date;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/21
 * Time: 14:30
 **/

//@MappingSqlTable:
// CREATE TABLE `app_form` (
//        `id` bigint(20) NOT NULL AUTO_INCREMENT,
//        `payslip_id` bigint(20) DEFAULT NULL,
//        `oder_user_id` bigint(20) DEFAULT NULL,
//        `status` smallint(6) DEFAULT NULL,
//        `time` datetime DEFAULT CURRENT_TIMESTAMP,
//        PRIMARY KEY (`id`)
//        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
public class AppFrom {
    Long id;
    Long payslip_id;
    Long oder_user_id;
    short status;
    Date time;

    @Override
    public String toString() {
        return "AppFrom{" +
                "id=" + id +
                ", payslip_id=" + payslip_id +
                ", oder_user_id=" + oder_user_id +
                ", status=" + status +
                ", time=" + time +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPayslip_id() {
        return payslip_id;
    }

    public void setPayslip_id(Long payslip_id) {
        this.payslip_id = payslip_id;
    }

    public Long getOder_user_id() {
        return oder_user_id;
    }

    public void setOder_user_id(Long oder_user_id) {
        this.oder_user_id = oder_user_id;
    }

    public short getStatus() {
        return status;
    }

    public void setStatus(short status) {
        this.status = status;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public AppFrom() {
    }

    public AppFrom(Long payslip_id, Long oder_user_id, short status, Date time) {
        this.payslip_id = payslip_id;
        this.oder_user_id = oder_user_id;
        this.status = status;
        this.time = time;
    }

    public AppFrom(Long id, Long payslip_id, Long oder_user_id, short status, Date time) {
        this.id = id;
        this.payslip_id = payslip_id;
        this.oder_user_id = oder_user_id;
        this.status = status;
        this.time = time;
    }
}
