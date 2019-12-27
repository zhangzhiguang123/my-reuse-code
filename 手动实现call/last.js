Function.prototype.mycall = function(con){
    con = new Object(con) || window || global;
    con.fun = this;   //给目标对象新建一个属性，绑定这个函数
    let paramsArr = new Array();  //新建一个空数组
    for(let i=1;i<arguments.length;i++){
        paramsArr.push(arguments[i]);
    }
    con.fun(...paramsArr);  //运行一下
    delete con.fun;   //删除目标对象上的fun属性
}

// let testObj = {   //定义一个对象
//     num1:10,
//     num2:9.5
// }

function conso(p1,p2,p3){   //定义函数
    console.log(this.num1,this.num2,p1,p2,p3);
}

conso.call(1,2,3); //原生call    undefined undefined 2 3 undefined
conso.mycall(1,2,3);//实现的call  undefined undefined 2 3 undefined