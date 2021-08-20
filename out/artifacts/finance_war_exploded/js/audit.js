
// ==================================================================
//测试数据
function testRow(){
    flushTable();
    addTable(testData());
}
testRow();
function testData(){
    var arr = ['直接成本','公款','江西省科学院','中国邮政储蓄银行','621799435*****6857','预付类','无','1000','2000'];
    var list=[
        {
            id:1,
            typeofchengben:arr[0],
            typeoffukuang:arr[1],
            danwei:arr[2],
            bank:arr[3],
            account:arr[4],
            typeofkuangxiang:arr[5],
            text:arr[6]==""?"-啥也没写-":arr[6],
            application:arr[7],
            approve:arr[8],
            status:"待审核",
            time:"2021-8-17 12:00:00",
            instanceId:"0"
        },
        {
            id:2,
            typeofchengben:arr[0],
            typeoffukuang:arr[1],
            danwei:arr[2],
            bank:arr[3],
            account:arr[4],
            typeofkuangxiang:arr[5],
            text:arr[6]==""?"-啥也没写-":arr[6],
            application:arr[7],
            approve:arr[8],
            status:"已通过",
            time:"2021-8-17 12:00:00",
            instanceId:"0"
        }
    ];
    return list;
}
// =======================================================================
 // 向表格中添加一行
 function addRow(row){
// row:
//     id:0;
//     typeofchengben:arr[6],
//     typeoffukuang:arr[7],
//     danwei:arr[0],
//     bank:arr[1],
//     account:arr[2],
//     typeofkuangxiang:arr[8],
//     text:arr[3]==""?"-啥也没写-":arr[3],
//     application:arr[4],
//     approve:arr[5]
//     time:0000,
//     status:0000,
//     instanceId:0
    var no = $(".box-list-list table tbody").find("tr").length+1;
    var style = (row.status=="待审核" || row.status=="待审查")?"display:inline-block;":"display:none;";
    $(".box-list-list table tbody").append("<tr>"+
                "<td>"+no+"</td>"+
                "<td>"+
                    "<input type='checkbox' class='check-item'>"+
                "</td>"+
                "<td class='item-id'>"+row.id+"</td>"+
                "<td>"+row.typeofchengben+"</td>"+
                "<td>"+row.typeoffukuang+"</td>"+
                "<td>"+row.typeofkuangxiang+"</td>"+
                "<td>"+row.danwei+"</td>"+
                "<td>"+row.bank+"</td>"+
                "<td>"+row.account+"</td>"+
                "<td>"+row.text+"</td>"+
                "<td>"+row.application+"</td>"+
                "<td>"+row.approve+"</td>"+
                "<td>"+row.time+"</td>"+
                "<td>"+row.status+"</td>"+
                "<td>"+row.instanceId+"</td>"+
                "<td>"+
                    "<input type='button' value='详情' class='item-operator-detil' onclick='showdetil(this)''>"+
                    "<input type='button' value='提交' style='"+style+"' class='item-operator-submit' onclick='audioMsg(this)''>"+
                "</td>"+
            "</tr>"
    );
}
function cleanTable(){
    $(".box-list-list table tbody").empty();
}
function addTable(list){
    for(i=0;i<list.length;i++){
        addRow(list[i]);
    }
}
function flushTable(){
    cleanTable();
    //异步查询所有信息
    // var list=[];
    var list=testData();
    
    addTable(list);
}
//查询信息

function seachMsg(){
    var starTime = $(".box-list-seach .start-time").val();
    var endTime = $(".box-list-seach .end-time").val();
    var cost = $(".box-list-seach .cost").val();
    var payType = $(".box-list-seach .payType").val();
    var data={
        starTime:starTime,
        endTime:endTime,
        cost:cost,
        payType:payType
    };
    console.log(data);
    //异步提交查询
    //...
    cleanTable();
   
   
    var list = testData();
    
    addTable(list);
}

$(".box-list-seach input[type='button']").click(seachMsg);



