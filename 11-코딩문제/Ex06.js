const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];
let count = 0;

for (let i=0; i<price.length; i++) {
    // i번째에 대한 총금액을 구한다.
    const sum = price[i] * qty[i];

    if (sum >= 80000) {
        count++;
    }
}

console.log("무료배송 항목: " + count + "건");