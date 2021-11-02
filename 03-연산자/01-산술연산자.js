/** 1) 사칙 연산 출력하기 */
const a = 5;
const b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);

/** 2) 연산 결과를 다른 변수에 할당 */
const x = 5;
const y = 3;
const z = x + y - 2;
console.log(z);

/** 3) 나눗셈 주의사항 */
// 일반적인 나눗셈
const myValue1 = 10;
const myValue2 = 4;
console.log(myValue1 / myValue2);

// 나누어 떨어지지 않는 나눗셈
const myValue3 = 4;
const myValue4 = 3;
console.log(myValue3 / myValue4);

/** 4) 문자열 연산 */
// 1) 문자열 끼리의 덧셈
const myString1 = "Hello";
const myString2 = "World";
console.log(myString1 + myString2);

// 2) 문자열과 다른 타입의 덧셈
console.log("안녕하세요." + 123);
console.log("안녕하세요." + true);
console.log("안녕하세요." + null);