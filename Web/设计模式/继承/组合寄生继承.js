function f(subType, superType) {
    const fn = function () {};
    fn.prototype = new superType();
    fn.constructor = subType;
    subType = new fn();
}