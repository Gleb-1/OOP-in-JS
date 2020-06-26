let instance = new Validate('');
console.log(instance);

console.log(Validate.isNumber(''));
console.log(Validate.isInt(6.1));
console.log(Validate.isFloat(6));
console.log(Validate.isChar('s'));
console.log(Validate.isString(''));
console.log(`isBoolean ${Validate.isBoolean('')}`);
console.log(`isArray ${Validate.isArray([''])}`);
console.log(Validate.toMoney('11.10001'));
