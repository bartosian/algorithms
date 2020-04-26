function hasDuplictaes(arr) {
    let existigValues = [];

    for(let i = 0; i < arr.length; i++) {
        if(existigValues[arr[i]] !== undefined) {
            return arr[i]
        } else {
            existigValues[arr[i]] = 1
        }
    }

    return;
}

function bubbleSort(arr) {
    let unchecked_id = arr.length - 1,
        sorted = false;

    while(!sorted) {
        sorted = true;

        for(let i = 0; i <= unchecked_id; i++) {
            if(arr[i] > arr[i + 1]) {
                sorted = false;
                let tmp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = tmp;
            }
        }

        unchecked_id -= 1;
    }    
    
    return arr;
}