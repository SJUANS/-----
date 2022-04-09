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

const varArray = [rightVar, nullVar, imVariable]

function isVariable(){
  for (i = 0; i < varArray.length; i++){
    let variable = varArray[i];
    if (variable){
      console.log(`No.${i} variable(value:${variable}) is true!`)
    } else {
      console.log(`No.${i} variable(value:${variable}) is false.`)
    }
  } 
}

isVariable();