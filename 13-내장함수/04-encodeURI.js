/**
 * encodeURI(string)
 *
 * 주어진 문자열을 URL에 포함시키기에 적절한 형태로 변환(=인코딩)하는 처리
 * 인코딩하지 않는 문자.
 *   A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #
 */

var set1 = ';,/?:@&=+$#'; // 예약 문자
var set2 = "-_.!~*'()"; // 비예약 표식
var set3 = 'ABC abc 123'; // 알파벳 및 숫자, 공백
var set4 = "자바스크립트"

console.log(encodeURI(set1)); // ;,/?:@&=+$#
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // ABC%20abc%20123 (공백은 %20으로 인코딩)
console.log(encodeURI(set4));
