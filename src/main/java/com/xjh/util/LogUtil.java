package com.xjh.util;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class LogUtil {
    private static final Logger logger = LogManager.getLogger(LogUtil.class);
    public static void logInfo(String message,String className,String methodName){
        logger.info("当前执行类["+className+"] 当前执行方法["+methodName+"] :"+message);
    }
    public static void logError(String message,String className,String methodName){
        logger.info("当前执行类["+className+"] 当前执行方法["+methodName+"] :"+message);
        logger.error("      错误："+message);
    }
    public static void logSucceed(String message,String className,String methodName){

    }
    public static void logToFile(){

    }
}
