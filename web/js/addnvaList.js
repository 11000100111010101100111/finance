
let uid_now= window.sessionStorage.getItem("uid");
let user_now={
    uid:uid_now,
    uname:"",
    posts:"",
    grade:"",
    department:""
}
function getUser() {
    let data={uid:uid_now};
    $.ajax({
        type: "post",
        url: "http://localhost:8080/finance_war_exploded/getUser",
        dataType: "json",
        data:data,
        success: function (data) {
            user_now.uname = data.uname;
            user_now.posts = data.posts;
            user_now.grade = data.grade;
            user_now.department =data.department;
            $(".box-top >div >h1").html("welcome！"+user_now.posts+","+user_now.uname);
        },error:function () {
            console.log("网络连接失败！");
        }
    });
}
getUser();



function getnList(){

    if(uid_now==""||uid_now==null){
        return ;
    }
    let data={uid:uid_now};
    $.ajax({
        type: "post",
        url: "http://localhost:8080/finance_war_exploded/getHomeList",
        dataType: "json",
        data:data,
        success: function (data) {
            if(data.single =="succeed"){
                $(".box-left ul li").remove();

                for(i = 0;i < data.list.length ;i++)
                    $(".menu ul").append("<li><a href='"+data.list[i].path+"'>"+data.list[i].name+"</a></li>");
            }else{
                alert("获取列表失败！")
            }
        },error:function () {
            console.log("网络连接失败！");
        }
    });
}

function setNavList(){
   getnList();
}
setNavList();



$(".box-top >div input[type='button']").click(function exit(){
    $.ajax({
        type: "post",
        url: "http://localhost:8080/finance_war_exploded/exit",
        dataType: "json",
        data:"",
        success: function (data) {
            if(data!="退出失败") {
                //清除session并退出
                uid_now = null;
                user_now = null;
                window.sessionStorage.removeItem("uid");
                window.location.href = "http://localhost:8080/finance_war_exploded/toLogin";
            }
            alert(data);
        },error:function () {
            console.log("网络连接失败！");
        }
    });
});

function toStatus(status) {
    let val = "";
    switch (status) {
        case 1:val="待提交";break;
        case 2:val="待审核";break;
        case 3:val="未通过";break;
        case 4:val="待提交";break;
        case 5:val="已通过";break;
    }
    return val;
}
function toCosttype(status) {
    let val = "";
    switch (status) {
        case 1:val="直接成本";break;
        case 2:val="非直接成本";break;
    }
    return val;
}
function toChargetype(status) {
    let val = "";
    switch (status) {
        case 1:val="公账";break;
        case 2:val="私账";break;
    }
    return val;
}
function toAmountcategory(status) {
    let val = "";
    switch (status) {
        case 1:val="预付类";break;
        case 2:val="应付类";break;
    }
    return val;
}