//way 1 :
function removeSame1(arr) {
    const set = new Set();
    arr.forEach(item => {
       set.add(item);
    });
    return [...set];
}

//way 2 :
function removeSame2(arr) {
    const same = {};
    arr.forEach(item => {
        same[Json.stringify(item)] = item;
    });
    return Object.keys(same).map(key => {
        return same[key];
    })
}

console.log();