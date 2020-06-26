class Test4 extends Test2 {
  set testProp(a) {
    this._testProp = a * 10;
  }

  get testProp() {
    return this._testProp;
  }

  testValue() {
    if (this._testProp <= 100) {
      return false;
    }
    return this._testProp;
  }
}

let test4 = new Test4();

let instanceTest4 = new Test4();
console.log((instanceTest4.testProp = 11)); // да можно переназначать наследуемые сеттеры
// console.log(instanceTest4.testProp); // get
console.log(instanceTest4.testValue());
