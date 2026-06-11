function updateClock() {
    let now = new Date();

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let timeString = `${hour} : ${min} : ${sec}`;

    document.getElementById("clock").innerText = timeString;

    let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    let dateString = now.toLocaleDateString(undefined, options);
    document.getElementById("date").innerText = dateString;

}


setInterval(updateClock , 1000);