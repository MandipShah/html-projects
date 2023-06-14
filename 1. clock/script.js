const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const amE1 = document.getElementById("am");

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am = "AM"

    if(h>12){
        h=h-12
        am="PM"
    }

    h=h<10 ? "0"+h :h;
    m=m<10 ? "0"+m :m;
    s=s<10 ? "0"+s :s;
    
    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    amE1.innerText = am;
    setTimeout(()=>{
        updateClock()
    },1000)

}
updateClock();