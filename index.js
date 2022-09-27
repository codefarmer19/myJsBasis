console.log("fuck u js")
//声明变量
//var 哪里都可以用
var a =1;
//let 只能在定义之后用 假如在第十行定义了let 十行之前不能用
 let b =2;
//const 也是只能定义后用 const只能设置值 不能重置值 正常的写法减少bug应该用const 但是为了方便还是用 var
 const c=3;

 //变量使用
 var hello ="HEllo";
 console.log(hello);//把变量里的内容输出来
//p2.字符串拼接
 var str = "hello ";
 var str1 = "big ";
 var str2 = "world";
 console.log(str+str1+str2);

 //P2.1数字拼接
 var num =1;
 console.log(num+1);//2
 console.log(str+1);//hello1

 //模板字符串
 
let bool1 = true;
console.log(`1+1 is${1+1}`);
//感叹号在里面是取反！
console.log(`布尔值的相反值是${!bool1}`);

//数据类型typeof和instanceof
//创建一个静态数组
var people = ["wang","lin","lee"];
 var one = 1;
 var str2 = "csgo";
 var bolean = true;
//创建一个对象
var pers = {
    fistName:"lee",
    lastName:"power",
};
//创建一个函数 方法 小括号里面是传进来的参数
function sayItOut(pers){
    console.log("hellow"+pers.fistName);
}
//执行
console.log("--------typeof----------");
console.log(typeof people);//typeof 是js的内部类 输出数组的时候会报错
console.log(typeof one);
console.log(typeof str2);
console.log(typeof bolean);
console.log(typeof pers);
console.log(typeof sayItOut);

console.log("--------instanceof----------");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str2 instanceof String);
console.log(bolean instanceof Boolean);
console.log(pers instanceof Object);
console.log(sayItOut instanceof Function);

//数字运算
let numa =100;
console.log('------------基本数学运算-----------');
console.log(numa+25);
console.log(numa-100);
console.log(numa*100);
console.log(numa/1500);
console.log('------------额外数学运算-----------');
console.log(numa%1500);//取余
console.log(++numa);//自增1
console.log(-- numa);//自减1
console.log('------------Math对象运算-----------');
console.log(Math.PI);//圆周率
console.log(Math.sqrt(numa));//平方根

//字符串转换成数字
let numb = '150';
let flo1 = '1.5';
console.log('=============字符串转换成数字=============');
console.log(parseInt('100'));
console.log(parseInt(numb));
console.log(parseInt('ABC'));
console.log(parseInt(0xf)); //这种情况会变成16进制

console.log('=============字符串转换成浮点数=============');
console.log(parseFloat('1.00'));
console.log(parseFloat(flo1));
console.log(parseFloat('ABC'));


console.log('=============字符串转换成数字会忽略任何符号=============');
console.log(parseInt('1.5'));
console.log(parseInt('1+1'));

console.log('=============字符串转换成数字模板字符串=============');
console.log(parseInt(`${1+1}`));//模板字符串会先计算模板里面的值 然后再执行其他操作

console.log('=============数字转换成字符串=============');
console.log(numb.toString());
console.log(flo1.toString());
console.log((100).toString());

//异常
console.log('=============抛出异常=============');
//写两个方法
// function crit(){
//     throw "throwing an exception";
// }
// function logErr(theExce){
//     console.log(theExce);
// }
//  throw '我的异常';
 //throw true;//为什么会灰色？因为抛出异常会打断代码执行
 console.log('=============try.catch=============');
//  try {
//     crit();
//  } catch (ex){
//     console.log('报错了');
//     logErr(ex);
//  } finally{
//     console.log('我跑了！');
//  }


//date对象
 let now = new Date();//获取当前时间 UTC时间

 console.log(now);

 let that_sMe = new Date(1999,0,19);//在代码里月份是从0开始计算
 console.log(that_sMe)

 //自定义设置时间
 let demoDate = new Date();
 demoDate.setMonth(0);
 console.log('我设置的月份',demoDate);

 console.log(`Day of the week:${ demoDate.getDay()}`);//0是周日
 console.log(`Date:${demoDate.getDate()}`)//今天的日期

 //等号的作用
 function equal(){
    let a = 1;
    let b = '1';
    console.log('===================现在a是数字b是字符 如果用两个等号 ==的话就是返回true 因为两个等号是会转换类型 三个等号===是绝对相等实际使用要用三个等号===========================');
    console.log('===================不等于的情况：在等号前面加上感叹号!=这是简单的不等于 ！==两个等号的话会检查当前的数据类型实际操作要经常用！==减少bug===========================');
    console.log('===================参考下面if语句===========================');
 }  

 //if语句
  var status =1;//这里设置状态等于了200所以走第一层 设置八百第二层 其他第三层
    if(status === 200){
        console.log('状态等于200！走这里');
    }else if(status === 800){
        console.log('状态等于800！')
    }
    else{
        console.log('都不是！');
    }

