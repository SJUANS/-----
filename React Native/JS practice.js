// Array에서 특정 요소 개수 세기
const fruit_list =["사과", "감", "감", "배","포도", "포도", "딸기", "포도", "감","수박", "딸기"];
let count = 0;
fruit_list.map((value) => {if ( value == "딸기") count += 1;}) //if절 끝에 ;을 붙이면 안 됨!
console.log(count);

// 이메일 형식 판별 함수 만들기
function checkEmailByIndexOf(email){
   if (email.indexOf("@") < 0){
    console.log("이메일이 아닙니다") //indexOf 값이 -1이면 문자열에 해당 문자(열)이 존재하지 않음
   } else {
       console.log("이메일이 맞습니다")
   }
}

checkEmailByIndexOf('gunhee21@gmail.com');
checkEmailByIndexOf('gunhee21#gmail.com');

function checkEmailByRegExp(email){
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (email.match(regExp)!=null){
        console.log("이메일이 맞습니다")
    } else {
        console.log("이메일이 아닙니다")
    }
}

checkEmailByRegExp('gunhee21@gmail.com');
checkEmailByRegExp('gunhee21#gmail.com');
