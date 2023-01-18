// let name = 'javascript';

// 선언식
// 코드의 마지막에 선언해도 끌어온다 = 호이스팅
// function getName(name) {
//   return name + '님 안녕하세요';
// }

// 표현식
// const getName = function(name) {
//   return name + '님 안녕하세요!';
// }

const getName = (name) => {
  return name + '님 안녕하세요!';
}


function setName() {
  let name = window.prompt('이름을 입력하세요');
  document.getElementById('app').innerHTML = `<h3>${getName(name)}<h3>`;
}