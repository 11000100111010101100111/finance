
       function addalls(){
           for(i=0;i<5;i++)
                $(".box-list-list table tbody").append("<tr><td>1</td><td><input type='checkbox' class='check-item'></td><td class='item-id'>1</td><td>直接成本</td><td>公账</td><td>预付类</td><td>江西省科学院</td><td>95580</td>"+
           "<td>362430********986523</td><td>123456</td><td>1200.00</td><td>1500.00</td><td>2021-8-16</td><td>待审核</td><td>22222</td>"+
           "<td><input type='button' value='详情' class='item-operator-detil' onclick='showdetil(this)'></td></tr>");
       }
       addalls();
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

        //判断全选按钮是否选中，选中则添加的一行业为选中状态
            var isChecked = $(".box-list .box-list-list table thead input[type='checkbox']").prop("checked");


            // console.log(allCheckBox);
            var no = $(".box-list-list table tbody").find("tr").length+1;
            var style = (row.status=="待提交" || row.status=="未通过")?"display:inline-block;":"display:none;";
            var msg = "<tr>"+
                        "<td>"+no+"</td>"+
                        "<td>"+
                            "<input type='checkbox' class='check-item'"+ (isChecked?" checked":" ") +">"+
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
 
             $("input[type='submit']").css("display",'inline');
             $("input[type='button']").css("display",'inline');
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
             
             var item_id = $(item).parents("tr").find(".item-id").html();
            //  console.log(item_id);
 
 
            //  var status = $(item).parents("tr").find("td")[13].innerHTML;
            //  console.log(status);

             //测试数据
             var arr = ['直接成本','公账','预付类','江西省科学院','中国邮政储蓄银行','621799435*****6857','无','1000','2000'];
             
             if(!hasStatus(item)){
                 
                //已提交的信息无法在提交，影藏提交按钮
                 // $("input[type='submit']").css("display",'none');
                 $(".submit").css("display",'none');
                 //根据item_id异步查询信息
                 //......
 
 
                  //已提交的信息无法在修改，内容输入框禁用
                 $(".add-item-page .inlineblock,.add-item-page input[type='radio']").attr("disabled",true);
             }else{
                 arr = readCell(item);
             }
             
 
             var list = $(".add-item-page .input-msg");
             for(i=3;i-3<list.length;i++){
                     list[i-3].value=arr[i];
             }
             $("[name = 'item-chengben'][value='"+arr[0]+"']").prop("checked",true) ;
             $("[name = 'item-fukuan'][value='"+arr[1]+"']").prop("checked",true);
             $("[name = 'item-kuanxiang'][value='"+arr[2]+"']").prop("checked",true) ;
             
             
             $(".show").css("opacity","0.2");
             $(".add-item-page").css("display","inline-block");
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
             arr[list.length] = $("[name = 'item-chengben']").val();
             arr[list.length+1] = $("[name = 'item-fukuan']").val();
             arr[list.length+2] = $("[name = 'item-kuanxiang']").val();
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
                id:"-",
                typeofchengben:arr[6],
                typeoffukuang:arr[7],
                danwei:arr[0],
                bank:arr[1],
                account:arr[2],
                typeofkuangxiang:arr[8],
                text:arr[3]==""?"-啥也没写-":arr[3],
                application:arr[4],
                approve:arr[5],
                status:"待提交",
                time:"****-**-** **:**:**",
                instanceId:"*"
             }
             console.log(data);
             if(confirm("是否将这条申请提交？")){
 
                insertRow(data);
                 //异步提交
             }
             closePanel();
         }

         $(".add-item-page .form .submit").click(submit_item);
 
         //提交信息，等待审核
         function submitRow(btn){
            var arr = readCell(btn);
            var data = {
                typeofchengben:arr[0],
                typeoffukuang:arr[1],
                danwei:arr[3],
                bank:arr[4],
                account:arr[5],
                typeofkuangxiang:arr[2],
                text:arr[6]==""?"-啥也没写-":arr[6],
                application:arr[7],
                approve:arr[8]
            }
            // console.log();
            console.log(data);
            if(confirm("是否将这条申请提交？")){
                //异步提交
                //...
                //刷新表格
                //...
                flushTable();
            }
         }


         //修改
         function hasStatus(item){
            // var status = "待提交";
            // var status = $(item).val();
            var status = $(item).parents("tr").find("td")[13].innerHTML;
            // console.log("checkbox:"+status);
            return status == "待提交";
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
                alert(checkedNum>1?"一次只能修改一行数据，你选择太多啊！":"你还没有选择，请选择一行未提交的数据");
                return;
            }
            showdetil($(checkbox).parents("tr").find("td .item-operator-detil"));
         });

         //删除待提交的行
         $(".box-list-operater .remove-item").click(function remove(){
            var checkboxs=$(".box-list .box-list-list table tbody").find("input[type='checkbox']");
            var checkedNum =0;
            var checkbox=[];
            for(i=0,j=0;i<checkboxs.length;i++){
                checkedNum += checkboxs[i].checked == true && hasStatus(checkboxs[i])? 1:0;
                
                if(checkboxs[i].checked == true && hasStatus(checkboxs[i])){
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
                for(i=0;i<checkbox.length;i++){
                    // removeRow(checkbox[i]);
                    console.log(checkbox[i]);
                }
            }
            // showdetil($(checkbox).parents("tr").find("td .item-operator-detil"));
         });