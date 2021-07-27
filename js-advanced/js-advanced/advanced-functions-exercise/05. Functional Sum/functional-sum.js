function add(a) {
    let sum = 0;
    sum += a;

    function innerAdd(b) {
        sum += b;
        return innerAdd;
    }
    innerAdd.toString = () => sum;
    return innerAdd;
}
console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());