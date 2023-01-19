let txt = '01234567890123456789';

console.log(txt.slice(1, 5)); // 0~4, 배열에서 더 많이 쓴다
console.log(txt.substring(1, 5)); // 0~4

console.log(txt.replace('2', 'two')); // 처음 타겟만 바꾼다
console.log(txt.replaceAll('2', 'two')); // 모든 타겟을 바꾼다
console.log(txt); // 기존의 데이터는 변하지 않는다


let text = '  abcdefg hijklmnop qrs tuv wx yz  ';

console.log(text.toUpperCase()); // 기존의 데이터는 변하지 않는다
console.log(text);

console.log(text.trim()); // 양쪽 공백을 날린다, 기존의 데이터는 변하지 않는다
console.log(text);

parts = text.trim().split(' '); // ' ' 기준으로 나눈다
console.log(parts);


let num = 123;

ntos = num.toString(); // 문자열로 바꾼다
console.log(ntos, typeof(ntos));


console.log('2'+'2'); // 22, +는 문자열 연결
console.log('2'+'2'-'2'); // 20, +는 문자열 연결, -는 연산자로 취급
console.log('2'*'2'+'2'); // 42, *는 연산자로 취급, +는 문자열 연결
console.log(5*3+"ㅋㅋ"); // 15ㅋㅋ, 숫자+문자에서 숫자를 문자열로 변환