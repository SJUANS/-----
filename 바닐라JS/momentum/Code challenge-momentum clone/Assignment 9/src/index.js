const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

const background = document.querySelector("body");  
const giveColorBtn = document.querySelector("body button");

function giveColor(){
    // Math.random을 상수로 설정하면 셋 다 똑같은 값만 나오고 변하지 않는다!!
    const degree = Math.floor(Math.random()*360);
    const color1 = colors[Math.floor(Math.random()*colors.length)];
    const color2 = colors[Math.floor(Math.random()*colors.length)];

    background.style.background = `linear-gradient(${degree}deg,${color1},${color2})`
    // property 설정 형식 유의. COM(CSS Object Model) 적용됨
}

giveColorBtn.addEventListener("click", giveColor);
