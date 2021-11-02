/** 문자열 처리 */

// 변수 형식으로 문자열 만들기
const str1 = "Hello World";
console.log(str1);

// 객체 생성 방식으로 문자열 만들기
const str2 = new String("Hello Javascript");
console.log(str2);

/**
 * 문자열 변수는 그 자체가 String 클래스의 객체이다.
 * 모든 문자열 변수는 String 클래스가 제공하는 프로퍼티와 메서드를 포함한다.
 * -> 문자열 변수 안에서 특정 정보를 추출하거나 변환하는 기능 
 * --> 문자열 파싱
 */

// 기능을 확인하기 위한 문자열의 선언
const msg = "Life is short, You need Javascript.";
console.log("문자열 : " + msg);

// 문자열의 글자 수를 가져온다.
const len = msg.length;
console.log("문자열의 길이 : " + len);

// 파라미터로 설정된 위치의 글자를 리턴한다.
const str2nd = msg.charAt(2);
console.log("두번째 글자 : " + str2nd);

// 파라미터로 전달된 내용이 처음 나타나는 위치를 리턴한다.
const p1 = msg.indexOf("f");
console.log("`f`가 처음 나타나는 위치 : " + p1);

// 찾지 못할경우 -1을 반환함.
console.log("`z`가 처음 나타나는 위치 : " + msg.indexOf("z"));

// 단어나 문장으로 검색할 경우 일치하는 내용이 시작되는 첫 글자의 위치를 반환
console.log("`short`가 처음 나타나는 위치 : " + msg.indexOf("short"));

// indexOf에 파라미터가 두 개인 경우,
// 두 번째 숫자 값은 첫 번째 파라미터의 글자를 찾기 시작하는 위치를 의미한다.
const p2 = msg.indexOf("i");
const p3 = msg.indexOf("i", p2+1);
console.log("`i`가 첫 번째로 나타나는 위치 : " + p2);
console.log("`i`가 두 번째로 나타나는 위치 : " + p3);

// 파라미터로 전달된 글자가 마지막으로 나타나는 위치를 리턴한다.
// 단 이 위치를 문자열의 끝에서 부터 세는 것이 아니라 문자열의 처음부터 센다.
// 찾지 못할 경우 -1을 반환.
const p4 = msg.lastIndexOf("a");
console.log("`a`의 마지막 위치 : " + p4);

// 응용
if (msg.indexOf("Hello") > -1) {
    console.log("Hello가 포함됨");
} else {
    console.log("Hello가 포함되지 않음.");
}

// 잘라내기 위한 시작 위치와 끝 위치를 파라미터로 설정한다.
// 지정된 끝 위치의 직전 글자까지만 잘라낸다.
const substring1 = msg.substring(0, 13);
console.log("문자열 자르기 : " + substring1);

// 두 번째 파라미터가 없을 경우 지정된 위치부터 끝까지 자른다.
const substring2 = msg.substring(15);
console.log("문자열 자르기 : " + substring2);

// 모든 글자를 대문자로 변환한다.
const up = msg.toUpperCase();
console.log("모든 글자의 대문자 변환 : " + up);

// 모든 글자를 소문자로 변환한다.
const low = msg.toLowerCase();
console.log("모든 글자의 소문자 변환 : " + low);