class Validate {
  constructor(a) {
    this.a = a;
  }
  static isNumber(someParameter) {
    if (typeof someParameter == 'number') return true;
    return false;
  }
  static isInt(someParameter) {
    if (Number.isInteger(someParameter)) return true;
    return false;
  }
  static isFloat(someParameter) {
    if (Number.isInteger(someParameter)) return false;
    return true;
  }
  static isChar(someParameter) {
    if ((typeof someParameter === 'string') & (someParameter.length == 1)) return true;
    return false;
  }
  static isString(someParameter) {
    if (typeof someParameter === 'string') return true;
    return false;
  }
  static isBoolean(someParameter) {
    if (someParameter === true || someParameter === false) return true;
    return false;
  }
  static isArray(someParameter) {
    return Array.isArray(someParameter);
  }
  static toMoney(someParameter) {
    let num = someParameter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    if (someParameter.includes('.')) return num;
    return num + '.00';
  }
}
