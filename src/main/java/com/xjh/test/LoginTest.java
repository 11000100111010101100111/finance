import org.junit.Test;

import java.util.Random;


/**
 * Created by IntelliJ IDEA.
 * User: 波罗的海
 * Date: 2021/8/21
 * Time: 15:19
 **/

public class LoginTest {

    @Test
    public void getCode(){
        StringBuffer sb =new StringBuffer("") ;
//        sb.delete(0,sb.length());
//        do{
////            this.code.append((new Random()).nextInt(9));
//        }
//        while ((this.code.append((new Random()).nextInt(9))).length()<5){}
        int item = 0;
//        boolean isNum= item<=57&&item>=48;
//        boolean isUp = item>=65&&item<=90;
//        boolean isLower =item>=97&&item<=122;
//        while (sb.length()<50
//                && ( (
//                        (item =(new Random()).nextInt(74)+48)>=48&&item<=57)
//                      || (item>=65&&item<=90)
//                      ||(item>=97&&item<=122)  ) ){
//
//            System.out.println(item+":"+(char) ((new Random()).nextInt(74)+48));
//            sb.append((char) (item));
//        }
        while (sb.length()<5)
        {
            while(( (item =(new Random()).nextInt(74)+48)>57 && item<65)
                    || (item>90&&item<97) ){}
                System.out.println(item + ":" + (char) (item));
                sb.append((char) (item));
//            }
        }
//        while (this.code.length()<5){
//            int item = 0;
//            while ( ((item =(new Random()).nextInt(74)+48)<65&&item>57)
//                    ||(item<97&&item>90)){}
//
//            this.code.append(new Character((char) (item)));
//        }
/*
        for (int i=0;i<5;i++) {
            this.code.append((new Random()).nextInt(9));
        }
*/
        System.out.println(sb);
    }
    @Test
    public void show(){
        char []s = new char[72];
        for (int i=48,j=0;i<=57;i++,j++){
            s[j] = (char) i;
        }
        for(int i=65,j=10;i<=90;i++,j++){
            s[j]= (char) i;
        }
        for(int i=97,j=36;i<=122;i++,j++){
            s[j]= (char) i;
        }
        System.out.println(s);
    }
}
