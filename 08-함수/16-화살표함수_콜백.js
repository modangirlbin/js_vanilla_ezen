function something(x, y, cb) {
    cb(x, y);
}

// 콜백함수 유형 1 - 직접 함수를 정의함
function myCallback1(a, b) {
    for (let i=a; i < b; i++) {
        console.log(i);
    }
}

something(3, 10, myCallback1);

// 콜백함수 유형 2 - 익명함수 사용
something(10, 15, function(a, b) {
    for (let i=a; i<b; i++) {
        console.log("5 x " + i + " = " + (i*5));
    }
});

// 콜백함수 유형 3 - 익명함수를 화살표 함수로 사용
something(5, 7, (a, b) => {
    for (let i=a; i<b; i++) {
        console.log("7 x " + i + " = " + (i*7));
    }
});

// 함수 로직이 한 줄인 경우 축약된 형태
something(5, 7, (a, b) => {
    console.log(a + b);
});

something(5, 7, (a, b) => console.log(a + b) );