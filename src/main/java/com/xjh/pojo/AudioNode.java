package com.xjh.pojo;

import java.util.Date;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/21
 * Time: 14:31
 **/
//@MappingSqlTable:
//CREATE TABLE `app_list` (
//        `id` bigint(20) NOT NULL AUTO_INCREMENT,
//        `application_id` bigint(20) DEFAULT NULL,
//        `node_user_id` bigint(20) DEFAULT NULL,
//        `operator` smallint(6) DEFAULT NULL,
//        `time` datetime DEFAULT NULL,
//        `remark` varchar(128) DEFAULT NULL,
//        `status` smallint(6) DEFAULT NULL,
//        PRIMARY KEY (`id`)
//        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

public class AudioNode{
    Long id;
    Long application_id;
    Long node_user_id;

//    1:"待提交"
//    2:"待审核"
//    3:"未通过"
//    4:"待提交"
//    5:"已通过"
    short operator;

    Date time;
    String remark;
    short status;

    public AudioNode() {
    }

    public AudioNode(Long application_id, Long node_user_id, short operator, Date time, String remark, short status) {
        this.application_id = application_id;
        this.node_user_id = node_user_id;
        this.operator = operator;
        this.time = time;
        this.remark = remark;
        this.status = status;
    }

    public AudioNode(Long id, Long application_id, Long node_user_id, short operator, Date time, String remark, short status) {
        this.id = id;
        this.application_id = application_id;
        this.node_user_id = node_user_id;
        this.operator = operator;
        this.time = time;
        this.remark = remark;
        this.status = status;
    }

    @Override
    public String toString() {
        return "AudioNode{" +
                "id=" + id +
                ", application_id=" + application_id +
                ", node_user_id=" + node_user_id +
                ", operator=" + operator +
                ", time=" + time +
                ", remark='" + remark + '\'' +
                ", status=" + status +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getApplication_id() {
        return application_id;
    }

    public void setApplication_id(Long application_id) {
        this.application_id = application_id;
    }

    public Long getNode_user_id() {
        return node_user_id;
    }

    public void setNode_user_id(Long node_user_id) {
        this.node_user_id = node_user_id;
    }

    public short getOperator() {
        return operator;
    }

    public void setOperator(short operator) {
        this.operator = operator;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public short getStatus() {
        return status;
    }

    public void setStatus(short status) {
        this.status = status;
    }
}
