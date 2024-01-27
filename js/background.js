const images = ["001.png","002.png","003.png"];

const chosenImage = images[0];

const bgImage = document.querySelector("img#bg");

bgImage.src = `img/${chosenImage}`;