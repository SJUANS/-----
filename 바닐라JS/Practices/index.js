const firstBtn = document.getElementById("first");
const lastBtn = document.getElementById("last");
let text = document.querySelector("h2")

//선언식 함수
function imFunction1() {
  text.innerText = "나는 선언식 함수"
}

//표현식 함수
let imFunction2 = function(){
  text.innerText = "나는 표현식 함수"
};

firstBtn.onclick = imFunction1;
lastBtn.onclick = imFunction2;

// eventhandler에 등록하는 함수는 ()빼고 쓰자!!!!

console.log(imFunction1)
// (이벤트리스너(핸들러)를 등록할 때 제외) 함수 이름 끝에 ()를 붙이지 않으면 함수 그 자체를 반환하게 된다 