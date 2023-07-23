const images = [
    "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg",
    "5.jpg", "6.jpg", "7.jpg", "8.jpg"
]

const todayImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");
image.classList.add("background-image");
image.src = `img/${todayImage}`;

const background = document.querySelector('.background');
background.appendChild(image);