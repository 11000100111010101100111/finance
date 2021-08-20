function getnList(){
    var list = [{
        name:"申请",
        path:"./application.html",
    },{
        name:"审批",
        path:"./audit.html",
    }];


    return list;
}

function setNavList(){

    $(".box-left ul li").remove();
    var list = getnList();

    for(i = 0;i<list.length;i++){

        // console.log(list[i].path+list[i].name);
        $(".menu ul").append("<li><a href='"+list[i].path+"'>"+list[i].name+"</a></li>");

    }
}
setNavList();



$(".box-top >div input[type='button']").click(function exit(){
    //清除session并退出

    window.location.href="./login.html";
});