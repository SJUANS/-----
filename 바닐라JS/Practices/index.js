//조건문 연습
function condition1(){
  let sum = 2+2
  if (sum === 4){
    console.log("true")
  } else {
    console.log("false")
  }
}

condition1();

function condition2(){
  let sum = 2+2
  if (sum !== 4){
    console.log("true")
  } else {
    console.log("false")
  }
}

condition2();

function condition3(){
  if (3 > 4){
    console.log("true")
  } else {
    console.log("false")
  }
}

condition3();

const rightVar = 3;
let nullVar = null;
var imVariable;

function isVariable(variable){
  if (variable){
    console.log(`That variable(value:${variable}) does exist!`)
  } else {
    console.log(`That variable(value:${variable}) doesn't exist.`)
  }
}

isVariable(rightVar);
isVariable(nullVar);
isVariable(imVariable); //undefined(값을 할당하지 않음)인 경우 false로 인정되어 두 번째 블록 실행
isVariable(noVar); //선언되지 않은 변수: error 출력