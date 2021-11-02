const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];
let money = 0;

for (let i=0; i<price.length; i++) {
    // i번째에 대한 총금액을 구한다.
    const sum = price[i] * qty[i];

    if (money < sum) {
        money = sum;
    }
}

console.log("가장 높은 상품금액: " + money + "원");