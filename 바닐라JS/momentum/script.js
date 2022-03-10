"use strict";
// events와 연동 연습

const Headline = document.querySelector(".foo");

function HeadlineClick(){
    console.log("You've clicked the Headline!");
}

Headline.addEventListener("click", HeadlineClick);
// click 이벤트 발생시에만 HeadlineClick 함수 실행
// 함수를 인수로 넣을 때 ()쓰지 않도록 유의

function ChangeColor(){
    Headline.style.color = "blue";  // 선택한 요소 색깔 바꾸기 --> 이 경우 .CSS를 통하지 않고 style을 직접 바꿔준 것 
}
function ResetColor(){
    Headline.style.color = "";  
}

// event를 주는 두 가지 방법
Headline.addEventListener("mouseenter", ChangeColor)
Headline.onmouseleave = ResetColor; // same as: Headline.addEventListener("mouseleave", ResetColor)



