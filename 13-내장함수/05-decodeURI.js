/**
 * decodeURI(string)
 *
 * encodeURI로 변환된 문자열을 원래의 문자열로 해석한다.
 */

var set1 = ';,/?:@&=+$#'; // 예약 문자
var set2 = "-_.!~*'()"; // 비예약 표식
var set3 = 'ABC abc 123'; // 알파벳 및 숫자, 공백
var set4 = "자바스크립트"

var enc1 = encodeURI(set1);
var enc2 = encodeURI(set2);
var enc3 = encodeURI(set3);
var enc4 = encodeURI(set4);

console.log(decodeURI(enc1));
console.log(decodeURI(enc2));
console.log(decodeURI(enc3));
console.log(decodeURI(enc4));
