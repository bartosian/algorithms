function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let position = i,
            tmp = arr[i]

        while(position > 0 && arr[position - 1] > tmp) {
            arr[position] = arr[position - 1]
            position -= 1
        }
        
        arr[position] = tmp
    }

    return arr
}

function intersection(arr, arr2) {
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr[i] == arr2[j]) {
                result.push(arr[i]);
                break;
            }
        }
    }

    return result;
}

console.log(intersection([1, 2, 3,4], [4, 3, 5, 6]));