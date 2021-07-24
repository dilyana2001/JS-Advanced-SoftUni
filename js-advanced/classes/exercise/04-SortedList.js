class List {
    constructor(list = []) {
        this.list = list.sort((a, b) => a - b);
        this.size = this.list.length;
    }
    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size++;
        return;
    }
    remove(index) {
        if (index >= 0 && index < this.list.length) {
            this.list.splice(index, 1);
            this.size--;
            return;
        } else {
            throw new Error('Invalid!')
        }
    }
    get(index) {
        if (index >= 0 && index < this.list.length) {
            return this.list[index];
        } else {
            throw new Error('Invalid!')
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)