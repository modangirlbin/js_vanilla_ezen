
var data = new Array(6);

for (let i=0; i<data.length; i++) {
    data[i] = [1,0,1,0,1];
}

console.log(data);

// 1씩 증가할 값
let counter = 1;

for (let i=0; i<data.length; i++) {
    for (let j=0; j<data[i].length; j++) {
        data[i][j] = 1 - data[i][j];
    }
}

console.log(data);