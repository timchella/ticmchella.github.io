
window.addEventListener('load', function() {
    unlockSlider = document.getElementById("unlock_slider");
    unlockLabel = document.getElementById("slider-label");
    console.log(unlockSlider);
    unlockSlider.addEventListener("input", (e) => {
        console.log(unlockSlider.value);
        if (unlockSlider.value > 95){
            console.log("UNLOCK");
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