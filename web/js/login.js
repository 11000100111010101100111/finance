var code_now = [""];//存放验证码


$(".login .from .input input").blur(function inputBlur(){
    $(this).parent("div").removeClass("getFocus");
    $(this).parent("div").addClass("notfocus");
});
$(".login .from .input input").focus(function inputBlur(){
    $(this).parent("div").removeClass("notfocus");
    $(this).parent("div").addClass("getFocus");
    $(this).parents(".input").find("label").css("opacity","0");
});

function trueinput(item){
    $(item).parents(".input").find(">div").css("border-color","green");
        $(item).parents(".input").find("label").css("opacity","0");
}
function errorinput(item,msg){
    $(item).parents(".input").find(">div").css("border-color","red");
        $(item).parents(".input").find("label").css("color","red");
        $(item).parents(".input").find("label").css("opacity","1");
        $(item).parents(".input").find("label").html(msg);
}

let boolId=false;
let boolPwd=false;
let boolCode=false;
$("#uid").blur(function loseuid(){
    var id = $(this).val();
    if(id.trim()==""||id==null){
        $(this).val("");
        boolId=false;
        // errorinput(this,"error:输入不能为空!");
        return;
    }
    // for(i =0;i<id.length;i++){
        if(!id.match("[0-9]")){
            boolId=false;
            errorinput(this,"error:账号格式有无!");
            return;
        }
    // }
    trueinput(this);
    boolId=true;
});
$("#upwd").blur(function loseuid(){
    var pwd = $(this).val();
    var uid = $("#uid").val();
    if(pwd.trim()==""||pwd==null){
        $(this).val("");
        boolPwd=false;
        // errorinput(this,"error:输入不能为空!");
        return;
    }
    // if(uid.trim() =="" || uid.trim()==null){
    //     boolPwd=false;
    //     return;
    // }

    if(pwd.trim().length<6||pwd.trim().length>10){
        boolPwd=false;
        errorinput(this,"error,密码格式有误!");
    }else{
        trueinput(this);
        boolPwd=true;
    }
});
$("#ucode").blur(function loseuid(){
    judgeCode();
});
function judgeCode(){
    var code = $("#ucode").val();

    var item = "";
    for (i = 0; i < code_now.length;i++){
        item += code_now[i];
    }
    if(code.trim()==""||code==null){
        boolCode=false;
        // $("#ucode").val("");
        return;
    }
    if(code != item){
        boolCode=false;
        errorinput(this,"验证码输入有误！");

        // $("#ucode").val("");
    }else{
        boolCode=true;
        trueinput(this);
    }
}

$(".login .but .sure").click(function submit(){

    judgeCode();
    if(!boolCode){
        errorinput("#ucode","验证码输入有误！");
        getCodeImg();
        return;
    }else{
        trueinput("#ucode");
    }
    // if(hasId()&&hasPwd()){
        // $(this).attr("type","submit");
    // console.log(boolCode&&boolPwd&&boolId);
    if(boolCode&&boolPwd&&boolId){

        let data={
            uid:$("#uid").val(),
            upwd:$("#upwd").val(),
            ucode:$("#ucode").val()
        };
        $.ajax({
            type: "post",
            url: "http://localhost:8080/finance_war_exploded/login",
            dataType: "json",
            data:data,
            success: function (data) {
                console.log(data);
                if(data == 2){
                    // $(this).prop("type","submit");
                    // $(this).submit();
                    window.sessionStorage.setItem("uid",$("#uid").val());
                    // $.session.set();
                    document.location.href = "http://localhost:8080/finance_war_exploded/home";
                }else{
                    alert("账号或密码错误！");
                    getCodeImg();
                }
            },error:function () {
                console.log("网络连接失败！");
            }
        });

        // $(this).prop("type","button");

    }

    // }else{
        // $(this).attr("type","submit");
    // }
});


$(".clean").click(function clean(){
    $(this).parents(".input").find(">label").css("opacity","0");
    $(this).parents(".input").find(">div").css("border-color","#666");
    $(this).parents(".input").find("input").val("");
});
$(".login .but .agine").click(function again(){
    // if(confirm("确认重置输入框？")){
        $(".login .from .input label").css("opacity","0");
        $(".login .from .input >div").css("border-color","#666");
        $(".login .from input").val("");
        getCodeImg();
        // drawCode();
    // }
});



function getCodeImg() {
    // alert("next img");
    // for (i = 0; i < 5; i++){
    //     code_now[i] = Math.floor(Math.random()*10);
    // }
    // console.log(code_now);
    // code_now = Math.ceil(Math.random() * 89999 + 10000);
    //异步请求获取验证码
    $.ajax({
        type: "post",
        url: "http://localhost:8080/finance_war_exploded/getCode",
        dataType: "json",
        success: function (data) {
                for(i=0;i<data.length;i++){
                    code_now[i]=data[i];
                }
                drawCode();
        },error:function () {
            console.log("验证码拉取失败！");
        }
    });
    // code_now = "12345";
}
var colors = ["slateblue",
    "teal",
    "tomato",
    "purple",
    "navy",
    "mediumvioletred",
    "darkviolet",
    "darkslateblue",
    "darkorange",
    "crimson",
    "darkviolet",
    "mediumpurple",
    "mediumseagreen",
    "slategray",
    "yellowgreen",
    "red"];
var fonts = ["58px Times New Roman",
    "78px Georgia",
    "72px Verdana",
    "78px Arial",
    "78px 宋体",
    "86px 楷体",
    "78px LiSu",
    "78px YouYuan",
    "89px PmingLiu",
    "74px Impact",
    "78px Tahoma",
    "78px Courier New",
    "78px Times New Roman",
    "87px Georgia",
    "79px Verdana",
    "88px Arial",
    "72px 宋体",
    "86px 楷体",
    "76px LiSu",
    "72px YouYuan",
    "82px PmingLiu",
    "72px Impact",
    "76px Tahoma",
    "90px Courier New"];
function drawCode(){
    var cs = document.getElementById("cav").getContext("2d");
    // cs.rotate(0);
    // cs.scale(1,1);
    cs.fillStyle="silver";
    cs.clearRect(0, 0, 300, 150);
    
    // var line = code_now;
    for (i = 0; i < code_now.length; i++) {
        // console.log(line[i]);
        // cs.font = "58px Times New Roman";
        cs.font = fonts[Math.floor(Math.random() * fonts.length)];
    
        cs.fillStyle = colors[Math.floor(Math.random() * colors.length)];

        var lineType = Math.floor(Math.random() * 4);
        // console.log(lineType);
        if (lineType == 1) {
            cs.textBaseline = "bottom";
        } else if (lineType == 2) {
            cs.textBaseline = "top";
        } else if (lineType == 3) {
            cs.textBaseline="middle"
        }
        // var agrgs = Math.PI / (1 / 2 + Math.floor(Math.random() * 2 - 2) / 4);
        // cs.rotate(agrgs);
        var x =Math.floor(Math.random()*10 -5) / 100+1;
        var y = Math.floor(Math.random()*5 -5) / 100+1;
        cs.scale(x,y);
        // console.log(x+"=="+y);
        cs.fillText(code_now[i], 50 + i * 30, 90 + (Math.floor(Math.random() * 2 - 2)));
        // cs.rotate(-agrgs);
        cs.scale(1/x,1/y);
    }
}
$(".login .from .code-img canvas").click(function img(){
    getCodeImg();
    // drawCode();
});

$(".code-img a").click(function () {
    getCodeImg();
    // drawCode();
});

getCodeImg();
// drawCode();