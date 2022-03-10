"use strict";
// 조건문 

if(condition){
    ...함수...
} 
// 조건(예시의 condition은 boolean으로 판별 가능해야 한다
// -> true 아니면 false return

if((a && b)) || (c && d)){
    ...함수...
} 
// 판별 순서: (c && d)->(a && b)->((a && b) || (c && d))