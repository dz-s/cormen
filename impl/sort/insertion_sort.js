'use strict';
//@flow
/**
 * 
 * @param {*Number Array} array 
 */
const insertion_sort = (arr: number[]) => {
    let key: number = 0; 
    let j: number = 0;
    for (let i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;        
    }
};

export { insertion_sort }


