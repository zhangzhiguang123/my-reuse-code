Function.prototype.mycall=function(con){   //简单实现，不支持传参
    con.fun = this;
    con.fun();
    delete con.fun;
}

let obj1 = {
    name:"helloworld"
}

function fn(){
    console.log(this.name);
}

fn.call(obj1);   //helloworld

fn.mycall(obj1); //helloworld