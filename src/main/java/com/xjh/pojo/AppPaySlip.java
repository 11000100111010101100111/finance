package com.xjh.pojo;

import java.util.Date;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/21
 * Time: 21:29
 **/
public class AppPaySlip{
    Long id;
    String payee;//收款人
    String bank;//开户银行
    String bankCount;//银行账号
    short costType;       //成本类型：            1:直接成本、2:非直接成本
    short chargeType;     //付款类型（费用类）：   1:公章、2:私账
    short amountCategory; //款项类（款项性质）：   1:预付类、2:应付类
    double appAmount;//申请金额
    double audioAmount;//批准金额
    String illustrate;//申请说明
    Long nodeid;
    short status;
    Date time;

    public AppPaySlip() {
    }

    public AppPaySlip(Long id, String payee, String bank, String bankCount, short costType, short chargeType, short amountCategory, double appAmount, double audioAmount, String illustrate) {
        this.id = id;
        this.payee = payee;
        this.bank = bank;
        this.bankCount = bankCount;
        this.costType = costType;
        this.chargeType = chargeType;
        this.amountCategory = amountCategory;
        this.appAmount = appAmount;
        this.audioAmount = audioAmount;
        this.illustrate = illustrate;
    }

    public AppPaySlip(String payee, String bank, String bankCount, short costType, short chargeType, short amountCategory, double appAmount, double audioAmount, String illustrate) {
        this.payee = payee;
        this.bank = bank;
        this.bankCount = bankCount;
        this.costType = costType;
        this.chargeType = chargeType;
        this.amountCategory = amountCategory;
        this.appAmount = appAmount;
        this.audioAmount = audioAmount;
        this.illustrate = illustrate;
    }

    public AppPaySlip(Long id, String payee, String bank, String bankCount, short costType, short chargeType, short amountCategory, double appAmount, double audioAmount, String illustrate, short status) {
        this.id = id;
        this.payee = payee;
        this.bank = bank;
        this.bankCount = bankCount;
        this.costType = costType;
        this.chargeType = chargeType;
        this.amountCategory = amountCategory;
        this.appAmount = appAmount;
        this.audioAmount = audioAmount;
        this.illustrate = illustrate;
        this.status = status;
    }

    @Override
    public String toString() {
        return "AppPaySlip{" +
                "id=" + id +
                ", payee='" + payee + '\'' +
                ", bank='" + bank + '\'' +
                ", bankCount='" + bankCount + '\'' +
                ", costType=" + costType +
                ", chargeType=" + chargeType +
                ", amountCategory=" + amountCategory +
                ", appAmount=" + appAmount +
                ", audioAmount=" + audioAmount +
                ", illustrate='" + illustrate + '\'' +
                ", nodeid=" + nodeid +
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

    public String getPayee() {
        return payee;
    }

    public void setPayee(String payee) {
        this.payee = payee;
    }

    public String getBank() {
        return bank;
    }

    public void setBank(String bank) {
        this.bank = bank;
    }

    public String getBankCount() {
        return bankCount;
    }

    public void setBankCount(String bankCount) {
        this.bankCount = bankCount;
    }

    public short getCostType() {
        return costType;
    }

    public void setCostType(short costType) {
        this.costType = costType;
    }

    public short getChargeType() {
        return chargeType;
    }

    public void setChargeType(short chargeType) {
        this.chargeType = chargeType;
    }

    public short getAmountCategory() {
        return amountCategory;
    }

    public void setAmountCategory(short amountCategory) {
        this.amountCategory = amountCategory;
    }

    public double getAppAmount() {
        return appAmount;
    }

    public void setAppAmount(double appAmount) {
        this.appAmount = appAmount;
    }

    public double getAudioAmount() {
        return audioAmount;
    }

    public void setAudioAmount(double audioAmount) {
        this.audioAmount = audioAmount;
    }

    public String getIllustrate() {
        return illustrate;
    }

    public void setIllustrate(String illustrate) {
        this.illustrate = illustrate;
    }

    public AppPaySlip(String payee, String bank, String bankCount, short costType, short chargeType, short amountCategory, double appAmount, double audioAmount, String illustrate, Long nodeid, short status, Date time) {
        this.payee = payee;
        this.bank = bank;
        this.bankCount = bankCount;
        this.costType = costType;
        this.chargeType = chargeType;
        this.amountCategory = amountCategory;
        this.appAmount = appAmount;
        this.audioAmount = audioAmount;
        this.illustrate = illustrate;
        this.nodeid = nodeid;
        this.status = status;
        this.time = time;
    }

    public AppPaySlip(Long id, String payee, String bank, String bankCount, short costType, short chargeType, short amountCategory, double appAmount, double audioAmount, String illustrate, Long nodeid, short status, Date time) {
        this.id = id;
        this.payee = payee;
        this.bank = bank;
        this.bankCount = bankCount;
        this.costType = costType;
        this.chargeType = chargeType;
        this.amountCategory = amountCategory;
        this.appAmount = appAmount;
        this.audioAmount = audioAmount;
        this.illustrate = illustrate;
        this.nodeid = nodeid;
        this.status = status;
        this.time = time;
    }

    public Long getNodeid() {
        return nodeid;
    }

    public void setNodeid(Long nodeid) {
        this.nodeid = nodeid;
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
}
