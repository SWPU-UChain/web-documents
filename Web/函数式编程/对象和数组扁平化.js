Array.prototype.flat = function () {
    const newArr = [];
    const flat = function (arr) {
        for (let i = 0; i < arr.length; i ++) {
            if (Object.prototype.toString.call(arr[i]) === '[object Array]') {
                flat(arr[i]);
            }
            else {
                newArr.push(arr[i]);
            }
        }
    };
    flat(this);
    return newArr;
};

const arr = [1, 2, 3, [2, 3, 4, 5], 8, [null, [undefined, null]]];
console.log(arr.flat());

Object.prototype.flat = function () {
    const newObject = {};
    const set = new Set();
    const flat = function (object) {
        for (let key in object) {
            if (Object.prototype.toString.call(object[key]) === '[object Object]') {
                set.add(object[key]);
                flat(object[key]);
            }
            else {
                newObject[key] = object[key];
            }
        }
    }
    flat(this);
    return newObject;
};

console.log({a: 1, b: {c: 2, d: null, e: {f: 3}}, g: 4}.flat());