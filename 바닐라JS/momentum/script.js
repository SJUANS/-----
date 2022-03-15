"use strict";
const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden"; //string을 저장할 때 사용하는 변수는 전체 대문자snakecase로 표기하는게 관행

function receiveUsername(event){
    const username = loginInput.value; //username은 함수의 지역변수로 써야 작동
    event.preventDefault();
    localStorage.setItem("username", username) //"변수이름(key)", 변수(value)
    //username을 브라우저에 저장
    greeting.innerText = `Have a good day, ${username}!` 
    //입력받은 값(username)을  h1 안에 넣기
    //이 경우엔 innerText 대신 innerHTML을 써도 작동하는데 둘의 차이는 
    //https://hianna.tistory.com/480 참조 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
} 

loginForm.addEventListener("submit", receiveUsername)
