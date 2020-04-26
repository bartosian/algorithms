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