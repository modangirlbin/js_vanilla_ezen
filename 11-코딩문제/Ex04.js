const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];
let money = 0;

for (let i=0; i<price.length; i++) {
    money += price[i] * qty[i];
}

console.log("전체 결재 금액: " + money + "원");