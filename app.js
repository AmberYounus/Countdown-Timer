let dayBox = document.getElementById("day-box")
let hrBox = document.getElementById("hr-box")
let minBox = document.getElementById("min-box")
let secBox = document.getElementById("sec-box")

let endDate = new Date("Jan 1, 2024 00:00:00");
let endTime = endDate.getTime()

function countdown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;
    let oneMin = 60 * 1000;
    let  oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

    let zeroAdd = (num) =>(num < 10  ? `0${num}`:num);

    if(endTime<todayTime){
        clearInterval(i);
        document.querySelector(".countdown").innerHTML = `<h1>Countdown has  Expired</h1>`
    }else{       
        let daysLeft = Math.floor(remainingTime/oneDay);           //24*60*60*1000 
        let hrsLeft = Math.floor((remainingTime% oneDay)/oneHr)    //24*60*60*1000/60*60*1000 
        let minsLeft = Math.floor((remainingTime%oneHr)/oneMin)   //60*60*1000/60*1000
        let secLeft = Math.floor((remainingTime% oneMin)/1000)    //60*1000/1000

        dayBox.textContent= zeroAdd(daysLeft)
        hrBox.textContent = zeroAdd(hrsLeft)
        minBox.textContent= zeroAdd(minsLeft)
        secLeft.textContent = zeroAdd(secLeft)
    }
}
let i = setInterval(countdown,1000)
countdown();
