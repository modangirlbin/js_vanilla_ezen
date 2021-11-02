/**
 * Number 객체는 숫자 값으로 작업할 수 있게 해주는 래퍼(wrapper) 객체.
 * Number 객체는 Number() 생성자를 사용하여 만든다.
 * 일반 숫자 자료형은 Number() 함수를 사용해 생성한다.
 */

// 객체의 생성
var a = new Number('123'); // a === 123은 false
console.log(typeof a); // true

// Number() 함수를 통해 반환받는 값은 객체가 아닌 일반 숫자
var b = Number('123'); // b === 123은 true
console.log(typeof b); // false

/** (정적)속성 */
// 표현 가능한 가장 큰 양수.
console.log(Number.MAX_VALUE);

// 표현 가능한 가장 작은 양수. 즉, 0보다 크지만 0에 가장 가까운 양수.
console.log(Number.MIN_VALUE);

// "숫자가 아님"을 나타내는 특별한 값.
console.log(Number.NaN);

/** (정적)메서드 */
// 주어진 값이 NaN인지 확인 (isNaN과 동일)
// 숫자 변환이 불가능하면 true, 가능하면 false
console.log(Number.isNaN('123'));

// 주어진 값이나 수식이 무한수 인지 확인
// 유한수인 경우 true, 무한수인 경우 false
console.log(Number.isFinite(123));
console.log(10/3);
console.log(Number.isFinite(10/3));

// 주어진 값이 정수 인지 확인
console.log(Number.isInteger('123'));
console.log(Number.isInteger(123));

// 내장 함수 parseFloat()와 동일
console.log(Number.parseFloat('123'));

// 내장 함수 parseInt()와 동일
console.log(Number.parseInt('123'));