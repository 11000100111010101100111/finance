package com.xjh.pojo;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/21
 * Time: 9:41
 **/
//@MappingSqlTable:
//CREATE TABLE `payment_slip` (
//        `id` bigint(20) NOT NULL AUTO_INCREMENT,
//        `payee` varchar(50) DEFAULT NULL,
//        `bank` varchar(50) DEFAULT NULL,
//        `bankCount` varchar(30) DEFAULT NULL,
//        `costType` smallint(6) DEFAULT NULL,
//        `chargeType` smallint(6) DEFAULT NULL,
//        `amountCategory` smallint(6) DEFAULT NULL,
//        `appAmount` float DEFAULT NULL,
//        `audioAmount` float DEFAULT NULL,
//        `illustrate` varchar(215) DEFAULT NULL,
//        PRIMARY KEY (`id`)
//        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
public class PaymentSlip {
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

    public PaymentSlip(String payee, String bank, String bankCount, short costType, short chargeType, short amountCategory, double appAmount, double audioAmount, String illustrate) {
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

    public PaymentSlip(Long id, String payee, String bank, String bankCount, short costType, short chargeType, short amountCategory, double appAmount, double audioAmount, String illustrate) {
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

    public PaymentSlip(Long id, String payee, String bank, String bankCount, short costType, short chargeType, short amountCategory) {
        this.id = id;
        this.payee = payee;
        this.bank = bank;
        this.bankCount = bankCount;
        this.costType = costType;
        this.chargeType = chargeType;
        this.amountCategory = amountCategory;
    }

    public PaymentSlip(String payee, String bank, String bankCount, short costType, short chargeType, short amountCategory) {
        this.payee = payee;
        this.bank = bank;
        this.bankCount = bankCount;
        this.costType = costType;
        this.chargeType = chargeType;
        this.amountCategory = amountCategory;
    }

    public PaymentSlip() {
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

    @Override
    public String toString() {
        return "PaymentSlip{" +
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
                '}';
    }
}
