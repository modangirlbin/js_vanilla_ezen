"use strict";

/** 
 * 형변환 - 한번 결정된 변수의 데이터 타입을 다른 종류로 변경하는 처리
 */

/** 1) 문자열로 변환 */
let value = 1;
console.log(typeof value);

// 문자열 이외의 데이터 타입과 문자열을 더하면 결과는 문자열로 변환
const k = value + "Hello";
console.log(k);
console.log(typeof k);

// 빈 문자열과 덧샘을 하면 어떤 값이든 string으로 변환된다.
value += "";
console.log(value);
console.log(typeof value);

// 정석
let value2 = 123
console.log(typeof value2);

// String 클래스의 생성자에 전달되는 파라미터는 해당 내용을 담는 문자열 객체를 생성한다.
value2 = String(value2);
console.log(typeof value2);


/** 2) 숫자형으로 변환 */

// 문자열로 덧셈을 제외한 연산식을 구성할 때 문자열이 숫자로 자동 변환된다.
const a = "6";
const b = "3";
console.log(a + b);
console.log(a / b);
console.log(a * b);
console.log(a - b);

// Number() 함수를 사용
const n1 = Number(a);
console.log(n1);
console.log(typeof n1);

// parseInt() 함수를 사용
const n2 = parseInt(a);
console.log(n2);
console.log(typeof n2);

// parseFloat() 함수를 사용
const n3 = parseFloat(a);
console.log(n3);
console.log(typeof n3);

// 차이점 비교
console.log(Number("5.3"));     // 변경할 값이 정수->정수, 실수->실수로 변환함
console.log(parseInt("5.3"));   // 변경할 값을 정수로만 변환함
console.log(parseFloat("5.3")); // 변경할 값을 실수로만 변환함 (단, 소수점 이하 값이 0인 경우만 정수로 반환)


// 예외상황
// 숫자가 아닌 값이므로 Not a Number를 의미하는 NaN이 반환됨.
const s = "a";
console.log(Number(s));
console.log(parseInt(s));
console.log(parseInt(s));

// 숫자형 변환시 적용되는 규칙
// undefined	-> NaN
console.log(Number(undefined));
// null	-> 0
console.log(Number(null));
// true -> 1
console.log(Number(true));
// false -> 0
console.log(Number(false));
// 공백을 제거하고 숫자만 변환
console.log(Number("       123       "));
// 공백을 제거하고 0 변환
console.log(Number("             "));


/** 논리형으로 변환 */
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean(123));      // 0이 아닌 모든 수는 true
console.log(Boolean("hello"));  // 비어있지 않으므로 true
console.log(Boolean(""));       // 비어있으므로 false

console.log(Boolean("0"));      // 비어있지 않으므로 true
console.log(Boolean("     "));  // 비어있지 않으므로 true