function safe(type, content) {
  if(!(this instanceof safe)) {
    console.log('warning: the object is not instanceof this function');
    return new safe(type, content);
  }
  else {
    return new this[type](content);
  }
}
safe.prototype.say = function (content) {
  console.log(content);
};

const say = new safe('say', '你是谁啊');
const say2 = safe('say', '你是谁啊');
