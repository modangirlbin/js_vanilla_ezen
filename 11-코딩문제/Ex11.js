// "단가-수량"을 한 세트로 하는 정보들을 배열로 구성하면 2차 배열 형태가 된다.
const inven = [
    [500, 291], [320, 586], [100, 460], [120, 558], [92, 18], [30, 72]
];

let total_price = 0;

for (let i=0; i<inven.length; i++) {
    //console.log(inven[i]);

    const item_price = (inven[i][0]*0.9) * inven[i][1];
    total_price += item_price;
}

console.log("아이템 총 판매가격: " + total_price + "G");