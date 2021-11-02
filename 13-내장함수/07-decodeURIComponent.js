/**
 * decodeURIComponent(string)
 *
 * encodeURIComponent()로 인코딩된 문자열을 원래의 문자열로 해석한다.
 */

var set1 = ';,/?:@&=+$#'; // 예약 문자
var set2 = "-_.!~*'()"; // 비예약 표식
var set3 = 'ABC abc 123'; // 알파벳 및 숫자, 공백
var set4 = '자바스크립트';

var enc1 = encodeURIComponent(set1);
var enc2 = encodeURIComponent(set2);
var enc3 = encodeURIComponent(set3);
var enc4 = encodeURIComponent(set4);

console.log(decodeURIComponent(enc1));
console.log(decodeURIComponent(enc2));
console.log(decodeURIComponent(enc3));
console.log(decodeURIComponent(enc4));
