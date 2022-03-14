"use strict";
const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button"); 

function preventRefresh(event){ // event에 발생한 이벤트 관련 정보가 object 형태로 정리됨
    event.preventDefault(); // 이벤트와 연동된 브라우저 기본동작 중지 
    console.dir(event) // 확인하면 defaultPrevented: true로 되어 있음
    alert(loginInput.value)
    console.log(event)
} 

loginForm.addEventListener("submit", preventRefresh)
// 여기서 의도한 동작을 하려면 object을 loginForm으로 설정해야 함!