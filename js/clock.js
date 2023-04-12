function showTime(){
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
        
}

window.addEventListener('load', function() {
    showTime();

    setInterval(showTime, 1000);
})