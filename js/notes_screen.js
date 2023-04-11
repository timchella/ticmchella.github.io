
window.addEventListener('load', function() {
    backButton = document.getElementById("back-button");
    console.log(backButton);
    backButton.addEventListener("click", () => {
        currentURL = window.location.protocol + "//" + window.location.host;
        // console.log(currentURL);
        newURL = currentURL + "/home_screen.html";
        // console.log(newURL);
        window.location.href = newURL;
    });

})