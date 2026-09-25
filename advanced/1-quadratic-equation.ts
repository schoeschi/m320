class QuadraticEquation {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    solve(): number[] {
        const discriminant = this.discriminant();
        const x1 = (-this.b - Math.sqrt(discriminant)) / (2 * this.a);
        const x2 = (-this.b + Math.sqrt(discriminant)) / (2 * this.a);

        if (discriminant < 0) {
            return [];
        } else if (discriminant === 0) {
            return [x1];
        } else {
            return [x1, x2];
        }
    }

    discriminant(): number {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }
}

console.log(new QuadraticEquation(2, 3, -5).solve())
console.log(new QuadraticEquation(1, -2, 1).solve())
console.log(new QuadraticEquation(3, 4, 5).solve())