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
$("#uid").blur(function loseuid(){
    var id = $(this).val();
    if(id==""||id==null){
        errorinput(this,"error:输入不能为空!");
        return;
    }
    if(id!="123456"){
        errorinput(this,"error:账号不存在!");
    }else{
        trueinput(this);
    }
});
$("#upwd").blur(function loseuid(){
    var pwd = $(this).val();
    if(pwd==""||pwd==null){
        errorinput(this,"error:输入不能为空!");
        return;
    }
    if(pwd!="123456"){
        errorinput(this,"error,账号或密码有误!");
    }else{
        trueinput(this);
    }
});
$("#ucode").blur(function loseuid(){
    var code = $(this).val();
    var item = "";
    for (i = 0; i < code_now.length;i++){
        item += code_now[i];
    }
    if(code==""||code==null){
        errorinput(this,"error:输入不能为空!");
        return;
    }
    if(code != item){
        errorinput(this,"验证码输入有误！");

        // 重绘验证码
        getCodeImg();
        drawCode();
    }else{
        trueinput(this);
    }
});

$(".login .but .sure").click(function submit(){

    // window.location.href="application.html";
    // $(this).submit();
    // var id = $("#uid").val();
    // var pwd = $("#upwd").val();
    // var code = $("#ucode").val();
    // var single = id=="123456"&&pwd=="123456";
    // var s = code=="123456";
    // if(single&&s){
    //     $(this).parent("div").removeClass("notfocus");
    //     $(this).parent("div").addClass("getFocus");
    // }else{
    //     $(this).parent("div").removeClass("notfocus");
    //     $(this).parent("div").addClass("getFocus");
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
        drawCode();
    // }
});

var code_now = [1, 2, 3, 4, 5];
getCodeImg();

function getCodeImg() {
    // alert("next img");
    for (i = 0; i < 5; i++){
        code_now[i] = Math.floor(Math.random()*10);
    }
    // console.log(code_now);
    // code_now = Math.ceil(Math.random() * 89999 + 10000);
    //异步请求获取验证码
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
    "70px Georgia",
    "72px Verdana",
    "78px Arial",
    "78px 宋体",
    "71px 楷体",
    "78px LiSu",
    "78px YouYuan",
    "78px PmingLiu",
    "74px Impact",
    "78px Tahoma",
    "78px Courier New",
    "78px Times New Roman",
    "77px Georgia",
    "79px Verdana",
    "70px Arial",
    "72px 宋体",
    "70px 楷体",
    "76px LiSu",
    "72px YouYuan",
    "70px PmingLiu",
    "72px Impact",
    "76px Tahoma",
    "72px Courier New"];
function drawCode(){
    var cs = document.getElementById("cav").getContext("2d");
    // cs.rotate(0);
    // cs.scale(1,1);
    cs.fillStyle="silver";
    cs.clearRect(0, 0, 300, 150);
    
    var line = code_now;
    for (i = 0; i < line.length; i++) {
        // console.log(line[i]);
        // cs.font = "58px Times New Roman";
        cs.font = fonts[Math.floor(Math.random() * fonts.length)];
    
        cs.fillStyle = colors[Math.floor(Math.random() * colors.length)];

        var lineType = Math.floor(Math.random() * 4);
        console.log(lineType);
        if (lineType == 1) {
            cs.textBaseline = "bottom";
        } else if (lineType == 2) {
            cs.textBaseline = "top";
        } else if (lineType == 3) {
            cs.textBaseline="middle"
        }
        var agrgs = Math.PI / (1 / 2 + Math.floor(Math.random() * 2 - 2) / 4);
        cs.rotate(agrgs);
        var x =Math.floor(Math.random()*5 -5) / 100+1;
        var y = Math.floor(Math.random()*5 -5) / 100+1;
        cs.scale(x,y);
        // console.log(x+"=="+y);
        cs.fillText(line[i], 50 + i * (Math.floor(Math.random() * 15 + 15)), 90 + (Math.floor(Math.random() * 15 - 15)));
        cs.rotate(-agrgs);
        cs.scale(1/x,1/y);
    }
}
$(".login .from .code-img canvas").click(function img(){
    getCodeImg();
    drawCode();
})
drawCode();