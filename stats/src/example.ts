// const addOne = (a: number, b: number): number => {
//     return a + b;
// }

// class HoldNumber {
//     data: number = 0;
// }
//
// class HoldString {
//     data: string = 'cscs'
// }
//
// const holdNumber = new HoldNumber();
// holdNumber.data = 33;


// class HoldAnything<T> {
//     data: T;
//     constructor(data: T) {
//         this.data = data;
//     }
// }
//
// const holdNumber = new HoldAnything<number>(5)
// holdNumber.data = 5;
//
// const holdString = new HoldAnything<string>('d')
// holdString.data = 'dd';



// Compositin misconseption

// const rectangular  = (state) => {
//     return {
//         area: () =>{
//             return state.height * state.width;
//         }
//     }
// }
//
// const openable = (state) => {
//     return {
//         toggleOpen: () => {
//             state.opened = !state.opened;
//         }
//     }
// }
//
// const buildRectangleWindow = (state) => {
//     return Object.assign(state, rectangular(state), openable(state))
// }
//
// const rectangleWindow = buildRectangleWindow({
//     height: 5,
//     width: 7,
//     opened: true
// })