"use strict";   // 엄격모드 적용 --> ES6가 등장하면서 함께 추가된 ES5의 변경사항을 활성화 시킴

// 한 줄만 가능한 주석~!!
// 여러 줄은 슬래시 두개를 계속 사용해야 함.
console.group("group1");
console.log("안녕하세요. Javascript1");
console.log("안녕하세요. Javascript2");
console.log("안녕하세요. Javascript3");
console.groupEnd();

console.group("group2");                // 출력하는 내용을 그룹으로 묶음
console.log("안녕하세요. Javascript4");
console.group("group2-1");
console.log("안녕하세요. Javascript5");
console.log("안녕하세요. Javascript6");
console.groupEnd();
console.groupEnd();                     // 그룹으로 묶기 끝!!