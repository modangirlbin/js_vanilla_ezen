/** 1) 이상, 이하, 미만, 초과 */
let x = 100;
let y = 50;

let compare1 = x >= y;  // 이상
let compare2 = x > y;   // 초과
let compare3 = x <= y;  // 이하
let compare4 = x < y;   // 미만

console.log(compare1);
console.log(compare2);
console.log(compare3);
console.log(compare4);

/** 2) 같다 */
let a1 = "1";
let a2 = 1;
let a3 = 1.0;
let a4 = true;

console.log(a1 == a2);   // 두 값이 같으므로 결과는 true
console.log(a1 == a3);   // 두 값이 같으므로 결과는 true
console.log(a1 == a4);   // 두 값이 같으므로 결과는 true

console.log(a2 == a3);   // 두 값이 같으므로 결과는 true
console.log(a2 == a4);   // 두 값이 같으므로 결과는 true

console.log(a3 == a4);   // 두 값이 같으므로 결과는 true

console.log(a1 === a2);   // 두 값이 다르므로 결과는 false
console.log(a1 === a3);   // 두 값이 다르므로 결과는 false
console.log(a1 === a4);   // 두 값이 다르므로 결과는 false

console.log(a2 === a3);   // 두 값이 같으므로 결과는 true
console.log(a2 === a4);   // 두 값이 다르므로 결과는 false

console.log(a3 === a4);   // 두 값이 다르므로 결과는 false

/** 3) 다르다 */
let b1 = "1";
let b2 = 1;
let b3 = 1.0;
let b4 = true;

console.log(b1 != b2);   // 두 값이 같으므로 결과는 false
console.log(b1 != b3);   // 두 값이 같으므로 결과는 false
console.log(b1 != b4);   // 두 값이 같으므로 결과는 false

console.log(b2 != b3);   // 두 값이 같으므로 결과는 false
console.log(b2 != b4);   // 두 값이 같으므로 결과는 false

console.log(b3 != b4);   // 두 값이 같으므로 결과는 false

console.log(b1 !== b2);   // 두 값이 다르므로 결과는 true
console.log(b1 !== b3);   // 두 값이 다르므로 결과는 true
console.log(b1 !== b4);   // 두 값이 다르므로 결과는 true

console.log(b2 !== b3);   // 두 값이 같으므로 결과는 false
console.log(b2 !== b4);   // 두 값이 다르므로 결과는 true

console.log(b3 !== b4);   // 두 값이 다르므로 결과는 true