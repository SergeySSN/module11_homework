//продумать тест-кейсы (успешное/неуспешное выполнение функции);
//продумать корнер-кейсы;
//написать unit-тесты (минимум 3).

import { reverseAndNegative } from "../Module11_homework/Task_3";

describe ('tests for reverseAndNegative', () => {
    const arr1 = [1,2,-3];
    const arr2 = [0,1,2];
    const arr3 = ['1',2,3]
    const arr4 = [0.5,2,3]

    it ('reverseAndNegative (arr1) equal [3,-2,-1]', () => {
        const result = reverseAndNegative(arr1);
        expect (result).toBe([3,-2,-1])
    });

    it ('reverseAndNegative (arr1) equal [3,-2,-1]', () => {
       const result = reverseAndNegative(arr1);
       expect (result).toStrictEqual([3,-2,-1])
       });

    it ('reverseAndNegative (arr2) equal [-2,-1,0]', () => {
       const result = reverseAndNegative(arr2);
       expect (result).toStrictEqual([-2,-1, 0])
       });
    
    it ('reverseAndNegative (arr3) equal [-3,-2,-1]', () => {
        const result = reverseAndNegative(arr3);
        expect (result).toStrictEqual([-3,-2,-1])
        });

    it ('reverseAndNegative (arr4) equal [-3,-2,-0.5]', () => {
        const result = reverseAndNegative(arr4);
        expect (result).toStrictEqual([-3,-2,-0.5])
        });
        

})