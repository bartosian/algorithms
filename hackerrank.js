function sockMerchant(n, ar) {
    let mapArr = [],
        countPair = 0;

    
    for(let i = 0; i < n; i++) {
        if(mapArr[ar[i]]) {
            countPair += 1;
            mapArr[ar[i]] = 0;           
        } else {
            mapArr[ar[i]] = 1;
        }
    }

    return countPair;
}

// 8
// UDDDUDUUUDDDUDUU

function countingValleys(n, s) {
        let prevLevelCounter = 0,
            currentLevelCounter = 0,
            vallCounter = 0;

    for(let i = 0; i < n; i++) {
        if(currentLevelCounter == -1 && prevLevelCounter == 0) {
            vallCounter += 1;
        }

        prevLevelCounter = currentLevelCounter;
        currentLevelCounter += (s[i] == "D" ? -1 : 1);
    }
    
    return vallCounter;
}

console.log(countingValleys(16, "UDDDUDUUUDDDUDUU"));