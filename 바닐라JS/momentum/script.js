"use strict";
function sayHi(username){ // username 자리(=매개변수, Parameter)엔 임의의 어떤 이름이든 쓰면 된다
    console.log(username)
}
sayHi(1);
sayHi("SJ");
sayHi(null);  // 1, "JUAN", null 모두 argument
// 파라메터는 함수의 body({}부분) 바깥에서 접근할 수 없다

function yourLevel(username, level){ // 실행시 2개의 argument를 받는 함수(Parameter 2개)
    console.log(username+"'s level:"+level)
} 
yourLevel("Nic", 100); 
yourLevel("SJ", 3);
yourLevel("Foo", 25);  
// 파라메터 여러 개 일시 순서 유의!! (파라메터 순서=인수 순서 되도록)
// 파라메터와 인수의 개수도 동일하게 맞추기

// 인수를 받지 않은 경우
function Hi(){
    console.log("hello");
}
Hi("nico");
Hi("JUAN");
Hi("Paw"); 
// 실행 결과: 모두 "hello"로 출력. ()안에 넣은 인수가 아무 영향 x

// 인수를 보내지 않은 경우
function add(a,b){
    console.log(a,b)
}
add();
// 실행 결과: undefined 두 개 출력
// 만약 여기서 a,b->a+b로 바꾸면 NaN 출력 *NaN: Not a Number

// Object 안 function 만들고 실행하기 
const Hero = {
    name: "PawPaw",
    level: 1,
    skill: function(skilltype){
        console.log("PawPaw used "+skilltype+"!")
    } // skill이라는 함수가 Hero의 프로퍼티가 된 것!
}
Hero.skill("fireball");
Hero.skill("defense");
Hero.skill("Smash");

// Obj.Property 규칙이 Hero.skill과 Console.log에 똑같이 적용되고 있는 것
// 즉 둘은 동일한 구조이다!