console.log('===================进阶写法===========================');
var status =200;//这里设置状态等于了200所以走第一层 设置八百第二层 其他第三层
var mes = '';
    if(status === 200){
        mes='ok';
    }else if(status === 800){
        mes='not ok';
    }
    else{
        mes='something else';
    }
    console.log(mes);
    var status =200;//这里设置状态等于了200所以走第一层 设置八百第二层 其他第三层

var mes = '';
    if(status === 200){
        mes='ok';
    }else if(status === 800 || status === 300 ){//   ||是或者的意思
        mes='not ok';
    }
    else{
        mes='something else';
    }
    console.log(mes);

    //switch语句

    const status1 = 500;

    switch(status1){
        case 200:
            console.log('ok');
            break;//如果是等于200就停止执行 没有break的话就会一直往下执行
            case 400:
                break;
                case 500:
                    console.log('ok');
                    break;
                    default:
                        console.log('default value')
                        break;
    }

    //数组
    console.log('===================创建数组===========================');

    let shuzuchangdu = 5; //数组长度是5

    let shuzu = [];

    let shuzu2 = Array(shuzuchangdu);//通过Arry对象创建数组 括号里可以直接加数字创建长度

    console.log(shuzu);
    console.log(shuzu2);//五个长度就可以容纳五个数组 如 [a,b,c,d,e]

    console.log('===================数组添加数据===========================');

    let arr = ["a", true , 2];

    console.log(arr[0]);//输出第一个数组 也就是a

    console.log(arr[1]);//输出第二个数组 也就是true

    console.log('===================对象数组长度===========================');

    let arrylength = 2;

    let arr2 = Array(arrylength);

    arr2[0] = "数组2的第二个数组等于这个！";

    console.log(arr2[0]);
    console.log(arr2[1]);//没设置值 找不到

    console.log('===================数组长度减1===========================');

    let arr3 = Array(3);//三个数组长度

    arr3[2] = "设置数组三的第二个值";

    console.log(arr3[2]);
    console.log(arr3[arr3.length - 1]);
    console.log(arr3[0]);
    console.log(arr3[1]);

    console.log('===================数组添加和移除===========================');

    //pop 和 push

    let arr5 = ["a",true, 2];//3个数组
    console.log(arr5.push("new value"));//在最后添加了 new value
    console.log(arr5);
    console.log(arr5.pop());//移除掉最后一个
    console.log(arr5);

    //shift 和 unshift

    let arr6 = ["a",true, 2];
    console.log(arr6.unshift("new value"));//在数组前面添加一个值
    console.log(arr6);
    console.log(arr6.shift());//移除第一个值
    console.log(arr6);

    //concat

    let arr7 = ["b",false,3];
    let newArr = arr6.concat(arr7);//这里把arr6和7拼接起来
    let newArr1 = arr7.concat([1,2,3]);//这是把arr7和新增的数组拼接起来
    console.log(newArr);
    console.log(newArr1);

    //循环语句
    console.log('===================循环只有小于 没有大于===========================');
    let nameqqq = ['js','java','mysql'];
    let whileXunHuan = 0;
    console.log('===================while循环===========================');
    while(whileXunHuan < nameqqq.length){ //为什么这么写？因为循环前是要循环的值 后面是循环的次数就是

        let nameq = nameqqq[whileXunHuan];
        console.log(nameq);
        whileXunHuan++;

    }

    console.log('===================for循环===========================');

    for(let forIndex = 0; forIndex <nameqqq.length; forIndex++){
        const name1 = nameqqq[forIndex];
        console.log(name1);
    }

    console.log('===================for of===========================');

    for (const name of nameqqq) {
        console.log(name);
    }
    console.log('===================for in===========================');
    for (var i in nameqqq){
        console.log(nameqqq[i]);
    }