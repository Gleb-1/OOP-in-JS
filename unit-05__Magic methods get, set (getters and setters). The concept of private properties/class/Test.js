class Test {
  //   constructor() {}
  set testProp(a) {
    this._testProp = a;
  }
  get testProp() {
    return this._testProp;
  }
}

let simply = new Test();

let instance = new Test();
// console.log((instance.testProp = 'asds'));
// console.log(instance);

// console.log('===========================================');
