//Напишите функцию reverseAndNegative(arr), которая принимает массив 
//чисел и возвращает перевернутый отрицательный массив.

const arr = [1,2,-3,3,2,-4]
export function reverseAndNegative (arr) {
    let arrNeg = [];
    let arrNegReverse = [];
    for (let i=0; i<arr.length; i++) {
        arrNeg[i] = -arr[i];
    }
    arrNegReverse = arrNeg.reverse();
    return arrNegReverse;
}
//console.log (reverseAndNegative (arr));