const clockTitle = document.querySelector(".js-clock");

function xmasCounter(){
    const now = new Date();
    const thisYear = now.getFullYear();
    let thisXmas = new Date(`${thisYear}-12-25`)
    if (now > new Date(`${thisYear}-12-25`)){
        thisXmas = new Date(`${thisYear+1}-12-25`) 
    }
    const timeLeft = thisXmas-now;
    const dayLeft = Math.floor(timeLeft / (1000*60*60*24));
    const hourLeft = String(Math.floor((timeLeft / (1000*60*60)) % 24)).padStart(2,"0");
    const minLeft = String(Math.floor((timeLeft / (1000*60)) % 60)).padStart(2,"0");
    const secLeft = String(Math.floor(timeLeft / 1000 % 60)).padStart(2,"0");

    clockTitle.innerText = `${dayLeft}d ${hourLeft}h ${minLeft}m ${secLeft}s`
}
xmasCounter();
setInterval(xmasCounter, 1000);


