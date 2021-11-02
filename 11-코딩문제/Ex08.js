const arr = [5, 3, 2, 8, 9];
console.log('before --> ' + arr);

for (let i=0; i<arr.length/2; i++) {
    const tmp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = tmp;
}

console.log('after --> ' + arr);