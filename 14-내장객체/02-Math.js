/**
 * Math
 * 수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체
 */
/**(1) 주어진 값 중에서 최대값 (파라미터 수 제한 없음) */
var max = Math.max(100, 123, 456, 789, 1000);
console.log("최대값: " + max);

/**(2) 주어진 값 중에서 최소값 (파라미터 수 제한 없음) */
var min = Math.min(100, 123);
console.log("최소값: " + min);

/** (3) 소수점 반올림 */
var num1 = 3.7146;
console.log("소수점 반올림: " + Math.round(num1));

/** (4) 소수점 올림과 내림 */
console.log("소수점 올림: " + Math.ceil(num1));
console.log("소수점 내림: " + Math.floor(num1));

/** (5) 절대값을 반환 */
var num2 = -123;
console.log("절대값: " + Math.abs(num2));

/** (6) 0~1 범위의 난수 발생 */
console.log("난수: " + Math.random());

/** 두 수 사이의 난수를 리턴하는 함수 */
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

/** 함수의 결과 확인 */
var rnd = random(0, 9);
console.log("0~9 사이의 난수: " + rnd);

/** 함수의 응용 >> 5자리 인증번호 생성 */
var auth = "";
for (var i=0; i<5; i++) {
    // 문자열과 숫자의 결합은 문자열 결합과 같다.
    auth += random(0, 9);
}
console.log("인증번호: " + auth);