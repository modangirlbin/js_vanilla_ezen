/**
[반복 회수를 구하기 위한 연산]
1. 원소가 5개일 경우 반복 회수 : 2회
    - 5/2를 연산한다. 나머지는 버리게 되므로 2가 된다.
2. 원소가 6개일 경우 반복 회수 : 3회
    - 6/2를 연산한다.
    
=> 즉 배열의 길이/2 만큼 반복 처리

[반대쪽 위치의 원소 구하기]
=> 배열의길이-i-1
*/

const data = [ 1, 5, 2, 4, 3 ];
console.log(data);


for (let i = 0; i < data.length/2; i++) {
    // 반대쪽 원소의 위치
    const k = data.length - i - 1;

    // i번째 원소와 k번째 원소의 교환
    const tmp = data[i];
    data[i] = data[k];
    data[k] = tmp;
}

console.log(data);