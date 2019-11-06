const ajax = function(url,method,data){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        if((method==="get"||method==="GET")&&data){  //get方式并传参
            url = url +"?" +data;
            xhr.open("get",url);
            xhr.send(null);
        }else if(method==="get"||method==="GET"&&!data){  //get方式不传参
            xhr.open("get",url);
            xhr.send(null);
        }else{   //post方式
            xhr.open("post",url);
            xhr.send(data);
        }
        xhr.onreadystatechange = function(){
            if(this.status===200&&this.readyState===4){
                resolve(this.responseText); //将成功信息传入then方法
            }else if(this.status!==200&&this.readyState===4){
                reject(this.status);//将错误码传入then方法
            }
        }
    })
}