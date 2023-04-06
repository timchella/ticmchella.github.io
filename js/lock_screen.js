
window.addEventListener('load', function() {
    unlockSlider = document.getElementById("unlock_slider");
    console.log(unlockSlider);
    unlockSlider.addEventListener("change", (e) => {
        console.log(unlockSlider.value);
        if (unlockSlider.value > 95){
            console.log("UNLOCK");
            console.log(window.location.href);
            currentURL = window.location.href;
            window.location.href = currentURL + "/home_screen.html";
        }
    })
})