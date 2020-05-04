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

function jumpingOnClouds(c) {
    let cloudslength = c.length - 1,
        jumpCount = 0,
        currentCloud = 0;

    while(cloudslength) {
        let cloud = c[currentCloud + 2];
        if(cloud !== undefined && cloud !== 1) {
            currentCloud += 2;
            cloudslength -= 2;
        } else {
            currentCloud += 1;
            cloudslength -= 1;
        }

        jumpCount += 1;
    }

    return jumpCount;
}

function repeatedString(s, n) {
    let repeatStringCount = Math.floor(n / s.length),
        reminderOfString = n % s.length,
        countPerString = 0,
        result = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] == 'a') countPerString++;
    }

    result = repeatStringCount * countPerString;
 
    for(let i = 0; i < reminderOfString; i++) {
        if(s[i] == 'a') result++;
    }

    return result;
}


// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0

function hourglassSum(arr) {
    let maxSum = undefined;

    for(let i = 0; i < 4; i++) {
        let nextrow = arr[i];

        for(let j = 0; j < 4; j++) {
            let nextSum = nextrow[j] + nextrow[j + 1] + nextrow[j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            if(maxSum !== undefined && (nextSum > maxSum)) {
                maxSum = nextSum;
            } else if(maxSum == undefined){
                maxSum = nextSum;
            }
        }
    }
    return maxSum;
}

function rotLeft(a, d) {
    let rotatedArr = [];

    for(let i = 0; i < a.length; i++) {
        let newIdx = i - d;
        if(newIdx < 0) {
            newIdx = a.length + newIdx;
        } 
        rotatedArr[newIdx] = a[i]; 
    }

    return rotatedArr;
}

console.log(rotLeft([1, 2, 3, 4, 5], 3));