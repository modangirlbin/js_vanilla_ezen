/** Q1 - StudCard 클래스 */
class StudCard {
    // 생성자
    constructor() {
        this._num = null;
        this._kind = null;
    }

    // getter, setter
    get num() {
        return this._num;
    }

    set num(value) {
        if (value >= 1 && value <= 12) {
            this._num = value;
        }
    }

    get kind() {
        return this._kind;
    }

    set kind(value) {
        // if (value == 0 || value == 1 || value == 2 || value == 3) {
        //     this._kind = value;
        // }

        switch (value) {
            case 0:
            case 1:
            case 2:
            case 3:
                this._kind = value;
                break;
        }
    }
}

/** Q2 */
// 12칸으로 구성된 배열
const cards = new Array(12);

for (let i=0; i<cards.length; i++) {
    cards[i] = new Array(4);
}

for (let i=0; i<cards.length; i++) {
    for (let j=0; j<cards[i].length; j++) {
        cards[i][j] = new StudCard();
        cards[i][j].num = i+1;
        cards[i][j].kind = j;
    }
}

console.log(cards);