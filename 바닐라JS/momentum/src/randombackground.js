const backgroundimgs = [
    "src/bgimgs/1.jpg",
    "src/bgimgs/2.jpg",
    "src/bgimgs/3.jpg",
    "src/bgimgs/4.jpg",
    "src/bgimgs/5.jpg",
    "src/bgimgs/6.jpg",
    "src/bgimgs/7.jpg",
    "src/bgimgs/8.jpg",
    "src/bgimgs/9.jpg",
    "src/bgimgs/10.jpg",
    "src/bgimgs/11.jpg",
    "src/bgimgs/12.jpg"
]

const body = document.querySelector("body");
const background = document.createElement("img");

function setRandomBackground(){
    const selectedBg = backgroundimgs[Math.floor(Math.random()*backgroundimgs.length)]
    background.src = `${selectedBg})`
    body.prepend(background)
}

setRandomBackground();