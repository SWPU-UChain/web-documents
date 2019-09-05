//普通单例
const single = {
    getName: function () {

    }
};

//静态变量单例
const single2 = (function () {
    const information = {
        message: ''
    };
    return {
        get: function (name) {
            return information[name] ? information[name] : null;
        }
    }
}());
var message = single2.get('message');

//惰性单例
const lazySingle = (function () {
    let _instance = null;
    function Single() {
        return {
            message: ''
        };
    }
    return function () {
        if(!_instance) {
            _instance = Single();
        }
        return _instance;
    }
}());