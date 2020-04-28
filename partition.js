function swap(arr, leftPointer, rightPointer) {
    let temp = arr[leftPointer];
    arr[leftPointer] = arr[rightPointer];
    arr[rightPointer] = temp;
}


function partition(arr, leftPointer, rightPointer) {
    let pivotId = rightPointer,
        pivot = arr[rightPointer];

    rightPointer -= 1;    

    
    while(true) {
        while(arr[leftPointer] < pivot) {
            leftPointer += 1;
        }

        while(arr[rightPointer] > pivot) {
            rightPointer -= 1;
        }

        if(leftPointer >= rightPointer) {
            break;
        }

        swap(arr, leftPointer, rightPointer);
    }

    swap(arr, leftPointer, pivotId);

    return arr;
}