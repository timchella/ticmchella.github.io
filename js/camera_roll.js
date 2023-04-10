
window.addEventListener('load', function() {
    backButton = document.getElementById("back-button");
    console.log(backButton);
    backButton.addEventListener("click", () => {
        currentURL = window.location.protocol + "//" + window.location.host;
        // console.log(currentURL);
        newURL = currentURL + "/home_screen.html";
        // console.log(newURL);
        window.location.href = newURL;
    })

    thumbnails = document.getElementsByClassName("thumbnail");
    for( var i = 0; i<thumbnails.length; i++){
        // console.log(thumbnails[i]);
        thumbnails[i].addEventListener("click", (e) => {
            console.log(e.target);
            targetID = e.target.id.split("-")[1];
            // console.log(targetID);
            currentURL = window.location.protocol + "//" + window.location.host;
            // console.log(currentURL);
            newURL = currentURL + "/photos_individual.html" + "#photo-" + targetID;
            // console.log(newURL);
            window.location.href = newURL;
        })
    }
})