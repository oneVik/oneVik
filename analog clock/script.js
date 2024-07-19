const secondHand=document.getElementById('second-hand');
const minuteHand=document.getElementById('minute-hand');
const hourHand=document.getElementById('hour-hand');

function clock(){
        const a=new Date();
        const seconds=a.getSeconds()/60;
        const minutes=a.getMinutes()/60;
        const hours=a.getHours()/12;

        rotateClockHand(secondHand, seconds);
        rotateClockHand(minuteHand, minutes);
        rotateClockHand(hourHand, hours);
}

function rotateClockHand(element,rotation) {
        element.style.setProperty('--rotate',rotation*360);
}

setInterval(clock,1000);