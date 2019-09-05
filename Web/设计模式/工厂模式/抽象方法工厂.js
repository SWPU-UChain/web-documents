function f(child ,superType) {
    if(typeof this[superType] === 'function') {
        const fn = function () {};
        fn.prototype = new this[superType];
        fn.constructor = child;
        child.prototype = new fn();
    }
}
f.say = function(name) {
    this.name = name;
};
f.say.prototype = {
    getName: function () {
        console.log(this.name);
    }
};