
       function addalls(){
           for(i=0;i<5;i++)
                $(".box-list-list table tbody").append("<tr><td>1</td><td><input type='checkbox' class='check-item'></td><td class='item-id'>1</td><td>直接成本</td><td>公账</td><td>预付类</td><td>江西省科学院</td><td>95580</td>"+
           "<td>362430********986523</td><td>123456</td><td>1200.00</td><td>1500.00</td><td>2021-8-16</td><td>待审核</td><td>22222</td>"+
           "<td><input type='button' value='详情' class='item-operator-detil' onclick='showdetil(this)'></td></tr>");
       }
       // addalls();
       //测试数据
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
                    status:"待提交",
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
                    status:"待审核",
                    time:"2021-8-17 12:00:00",
                    instanceId:"0"
                }
            ];
            return list;
        }

         // 向表格中添加一行
         function getRowList(row){
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

        //      SELECT payment_slip.id AS id,
        //          payment_slip.payee AS payee,
        //          payment_slip.bank AS bank,
        //          payment_slip.bankcount AS bankcount,
        //          payment_slip.costtype AS costtype,
        //          payment_slip.chargetype AS chargetype,
        //          payment_slip.amountcategory AS amountcategory,
        //          payment_slip.appamount AS appamount,
        //          payment_slip.audioamount AS audioamount,
        //          payment_slip.illustrate AS illustrate,
        //          app_form.id AS nodeid,
        //          app_form.status AS `status`,
        //          app_form.time AS `time` FROM payment_slip,app_form WHERE payment_slip.id = app_form.payslip_id AND app_form.oder_user_id= #{uid};
        //判断全选按钮是否选中，选中则添加的一行业为选中状态
            var isChecked = $(".box-list .box-list-list table thead input[type='checkbox']").prop("checked");
             // amountCategory: 1
             // appAmount: 2000
             // audioAmount: 2500
             // bank: "中国银行"
             // bankCount: "12345678954846156"
             // chargeType: 1
             // costType: 1
             // id: 1
             // illustrate: "无"
             // nodeid: 1
             // payee: "江西省科学院"
             // status: 1
             // time: 1629552318000


            // console.log(allCheckBox);
            var no = $(".box-list-list table tbody").find("tr").length+1;
            var style = ( toStatus(row.status) =="待提交" || toStatus(row.status)=="未通过"  )?
                "display:inline-block;":"display:none;";
            var msg = "<tr>"+
                        "<td>"+no+"</td>"+
                        "<td>"+
                            "<input type='checkbox' class='check-item'"+ (isChecked?" checked":" ") +">"+
                        "</td>"+
                        "<td class='item-id'>"+row.id+"</td>"+
                        "<td>"+toCosttype(row.costType)+"</td>"+
                        "<td>"+toChargetype(row.chargeType)+"</td>"+
                        "<td>"+toAmountcategory(row.amountCategory)+"</td>"+
                        "<td>"+row.payee+"</td>"+
                        "<td>"+row.bank+"</td>"+
                        "<td>"+row.bankCount+"</td>"+
                        "<td>"+row.illustrate+"</td>"+
                        "<td>"+row.appAmount+"</td>"+
                        "<td>"+row.audioAmount+"</td>"+
                        "<td>"+dateToString(row.time)+"</td>"+
                        "<td>"+toStatus(row.status)+"</td>"+
                        "<td>"+row.nodeid+"</td>"+
                        "<td>"+
                            "<input type='button' value='详情' class='item-operator-detil' onclick='showdetil(this)''>"+
                            "<input type='button' value='提交' style='"+style+"' class='item-operator-submit' onclick='submitRow(this)''>"+
                        "</td>"+
                    "</tr>";
            return msg;
         }

        //  向表格最后追加一行
         function addRow(row){

            $(".box-list-list table tbody").append(getRowList(row));
        }
        // 向表格第一天插入一行
        function insertRow(row){
            $(".box-list-list table tbody tr").eq(0).before(getRowList(row));
        }
        // 清空表格
        function cleanTable(){
            $(".box-list-list table tbody").empty();
        }
        function removeRow(index){
            $(".box-list-list table tbody").remove(index);
        }
        // 添加数据导表格
        function addTable(list){
            for(i=0;i<list.length;i++){
                addRow(list[i]);
            }
        }
        // 刷新表格
        function flushTable(){

            let data={uid:uid_now};
            //异步查询所有信息 /getApplicationList
            $.ajax({
                type: "post",
                url: "http://localhost:8080/finance_war_exploded/getApplicationList",
                dataType: "json",
                data:data,
                success: function (data) {
                    if(data.single == "succeed"){
                        cleanTable();

                        var list=data.list;
                        addTable(list);
                    }else{
                        alert(data.single);
                    }
                },error:function () {
                    console.log("数据列表拉取失败！");
                }
            });

        }


        //查询信息
        function seachMsg(){
            var starTime = $(".box-list-seach .start-time").val();
            var endTime = $(".box-list-seach .end-time").val();
            var cost = $(".box-list-seach .cost").val();
            var payType = $(".box-list-seach .payType").val();
            var d={
                uid:uid_now,
                starTime:starTime,
                endTime:endTime,
                cost:parseInt(cost==="直接成本"?1:(cost ==="非直接成本"?2:-1)),
                payType:parseInt(payType==="私账"?1:(payType ==="公账"?2:-1))
            };
            console.log(d);

            //异步提交查询
            // contentType:"application/json;charset=UTF-8",
            // traditional: true,
            $.ajax({
                type: "post",
                url: "http://localhost:8080/finance_war_exploded/findAppList",
                dataType: "json",
                data:d,
                success:function (data) {
                    if(data.single === "succeed"){
                        cleanTable();

                        var list=data.list;
                        addTable(list);
                        // insertRow(data);
                    }else {
                        console.log(data.single);
                    }
                }
                // ,
                // error:function () {
                //     console.log("连接失败");
                // }
            });

           
            // var list = testData();
            
            // addTable(list);
        }

        $(".box-list-seach input[type='button']").click(seachMsg);



        //打开添加信息面板
        $(".box-list .box-list-operater .add-item").click(function addItem(){
            $(".show").css("opacity","0.2");
            $(".add-item-page").css("display","inline-block");
            
         });
 
         //关闭面板
         function closePanel(){

             //关闭增加申请信息项列表面板
             resetList();

             $(".add-item-page *").removeAttr("disabled");
             $(".add-item-page").css("display","none");
             $(".show").css("opacity","1");
 
             $(".add-item-page .btn .button,.add-item-page .btn .submit").css("display",'inline');
             $(".add-item-page .btn .modify-but").css("display","none");
             canontwrite();
         }

         $(".add-item-page .form .button").click(closePanel);
 
         //全选、全不选
         $("#check-item-all").click( function check(){
            $(".box-list .box-list-list table tbody").find("input[type='checkbox']").prop('checked',this.checked);
            $(".box-list .box-list-list table thead").find("label").html(this.checked?"全不选":"全   选");
        });


         // 详情
         function showdetil(item){

             // console.log(item);

             var item_id = $(item).parents("tr").find(".item-id").html();
            //  console.log(item_id);
 
 
            //  var status = $(item).parents("tr").find("td")[13].innerHTML;
            //  console.log(status);

             //测试数据
             // var arr = ['直接成本','公账','预付类','江西省科学院','中国邮政储蓄银行','621799435*****6857','无','1000','2000'];
             // console.log(hasStatus(item));

             //已提交的信息无法在提交，影藏提交按钮
             // $("input[type='submit']").css("display",'none');
             $(".add-item-page .btn .submit").css("display",'none');

             //根据item_id异步查询信息
             data={id:item_id};
             //异步查询所有信息 /getApplicationList
             $.ajax({
                 type: "post",
                 url: "http://localhost:8080/finance_war_exploded/getApplication",
                 dataType: "json",
                 data:data,
                 success: function (data) {
                     if(data.single == "succeed"){

                         let arr =[
                             data.list.payee  //收款人
                             ,data.list.bank      //开户银行
                             ,data.list.bankCount    //银行账号
                             ,data.list.illustrate  //申请说明
                             ,data.list.appAmount    //申请金额
                             ,data.list.audioAmount  //批准金额
                         ];
                         var list = $(".add-item-page .input-msg");
                         for(i=0;i<list.length;i++){
                             list[i].value=arr[i];
                         }

                         //成本类型 1:直接成本、2:非直接成本
                         $("[name = 'item-chengben'][value='"+toCosttype(data.list.costType)+"']").prop("checked",true) ;
                         //付款类型（费用类）：   1:公章、2:私账
                         $("[name = 'item-fukuan'][value='"+toChargetype(data.list.chargeType)+"']").prop("checked",true);
                         //款项类（款项性质）：   1:预付类、2:应付类
                         $("[name = 'item-kuanxiang'][value='"+toAmountcategory(data.list.amountCategory)+"']").prop("checked",true) ;




                         //待提交的信息可修改
                         if(hasStatus(item)){

                             // $(".add-item-page .inlineblock,.add-item-page input[type='radio']").attr("disabled",false);

                         }else{
                             arr = readCell(item);
                             //已提交的信息无法在修改，内容输入框禁用
                         }
                     // <input type="button" class="modify-but" style="display: none;" value="修 改">

                         $(".add-item-page .btn .modify-but").css("display",hasStatus(item)?"inline-block":"none");

                         $(".add-item-page .inlineblock,.add-item-page input[type='radio']").attr("disabled",!hasStatus(item));
                         $(".show").css("opacity","0.2");
                         $(".add-item-page").css("display","inline-block");

                     }else{
                         alert(data.single);
                     }
                 },error:function () {
                     console.log("数据列表拉取失败！");
                 }
             });
         }
 
         //读取当前单元格内容
         function readCell(but){
             var item = $(but).parents("tr").find("td");
            //  console.log(item.length);
             var arr = [];
             for(i=3;i < 12;i++){
                //  var j = i<5 || i>8?i:( i>=5 && i< 8?i+1:5 ) ;
                 arr[i-3] = item[i].innerHTML;
                 
             }
            //  console.log(arr);
             return arr;
         }

         function canontwrite(){
             var list = $(".add-item-page .input-msg");
             for(i=0;i<list.length;i++){
                 list[i].value = "";
             }
             $("[name = 'item-chengben']").filter(":radio").removeAttr("checked");
             $("[name = 'item-fukuan']").filter(":radio").removeAttr("checked");
             $("[name = 'item-kuanxiang']").filter(":radio").removeAttr("checked");
         }
 
         //获取当前新增信息列表
         function getnewMsg(){
             var arr=[];
             var list = $(".add-item-page .input-msg");
             for(i=0;i<list.length;i++){
                 arr[i]=list[i].value;
             }
             arr[list.length] = $("[name = 'item-chengben']").val()==="直接成本"?1:2;
             arr[list.length+1] = $("[name = 'item-fukuan']").val()==="公账"?1:2;
             arr[list.length+2] = $("[name = 'item-kuanxiang']").val()==="预付类"?1:2;
             return arr;
         }
 
 
        
         function submit_item(){
             var arr = getnewMsg();
             for(i=0 ;i<arr.length;i++){
                 if( i!=3 && (arr[i] == '' || arr[i] == null)){
                     alert("输入不完整！");
                     return ;
                 }
             }
 
             var data = {
                     id: 0,
                     costType: arr[6],
                     chargeType: arr[7],
                     payee: arr[0],
                     bank: arr[1],
                     bankCount: arr[2],
                     amountCategory: arr[8],
                     illustrate: arr[3] === "" ? "-啥也没写-" : arr[3],
                     appAmount: arr[4],
                     audioAmount: arr[5],
                     status: 1,
                     time: null,
                     instanceId: null
             };
             //
             console.log(data);
             if(confirm("是否将这条申请提交？")){
                 $.ajax({

                     type: "post",
                     // contentType:"application/json;charset=UTF-8",
                     url: "http://localhost:8080/finance_war_exploded/addApplication",
                     dataType: "json",
                     data:data,
                     success:function (data) {
                        if(data.single == "succeed"){
                            flushTable();
                            // insertRow(data);
                        }else {
                                console.log(data.single);
                        }
                     },
                     error:function () {
                         console.log("连接失败");
                     }
                 });
             }
             closePanel();
         }

         $(".add-item-page .form .submit").click(submit_item);
 
         //提交信息，等待审核
         function submitRow(btn){
            var arr = readCell(btn);
            // var data = {
            //     typeofchengben:arr[0],
            //     typeoffukuang:arr[1],
            //     danwei:arr[3],
            //     bank:arr[4],
            //     account:arr[5],
            //     typeofkuangxiang:arr[2],
            //     text:arr[6]==""?"-啥也没写-":arr[6],
            //     application:arr[7],
            //     approve:arr[8]
            // }
            let ids = $(btn).parents("tr").find("td")[2].innerHTML;

            if(confirm("是否将这条申请提交？")){
                //异步提交
                //...
                //刷新表格
                // submitApplication
                $.ajax({
                    type: "post",
                    url: "http://localhost:8080/finance_war_exploded/submitApplication",
                    dataType: "json",
                    data:{
                        sid:uid_now,
                        id:ids},
                    traditional: true,
                    success: function (data) {
                        if(data === "succeed"){
                            alert("成功！");
                        }else {
                            alert(data);
                        }
                        flushTable();
                    },
                    error: function () {
                        flushTable();
                        // alert("服务连接失败");
                    }
                });
            }
         }


         //修改
         function hasStatus(item){
            // var status = "待提交";
            // var status = $(item).val();
            var status = $(item).parents("tr").find("td")[13].innerHTML;
            console.log("checkbox:"+status);
            return status === "待提交";
        }

         $(".box-list-operater .modify-item").click(function modifyCell(){
            var checkboxs=$(".box-list .box-list-list table tbody").find("input[type='checkbox']");
            var checkedNum =0;
            var checkbox;
            for(i=0;i<checkboxs.length;i++){
                checkedNum += checkboxs[i].checked == true && hasStatus(checkboxs[i])? 1:0;
                checkbox = checkboxs[i].checked == true && hasStatus(checkboxs[i])?checkboxs[i]:checkbox;
                // $(checkboxs[i]).attr("checked",checkboxs[i].checked == true && hasStatus(checkboxs[i])? "true":"false");
                checkboxs[i].checked = checkboxs[i].checked == true && hasStatus(checkboxs[i])? true:false;
                if(checkboxs[i].checked == false){
                    //出现了不符合要求的选中状态，取消全选
                    $("#check-item-all").prop({checked:false}) ;
                }
            }

            if(checkedNum!=1){
                alert(checkedNum>1?"一次只能修改一行数据，你选择太多啊！":"请先选择一行待提交的数据");
                return;
            }

            checked_id = $(checkbox).parents("tr").find("td")[2].innerHTML;
            // console.log(checked_id);

            showdetil($(checkbox).parents("tr").find("td .item-operator-detil"));

         });

         let checked_id=0;
        //异步修改内容
       $(".add-item-page .btn .modify-but").click(function () {

           var arr = getnewMsg();
           for(i=0 ;i<arr.length;i++){
               if( i!=3 && (arr[i] == '' || arr[i] == null)){
                   alert("输入不完整！");
                   return ;
               }
           }

            if(!confirm("确认覆盖这条申请的到历史记录？")){
                return;
            }else {

                let data = {
                    id: parseInt(checked_id),
                    costType: arr[6],
                    chargeType: arr[7],
                    payee: arr[0],
                    bank: arr[1],
                    bankCount: arr[2],
                    amountCategory: arr[8],
                    illustrate: arr[3] === "" ? "-啥也没写-" : arr[3],
                    appAmount: arr[4],
                    audioAmount: arr[5],
                };
                console.log(data);
                //异步修改内容
                $.ajax({
                    type: "post",
                    url: "http://localhost:8080/finance_war_exploded/modifyApplication",
                    dataType: "json",
                    data:data,
                    success: function (data) {
                        if(data.single === "succeed"){
                            alert("修改成功！");
                            flushTable();
                        }else {
                            alert(data.single);
                        }
                        closePanel();
                    },
                    error: function () {
                        alert("服务连接失败");
                        closePanel();
                    }
                });

            }
       });

         //删除待提交的行
         $(".box-list-operater .remove-item").click(function remove(){
            var checkboxs=$(".box-list .box-list-list table tbody").find("input[type='checkbox']");
            var checkedNum =0;
            var checkbox=[];
            for(i=0,j=0;i<checkboxs.length;i++){
                checkedNum += checkboxs[i].checked == true && hasStatus(checkboxs[i])? 1:0;
                
                if(checkboxs[i].checked == true && hasStatus(checkboxs[i])){

                    //记录被选中符合条件的id号
                    checkbox[j++] = $(checkboxs[i]).parents("tr").find(".item-id").html();
                }
            }
            if(checkedNum<=0){
                alert("一行数据也没有被选中，不能操作啊！");
                return;
            }
            if(checkboxs.length<0){
                alert("没有可以选择的数据，不能操作啊！");
                return;
            }
            if(confirm("确认删除被选择的项？删除的为提交项将不能被还原！")){
                    $.ajax({
                        type: "post",
                        url: "http://localhost:8080/finance_war_exploded/removeApplication",
                        dataType: "json",
                        data: {ids:checkbox},
                        traditional: true,
                        success: function (data) {
                            if(data.single === "succeed"){
                                alert("申请撤销成功");
                            }else{
                                let errorId = "";
                                for(i=o;i<data.list.length;i++)
                                    errorId += "("+i +")撤销失败的申请编号："+data.list[i]+"\n";
                                alert(data.single+":\n"+errorId);
                            }
                            flushTable();
                        },error: function () {
                            alert("数据连接失败");
                        }
                    });
            }
            // showdetil($(checkbox).parents("tr").find("td .item-operator-detil"));
         });

       flushTable();



       // $(".add-item-page .add-app-list").click(function () {
       //     $(".add-item-page .add-app-list-ele").css("display","block");
       //     console.log("111")
       // });
       //
       // $(".add-item-page .add-app-list-ele .back").click(function () {
       //     $(".add-item-page .add-app-list-ele").css("display","none");
       //     console.log("111")
       // });


       //关闭增加申请信息项列表面板
       function resetList(){

           isModify = false;
           modifyTr = null;

           $(".add-item-page .add-app-list-ele").css("width","0");
           $(".add-item-page .add-app-list-ele").css("display","none");
            $("#app-money").val("");
           $("#app-remark").val("");
       }
       function openList() {
           $(".add-item-page .add-app-list-ele").css("width","40%");
           $(".add-item-page .add-app-list-ele").css("display","block");
       }
       function showList(){
           $(".add-app-list-ele").prop("display","block");
       }

       //打开增加申请信息项列表面板
       $(".add-item-page .add-app-list").click(function () {
           openList();
       });

       //关闭增加申请信息项列表面板
       $(".add-item-page .add-app-list-ele .back").click(function () {
           resetList();
       });

       //验证申请信息项列表面板信息
       function hasData() {
            let val = $("#app-money").val();
            alert( isNaN( $("#app-money").val() ) ? "无法识别的费用！" : (
               parseFloat($("#app-money").val())<=0||parseFloat(val)>999999999?"输入费用不在合理范围": "费用为必填项!!!" ) );
           return val==null||val===""|| isNaN(val) || parseFloat(val)<=0 || parseFloat(val)>999999999;
       }

       function addAppList(){
           let money = $("#app-money").val();
           let remarks = $("#app-remark").val();

           let no = $("#app_tab tbody").find("tr").length+1;

           let remark = remarks;
            remark = (remark.length>10)?remark.substring(0,10)+"...":remark;

            let line = "<tr><td>" + no
                +"</td><td title='"+remarks+"' style='cursor: pointer;'>" + (remark==null||remark===""?"无...":remark)
                +"</td><td>" + money
                +"</td><td><input type='button' class='element-button error-button remove-app-list' value='✖移除' onclick='remove_app_list(this)' /><input type='button' class='element-button normal-button modify-app-list' value='✍修改' onclick='modify_app_list(this)' /></td></tr>";

           // $(".box-list-list table tbody").append("");

           $("#app_tab tbody").append(line);
       }

       //添加一条申请信息到列表
       $(".add-item-page .add-app-list-ele .sure").click(function () {
            if(hasData())
                return;
           // if(confirm("确认添加这条款项吗？")){

           if(isModify){
               removeApList(modifyTr.find("input")[0]);
           }

           addAppList();
           //计算费用和，累加
           addMoney( $("#app-money").val() );

           resetList();
           // }
       });
        function addMoney(money){
            let sum_money= $("#app-sum-money").val();
            let item_money = parseFloat(money ) + (sum_money==null||sum_money===""?0.00:parseFloat(sum_money));
            $("#app-sum-money").val(item_money);
        }
        function decreaseMoney(money){
            let sum_money= $("#app-sum-money").val();
            let item_money = (sum_money==null||sum_money===""?0.00:parseFloat(sum_money)) - parseFloat(money);
            $("#app-sum-money").val(item_money);
        }
       //移除一条申请信息
       let isModify=false;
       let modifyTr;
       function removeApList(ele){
           if(confirm("确认删除这条款项吗？")){
               $(ele).parents("tr").remove();
               decreaseMoney( $(ele).parents("tr").find("td")[2].innerHTML );
           }
       }

       function remove_app_list(ele) {
           removeApList(ele);
       }

       //修改选定一条申请信息
       function modify_app_list(ele) {

            let money=$(ele).parents("tr").find("td")[2].innerHTML;
            let remark =$(ele).parents("tr").find("td")[1].innerHTML;
            // console.log(money+"+"+remark);
           $("#app-money").val(money);
           $("#app-remark").val(remark);
            isModify = true;
            modifyTr = ele;
           openList();
       }