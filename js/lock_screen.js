function showTimeLock(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59


    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
    }
    
    h = (h < 10) ? h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m;
    document.getElementById("status-clock").innerText = time;
    document.getElementById("status-clock").textContent = time;

    document.getElementById("lock-time").innerText = time;
    document.getElementById("lock-time").textContent = time;

    var weekday = date.getDay();
    var month = date.getMonth();
    var day = date.getDate();

    const weekdayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    fullDay = weekdayList[weekday] + ", " + monthList[month] + " " + day;
    document.getElementById("lock-date").innerText = fullDay;
    document.getElementById("lock-date").textContent = fullDay;
        
}


window.addEventListener('load', function() {
    showTimeLock();

    setInterval(showTimeLock, 1000);

    unlockSlider = document.getElementById("unlock_slider");
    unlockLabel = document.getElementById("slider-label");
    // console.log(unlockSlider);
    unlockSlider.addEventListener("input", (e) => {
        // console.log(unlockSlider.value);
        if (unlockSlider.value > 95){
            // console.log("UNLOCK");
            currentURL = window.location.protocol + "//" + window.location.host;
            // console.log(currentURL);
            newURL = currentURL + "/home_screen.html";
            // console.log(newURL);
            window.location.href = newURL;
        }

        if (unlockSlider.value > 15){
            unlockLabel.classList.add("unlock-label-transparent");
        }
        else {
            unlockLabel.classList.remove("unlock-label-transparent");
        }
    })
})