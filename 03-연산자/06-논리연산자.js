/** 1) and */
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

/** 2) and연산 여러 개 사용 */
console.log(true && true && true);
console.log(true && true && false);
console.log(false && false && true);
console.log(false && true && true);

/** 3) or */
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

/** 4) or연산 여러 개 사용 */
console.log(true || true || true);
console.log(true || true || false);
console.log(false || false || true);
console.log(false || true || true);

/** 5) 복합사용 */
// AND가 OR보다 항상 우선한다.
// t || t -> t
console.log(true && true || true);
// t || f -> t
console.log(true && true || false);
// f || t -> t
console.log(false && false || true);
// f || t -> t
console.log(false && true || true);

// t || t -> t
console.log(true || true && true);
// t || f -> t
console.log(true || true && false);
// f || f -> f
console.log(false || false && true);
// f || t -> t
console.log(false || true && true);

/** 6) not */
let success = true;
let fail = !success;
console.log(fail);

let k = 1;
console.log(!k);

let l = 0;
console.log(!l);

let str1 = "Hello World";
console.log(!str1);

let str1 = "";
console.log(!str1);