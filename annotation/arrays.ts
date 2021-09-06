const colors: string[] = ['red','blue','white'];

const dates = [new Date(), new Date()];

const fruitByColor = [
    ['tomato'],
    ['apple'],
    ['lemon']
];

const fruitByColor1: string[][] = [

]


//help with inference when wxtractiong values

let color = colors[0];
let color1 = colors.pop();


const vals = colors.map((color: string): string => {
    return color
})


const importantDays: (Date | string)[] = [new Date(), '2021-11-11']