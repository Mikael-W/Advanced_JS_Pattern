const obj = { num: 2 }
const add = function (num2, num3, num4) { return this.num + num2 + num3 + num4 }
const arr = [3, 4, 5];

//Call
console.log(add.call(obj, 3, 4, 5));

//Apply
console.log(add.apply(obj, arr));

//Bind
let bound = add.bind(obj);
console.log(bound(3, 4, 5));