//打开添加信息面板
$(".box-list .box-list-operater .add-item").click(function addItem(){
    $(".show").css("opacity","0.2");
    $(".add-item-page").css("display","inline-block");
    
 });

 //关闭面板
 function closePanel(){
     $(".add-item-page *").removeAttr("disabled");
     $(".add-item-page").css("display","none");
     $(".show").css("opacity","1");

     $(".add-item-page .audio-panel .submit").css("display",'inline');
     $(".add-item-page .audio-panel .button").val('不批准');
     $(".add-item-page .audio-panel .button").off("click");
     $(".add-item-page .audio-panel .button").bind("click",notAudio_item);
     canontwrite();
 }

 $(".add-item-page .form .button").click(closePanel);

 //全选、全不选
 $("#check-item-all").click( function check(){
    $(".box-list .box-list-list table tbody").find("input[type='checkbox']").prop('checked',this.checked);
    $(".box-list .box-list-list table thead").find("label").val(this.checked?"全不选":"全   选");
});

 // 详情
 function showdetil(item){
     
     operater_id = $(item).parents("tr").find(".item-id").html();
    //  console.log(item_id);


     // var status = "待提交";
     var status = $(item).parents("tr").find("td")[13].innerHTML;
     console.log(status);
     var arr = ['直接成本','公账','预付类','江西省科学院','中国邮政储蓄银行','621799435*****6857','无','1000','2000'];

    //  arr = readCell(item);
    //  $(".submit").css("display",'none');

     //根据operater_id异步查询信息
     //......
     $(".add-item-page .inlineblock,.add-item-page input[type='radio']").attr("disabled",true);

     var list = $(".add-item-page .input-msg");
     for(i=3;i-3<list.length;i++){
        list[i-3].value=arr[i];
     }   
     $("[name = 'cost'][value='"+arr[0]+"']").prop("checked",true) ;
     $("[name = 'paytype'][value='"+arr[1]+"']").prop("checked",true);
     $("[name = 'fukuan'][value='"+arr[2]+"']").prop("checked",true) ;

     if(status.trim() != "待审核" && status.trim() != "待审批"){
        //已提交的信息无法在提交，影藏提交按钮
        $(".add-item-page .audio-panel .submit").css("display",'none');
        $(".add-item-page .audio-panel .button").val('返回');
        $(".add-item-page .audio-panel .button").off("click");
        $(".add-item-page .audio-panel .button").bind("click",closePanel);

         //已审核的信息无法在审核，内容输入框禁用
        
   //  }else{
   //     $(".add-item-page .inlineblock,.add-item-page input[type='radio']").attr("disabled",true);
   //     //  arr = readCell(item);
    }
     
     $(".show").css("opacity","0.2");
     $(".add-item-page").css("display","inline-block");
 }

 //读取当前单元格内容
 function readCell(but){
     var item = $(but).parents("tr").find("td");
     var arr = [];
     for(i=3;i < 12;i++){
         var j = i<5 || i>8?i:( i>=5 && i< 8?i+1:5 ) ;
         arr[i-3] = item[j].innerHTML;
         // console.log(item[j].innerHTML);
     }
     return arr;
 }

 function canontwrite(){
     var list = $(".add-item-page .input-msg");
     for(i=0;i<list.length;i++){
         list[i].value = "";
     }
     $("[name = 'cost']").filter(":radio").removeAttr("checked");
     $("[name = 'paytype']").filter(":radio").removeAttr("checked");
     $("[name = 'fukuan']").filter(":radio").removeAttr("checked");
 }

 //获取当前新增信息列表
 function getnewMsg(){
     var arr=[];
     var list = $(".add-item-page .input-msg");
     for(i=0;i<list.length;i++){
         arr[i]=list[i].value;
     }
     arr[list.length] = $("[name = 'cost']").val();
     arr[list.length+1] = $("[name = 'paytype']").val();
     arr[list.length+2] = $("[name = 'fukuan']").val();
     return arr;
 }

 //审核信息
 function audioMsg(item){
    // operater_id = $(item).parents("tr").find(".item-id").html();
    showdetil(item);
 }
 var operater_id;
//通过审核
 $(".add-item-page .form .submit").click(function submit_item(){
    var id = operater_id;
    submitAudio("通过","是否批准这条编号为："+id+"申请？");
});

//不通过审核
$(".add-item-page .form .button").click(notAudio_item);
function notAudio_item(){
    var id = operater_id;
    submitAudio("不通过","是否拒绝这条编号为："+id+"申请？");
 }

 function submitAudio(val,msg){
    if(confirm(msg)){

        //异步提交，根据 id修改 status值 为 已审批
        
    }
    closePanel();
 }
