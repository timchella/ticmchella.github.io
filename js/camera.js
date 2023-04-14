const SPEED_NUM = 0.50; // slow the speed of the shutter by increasing this number
const ROTATION_DEG = 60;
const CSS_IS_ACTIVE = "is--active";

class ShutterGSAP {
	constructor() {
		this.shutterContainer = document.querySelector(".js-shutter");
		this.shutterSVG = this.shutterContainer.querySelector("svg#shutters_svg");
		this.shutters = this.shutterSVG.querySelectorAll("path");

		this.shutterTimeline = new TimelineMax({paused: true, force3D:true, yoyo:true, repeat: 1});
		this.stopAnimate = this.stopAnimate.bind(this);
		this.shutterTimeline.eventCallback("onComplete", this.stopAnimate);

		this.init();
	}

	init() {
		this.shutterTimeline
		.from(this.shutters[0], SPEED_NUM,{rotation:ROTATION_DEG, transformOrigin:"39% 87%", ease:Expo.easeIn}, 1)
		.from(this.shutters[1], SPEED_NUM,{rotation:ROTATION_DEG, transformOrigin:"14% 78%", ease:Expo.easeIn}, 1)
		.from(this.shutters[2], SPEED_NUM,{rotation:ROTATION_DEG, transformOrigin:"2% 44%", ease:Expo.easeIn}, 1)
		.from(this.shutters[3], SPEED_NUM,{rotation:ROTATION_DEG, transformOrigin:"21% 17%", ease:Expo.easeIn}, 1)
		.from(this.shutters[4], SPEED_NUM,{rotation:ROTATION_DEG, transformOrigin:"60% 15%", ease:Expo.easeIn}, 1)
		.from(this.shutters[5], SPEED_NUM,{rotation:ROTATION_DEG, transformOrigin:"82% 34%", ease:Expo.easeIn}, 1)
		.from(this.shutters[6], SPEED_NUM,{rotation:ROTATION_DEG, transformOrigin:"88% 61%", ease:Expo.easeIn}, 1)
		.from(this.shutters[7], SPEED_NUM,{rotation:ROTATION_DEG, transformOrigin:"72% 86%", ease:Expo.easeIn}, 1)

		.to(this.shutters[0], SPEED_NUM,{rotation:0, ease:Expo.easeOut},1)
		.to(this.shutters[1], SPEED_NUM,{rotation:0, ease:Expo.easeOut},1)
		.to(this.shutters[2], SPEED_NUM,{rotation:0, ease:Expo.easeOut},1)
		.to(this.shutters[3], SPEED_NUM,{rotation:0, ease:Expo.easeOut},1)
		.to(this.shutters[4], SPEED_NUM,{rotation:0, ease:Expo.easeOut},1)
		.to(this.shutters[5], SPEED_NUM,{rotation:0, ease:Expo.easeOut},1)
		.to(this.shutters[6], SPEED_NUM,{rotation:0, ease:Expo.easeOut},1)
		.to(this.shutters[7], SPEED_NUM,{rotation:0, ease:Expo.easeOut},1)
	}

	onAnimate() {
		if(!this.shutterContainer.classList.contains(CSS_IS_ACTIVE)) {
			this.shutterContainer.classList.add(CSS_IS_ACTIVE);
			setTimeout(replaceBackground, 1500);
		}
        // console.log("onAnimate()");
		this.shutterTimeline.play();
	}

	stopAnimate() {
        // replaceBackground();
		if(this.shutterContainer.classList.contains(CSS_IS_ACTIVE)) {
			this.shutterContainer.classList.remove(CSS_IS_ACTIVE);
			this.shutterTimeline.pause(0, false);
		}
	}
}

class App {
	constructor() {
		this.shutter = new ShutterGSAP();
		const btn = document.getElementById("shutter-play-btn");

		this.startAnimation = this.startAnimation.bind(this);
		btn.addEventListener("click", this.startAnimation);
	}

	startAnimation() {
		this.shutter.onAnimate();
	}
}

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


    const app = new App();


    app.startAnimation();


    // pictureCount = 5;

    picture = document.getElementById("picture");
    picture.style.backgroundImage="url(/images/thumbs/100.jpg)";
    // picture.style.backgroundImage="url(/images/thumbs/8_square.jpg)";

})

pictureCount = 10;


function generateRandomNumber(avoidNum) {
    console.log("generateRandomNumber()");
    randNum = Math.ceil(Math.random() * pictureCount);
    console.log(randNum);
    if( randNum == avoidNum){
        return generateRandomNumber(avoidNum);
    }
    else{
        return parseInt(randNum);
    }
}

function replaceBackground() {
    picture = document.getElementById("picture");
    pictureURL = picture.style.backgroundImage;
    // console.log(pictureURL);
    pictureURL = pictureURL.split("/")[3];
    // console.log(pictureURL);
    pictureNum = pictureURL.split(".")[0];
    // console.log(pictureNum);
    pictureNum = parseInt(pictureNum);

    newNum = generateRandomNumber(pictureNum);
    // console.log(newNum);

    picture.style.backgroundImage="url(/images/extra_photos/" + newNum + ".jpg)";
}