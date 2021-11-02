/**
 * encodeURIComponent(string)
 *
 * 알파벳과 숫자및 비예약 표식을 제외한 모든 글자를 URL에 포함시킬 수 있는 문자열로 인코딩한다.
 */

var set1 = ';,/?:@&=+$#'; // 예약 문자
var set2 = "-_.!~*'()"; // 비예약 표식
var set3 = 'ABC abc 123'; // 알파벳 및 숫자, 공백
var set4 = '자바스크립트';

console.log(encodeURIComponent(set1));
console.log(encodeURIComponent(set2));
console.log(encodeURIComponent(set3));
console.log(encodeURIComponent(set4));
