
window.addEventListener('load', function() {
    homeTiles = document.getElementById("home");
    console.log(homeTiles.classList);
    homeTiles.classList.add("home-active");

    photosApp = document.getElementById("photos");
    photosApp.addEventListener("click", () => {
        currentURL = window.location.protocol + "//" + window.location.host;
        // console.log(currentURL);
        newURL = currentURL + "/camera_roll.html";
        // console.log(newURL);
        window.location.href = newURL;
    });


    notesApp = document.getElementById("notes");
    notesApp.addEventListener("click", () => {
        currentURL = window.location.protocol + "//" + window.location.host;
        // console.log(currentURL);
        newURL = currentURL + "/notes.html";
        // console.log(newURL);
        window.location.href = newURL;
    });

    cameraApp = document.getElementById("camera");
    cameraApp.addEventListener("click", () => {
        currentURL = window.location.protocol + "//" + window.location.host;
        // console.log(currentURL);
        newURL = currentURL + "/camera.html";
        // console.log(newURL);
        window.location.href = newURL;
    });

    mapsApp = document.getElementById("maps");
    mapsApp.addEventListener("click", () => {
        window.open("https://goo.gl/maps/Ktdzypwo6rsPqr6p6","_blank")
    })
})