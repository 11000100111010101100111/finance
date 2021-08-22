package com.xjh.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/22
 * Time: 23:36\
 * 时间日期<-->字符串 转换工具
 **/
public class DateUtil {
    public static String DateToStr(Date date) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String str = format.format(date);
        return str;
    }
    public static Date StringToDate(String data){
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date val = null;
        try {
            val = format.parse(data);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return val;
    }
}
