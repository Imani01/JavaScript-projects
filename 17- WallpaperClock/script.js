//Task- create a Clock that displays the Hours, Minutes and Seconds in 12 hr clock system
// The Date method comes in handy 
// Use the set interval method that is used to call a function that evaluates an expression at a specified interval

setInterval(function () { // interval is set in milliseconds

    const clockTick = new Date();
    let hours = clockTick.getHours();
    let minutes = clockTick.getMinutes();
    let seconds = clockTick.getSeconds();
    let period = 'AM';

    if (hours >= 12) {
        period = 'PM';
    };
    if (hours > 12) {
        hours = hours - 12;
    };
    if (minutes < 10) {
        minutes = '0' + minutes;
    };
    if (seconds < 10) {
        seconds = '0' + seconds;
    };

    const TimeNow = hours + ':' + minutes + ':' + seconds + ' ' + period;
    console.log(TimeNow);

    let showClock = document.getElementById('clock');
    showClock.innerText = TimeNow;
}, 1000) // a thousand milliseconds make a second

