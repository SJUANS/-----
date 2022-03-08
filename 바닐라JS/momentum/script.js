"use strict";
// data types: Number(Int, Float), String, Booleans, null, undefined 
const myID = "PawPaw" // String
const intNum = 3 // Int
const floatNum = 3.14 // Float

const empty = null // null: 빈 값을 할당
let undef 
console.log(undef); // undefined: 값이 할당되지 않음
 // cf) const로 변수 선언하면 할당 안했을시 error 출력, undefined 값 나오지 않음 


// Booleans(불린형)
const on = true; // 논리 연산자에서 1
const off = false; // 논리 연산자에서 0

// * true(Booleans) != "true"(String) *
// * null != "null"(String) *

// --------------------------

// array 연습
const stack = ["HTML","CSS","Python"]
console.log(stack);

// array의 특정 값(element) 선택 방법 --> 순서(n번째)로! 
console.log(stack[0]);

// array에 값 추가
stack.push("Javasript")
console.log(stack);

// --------------------------

// object 연습
const nubDev = {
    name : "PawPaw", // key : value 구조, key+value = 속성(Property) 
    level_FE : 2,
    level_BE : 1,
    Project_VanilaJS : null,
    Exp_MakingChallenge : true
}
console.log(nubDev);

// object의 특정 값(value) 선택 방법 2가지 --> key(속성 이름)로!
console.log(nubDev["name"]); 
console.log(nubDev.name);

// console.log(nubDev[0]) --> undefined로 출력됨. 
// *왜? nubDev는 array가 아니라 object이므로!*

// (+) 만약 object의 n번째에 있는 key에 접근하고 싶다면
console.log(Object.keys(nubDev)); //object 안의 키들을 array로 변환
const fthKey = nubDev[Object.keys(nubDev)[4]];
console.log(fthKey);

// object에 새로운 속성 추가 or 속성값 바꾸기 
nubDev.Exp_Bootcamp = false // 속성 추가
nubDev.Project_VanilaJS = "momentum clone" // 이미 있는 속성의 값 변경
console.log(nubDev);