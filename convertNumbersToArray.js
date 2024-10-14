// export const digitize = (num) => {
//     return[...String(num)].map(Number).reverse()
// };

export const digitize = (num) => {
    let array1 = Array.from(num.toString()).map(Number);
    return array1.reverse()
    console.log (digitize);
};

