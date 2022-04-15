// object의 속성 접근자 중 dot notation 연습 & etc

const cafeMenu = {
  Americano : 2000,
  IceLatte : 3000,
  VanillaLatte : 3500,
  MintChocoFrappuccino : 4000
}

function orderCount(...menus){
  const yourOrder = menus; // 받은 인수들(menus)는 array 형태로 자동 저장된다
  let total = 0;
  yourOrder.forEach(menu => total += menu); // array의 요소들을 모두 더하는 함수 
  console.log(`It's ${total}won!`)
}

console.log(cafeMenu.Americano)
cafeMenu.Americano = 2500; // 기존 프로퍼티의 값 변경
orderCount(cafeMenu.Americano, cafeMenu.MintChocoFrappuccino);
cafeMenu.CherryCoke = 3000; // 새로운 프로퍼티를 추가
orderCount(cafeMenu.CherryCoke, cafeMenu.IceLatte, cafeMenu.VanillaLatte);
