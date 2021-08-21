package com.xjh.aopPage;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpSession;

/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/21
 * Time: 18:42
 **/
@Component
@Aspect
public class PageAop {
    @Pointcut("execution(* com.xjh.controller.PageController.to*(..))")
    public void pointCut(){}

    @Around("pointCut()")
    public Object trackInfo(ProceedingJoinPoint pjp) throws Throwable {
        String user;

        try {
            //获取当前Session,并判断当前访问是否处于登录状态，若位处于登录状态，则立刻跳转去登录
            ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
            HttpSession session=attr.getRequest().getSession(true);


            user= (String) session.getAttribute("uid");

        }
        catch (Exception e){

            System.out.println("----->没有用户账号权限被拦截");
            return "redirect:toLogin";
        }
        if("".equals(user)||user==null){

            System.out.println("----->没有用户账号权限被拦截");
            return "redirect:toLogin";
        }

        return pjp.proceed();
    }
}
