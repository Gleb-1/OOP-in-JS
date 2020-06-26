class Test2 {
  set testProp(a) {
    if (a == '') {
      return false;
    }
    this._testProp = a;
    return a;
  }

  setTestProp(a) {
    if (a == '') {
      return false;
    }
    this._testProp = a;
    return a;
  }

  get testProp() {
    return this._testProp;
  }
}

const simple2 = new Test2();

const test2 = new Test2();
// console.log(test2.setTestProp('asas'));
// console.log((test2.testProp = '12')); // set
// console.log(test2.testProp); // get
// console.log(test2);
