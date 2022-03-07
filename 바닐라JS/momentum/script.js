"use strict"
const a = 5; //바뀌지 않는 값=constant. 재할당 불가. 
const myVariableName = 0;
// camelCase 식으로 작성한 변수의 이름. JS에서 일반적.(관례=컨벤션)
const my_variable_name = 0; 
// snake_case 식으로 작성한 변수의 이름. python에서 일반적.
//(cf. 파이썬에서 변수 선언할 땐 변수명 바로 써주면 됨 -> my_variable_name = 0)

let b = 5; 
b = 7;
console.log(b);
// 결과: 7 출력. 
// let으로 선언된 변수는 재할당 할 수 있고, 재할당할 때는 let을 다시 쓰지 않음. 
// let은 변수를 처음 생성할 때만 사용 

let myName = "Paw";
console.log(myName);

myName = "Paw Paw"
console.log(myName);