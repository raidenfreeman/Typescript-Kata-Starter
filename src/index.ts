export const sum = (a, b) => a + b;

console.log(sum(3, 5));


export class Sum {
    constructor(private sumFn: (a: number, b: number) => number) { }
    public Execute(a: number, b: number): number {
        return this.sumFn(a, b);
    }
}