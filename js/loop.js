const arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]


for(let i = 0; i < 5; i++) {
  let str = "";
  for(let j = 0; j < 5; j++) {
    let x = arr[5-j-1][i].toString();
    str += x.padStart(2, '0')+" ";
  }
  console.log(str);
}



for(let i=0; i<5; i++) {
  let str = '';
  for(let j=0; j<5 ; j++) {
    //str += arr[j][5-i-1] + ' '; // 시계반대 90도
    //str += arr[5-i-1][5-j-1] + ' '; // 시계반대 180도
    str += arr[5-j-1][i] + ' '; // 시계반대 270도
  }

  console.log(str);
}


// loop
console.log('[loop]');
function sumLoop(num) {
  let sum = 0;
  for(let i=1; i<=num; i++) {
    for(let j=1; j<=i; j++) {
      sum += j;
    }
  }
  
  console.log(sum);
}

sumLoop(10000);


// recursive
console.log('[recursive]');
function sumRe(num) {
  if(num == 1)
    return 1;

  return num + sumRe(num-1);
}

console.log(sumRe(10000));


// loop + recursive
console.log('[loop + recursive]');
function sumLoopRe(num) {
  let sum = 0;
  for(let i=1; i<=num; i++) {
    sum += sumRe(i);
  }
  
  console.log(sum);
}

sumLoopRe(10000);


// forEach
console.log('[forEach]');
arr.forEach( item => {
  console.log(item); // item은 arr[인덱스]
});

// for of
console.log('[for of]');
for(let x of arr) {
  console.log(x); // x는 arr[인덱스]
}

// for in
console.log('[for in]');
for(let i in arr) {
  console.log(i); // i는 인덱스(0~배열길이-1)
}