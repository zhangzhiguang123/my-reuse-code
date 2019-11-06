/**
 *
 *
 * @param {*} stopTimeStr  //结束时间
 * @returns  {}  剩余时间对象
 */
function sub(stopTimeStr) {
    let stopTime = new Date(stopTimeStr);
    let nowTime = new Date();
    let subTime = Math.floor(stopTime - nowTime) / 1000;
    let days = Math.floor(subTime/3600/24);
    let hours = Math.floor((subTime%(3600*24)) / 3600);
    let minutes = Math.floor(((subTime%(3600*24)) % 3600) / 60);
    let seconds = Math.floor((subTime%(3600*24)) % 3600) % 60;
    days >= 0 && days <= 9 ? days = "0" + days : 0;    
    hours >= 0 && hours <= 9 ? hours = "0" + hours : 0;
    minutes >= 0 && minutes <= 9 ? minutes = "0" + minutes : 0;
    seconds >= 0 && seconds <= 9 ? seconds = "0" + seconds : 0;
    return {
        days,
        hours,
        minutes,
        seconds
    }
}

setInterval(()=>{
    console.log(sub("2019-11-6 24:00:00").days,sub("2019-11-6 24:00:00").hours,sub("2019-11-6 24:00:00").minutes,sub("2019-11-6 24:00:00").seconds);
},1000);