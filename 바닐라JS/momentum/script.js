"use strict";
//document로 HTML의 element에 접근하고 조작하기

document // script가 작동되는 Html 문서
// console.dir(document); // html 문서를 object 형태로 보여줌
// .dir 대신 .log 입력: 그냥 코드만 보여줌

document.title = "Momentum Clone"; // html의 내용을 수정 가능

//예시 코드 몇 개
document.body  
document.location 

// html 내 element grab 하기
const headline = document.getElementById("Head1"); // html에서 id="Head1"인 요소 불러옴
console.log(headline);
headline.innerText = "change!";

const classFoo = document.getElementsByClassName("foo");
console.log(classFoo);

const tagName = document.getElementsByTagName("h1");
console.log(tagName);

// element grab 추천 함수: querySelector(), querySelectorAll():
// css selector와 동일 방식 ex)
    // document.querySelector("tagname(부모태그) tagname(자식태그)") or
    // document.querySelector(".classname tagname:pseudo-class") or
    // document.querySelector("#id")
// --> 조건에 맞는 첫 번째 요소만 return함

