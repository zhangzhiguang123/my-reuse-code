/**
 *
 *
 * @param {*} fn  回调函数
 * @param {*} setTime 延迟时间，单位是毫秒
 * @returns {} 包含操作删除和开始
 */
function mysetInterval(fn,setTime){
     let t = null;
     return{
         start:function(){
             t = setTimeout(() => {
                 fn();
                 this.start();
             }, setTime);
         },
         end:function(){
             clearTimeout(t);
             t = null;
         }
     }
};

let e1 = mysetInterval(()=>{
    console.log("hello er gou");
},1000);  //注册一个定时器，每秒输出一个"hello er gou"

e1.start();//开始执行

setTimeout(() => {
    e1.end(); //十秒后结束
}, 10000);