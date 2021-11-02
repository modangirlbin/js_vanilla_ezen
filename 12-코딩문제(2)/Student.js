class Student {
    constructor() {
        this._name = null;
        this._kor = null;
        this._eng = null;
        this._math = null;
    }

    set name(value) { this._name = value; }
    get name() { return this._name; }

    set kor(value) { this._kor = value; }
    get kor() { return this._kor; }

    set eng(value) { this._eng = value; }
    get eng() { return this._eng; }

    set math(value) { this._math = value; }
    get math() { return this._math; }


    getTotal() {
        return this.kor + this.math + this.eng;
    }

    getAverage() {
        return this.getTotal() / 3;
    }
}

const s1 = new Student();
s1.name = "민수";
s1.kor = 92;
s1.math = 89;
s1.eng = 76;

console.group(s1.name)
console.log("총점: " + s1.getTotal());
console.log("평균: " + s1.getAverage().toFixed(2));
console.groupEnd();


const s2 = new Student();
s2.name = "수영";
s2.kor = 82;
s2.math = 98;
s2.eng = 85;

console.group(s2.name)
console.log("총점: " + s2.getTotal());
console.log("평균: " + s2.getAverage().toFixed(2));
console.groupEnd();


const s3 = new Student();
s3.name = "지수";
s3.kor = 90;
s3.math = 82;
s3.eng = 73;

console.group(s3.name)
console.log("총점: " + s3.getTotal());
console.log("평균: " + s3.getAverage().toFixed(2));
console.groupEnd();

for (let key in s2) {
    console.log(key);
    console.log(s2[key]);
}