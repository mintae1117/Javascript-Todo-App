const images = ["001.jpg","002.jpg","003.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("img#bg");

bgImage.src = `img/${chosenImage}`;