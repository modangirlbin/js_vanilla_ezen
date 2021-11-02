/** 별찍기 */
/*
- i가 0일때 7회를 수행하기 위해서 `j < 7`
- i가 1일때 6회를 수행하기 위해서 `j < 6`
- i가 2일때 5회를 수행하기 위해서 `j < 5`
- i가 3일때 4회를 수행하기 위해서 `j < 4`
- i가 n일때 7-i회를 수행하기 위해서 `j < 7-i`
*/
for (let i=0; i<7; i++) {       // 바깥의 반복문이 "행"을 담당 --> 7개의 행이 생성된다.

    let str = "";

    for (let j=0; j<7-i  ; j++) { // 안쪽의 반복문이 "열"을 담당
        str += "*";
    }

    console.log(str);

}