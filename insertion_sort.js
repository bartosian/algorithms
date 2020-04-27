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

console.log(insertionSort([4, 1, 2, 7, 4, 3]))