"use stirct";
const calculator = {
    add: function(a,b){
        console.log(a+b)
    },
    minus: function(a,b){
        console.log(a-b)
    },
    divide: function(a,b){
        console.log(a/b)
    },
    powerOf: function(a,b){
        console.log(a**b)
    }
} // 함수 프로퍼티끼리 ,로 구분해주는 거 잊지 말기!

// add(2,4); --> 오류 출력(object 밖에서 add 실행할 수 없음!)

calculator.add(2,3);
calculator.minus(2,3);
calculator.divide(2,3);
calculator.powerOf(2,3);