/** 개발자가 직접 정의하는 에러 */

// 에러 객체를 생성
// 생성자 파라미터로 에러의 내용 전달
let err = new Error("이상한 일이 벌어졌습니다.");
console.log(err.name);
console.log(err.message);

// 개발자가 직접 에러를 발생시킬 수 있다.
//throw err;

// 개발자가 발생시키는 에러에 대한 예외처리
try {
    throw err;
} catch (e) {
    console.error(e);
}

console.log("프로그램 종료");




/** 조건문을 사용한 고전적 예외처리 */
function foo(x, y) {
    if (x < 0 && y < 0) {
        return 0;
    }
    return x + y;
}

// 정상호출 상황
console.log(foo(10, 20));
// 비정상 호출 상황
console.log(foo(-1, -2));

// 비정상 상황에 대한 고전적 처리 방법
const k = foo(-1, -2);

// 에러 상황에 대한 대응(메시지 처리)을 함수를 호출하는 곳에서 해야 한다.
if (k == 0) {
    console.log("x 혹은 y가 0보다 작습니다.");
} else {
    console.log(k);
}


/** try~catch와 trow를 이용한 구현 */
function bar(x, y) {
    if (x < 0 && y < 0) {
        throw new Error("x와 y는 0보다 작을 수 없습니다.");
    }
    return x + y;
}

try {
    console.log(bar(-1, -2));
} catch(e) {
    console.log(e.message);
} finally {
    // 에러의 발생여부와 상관없이 무조건 실행되는 구문 (불필요한 경우 생략 가능함)
    console.log("계산완료.")
}
