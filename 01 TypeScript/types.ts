// let x:number = 123;
//
// console.log(x);

// interface ICalc {
//     sum: (num1: number, num2: number) => void;
//     multiply: (num1: number, num2: number) => number;
// }
//
// class Calc implements ICalc {
//     sum(num1: number, num2: number): number {
//         return num1 + num2;
//     }
//     multiply(num1: number, num2: number): number {
//         return num1 * num2;
//     }
// }
//
// let calc = new Calc();
// calc.sum(4,3);

interface IName {
    first: string,
    last: string
}

function setName(name: IName): void {
    console.log(name.first + " " + name.last);
}
setName({
    first: "John",
    last: "Doe"
});