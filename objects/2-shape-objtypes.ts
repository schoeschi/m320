type Rectangle = {
    width: number;
    height: number;
}

type Square = {
    side: number;
}

type Circle = {
    radius: number;
}

type Shape = Rectangle | Square | Circle;

function rectangleCircumference(r: Rectangle)

let r1: Rectangle = { height: 1, width: 7 };
let r2: Rectangle = { height: 2, width: 1 };
let s1: Square = { side: 32 };
let s2: Square = { side: 4 };
let c1: Circle = { radius: 1 };
let c2: Circle = { radius: 876 };