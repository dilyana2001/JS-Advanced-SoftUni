class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        let aPoints = Math.abs(b.x - a.x)
        let bPoints = Math.abs(b.y - a.y)
        return Math.sqrt(aPoints ** 2 + bPoints ** 2)
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));