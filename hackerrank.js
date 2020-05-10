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

// 2 1 5 3 4
// 3

function minimumBribes(q) {
    let length = q.length,
        totalBribes = 0;

    for(let i = length - 1; i >= 0; i--) {
       if(q[i] - (i + 1) > 2) {
           console.log("Too chaotic");
       }

       for(let j = Math.max(0, q[i] - 2); j < i; j++) {
           if(q[j] > q[i]) totalBribes++;
       }
    }

    console.log(totalBribes);
}

function solve(meal_cost, tip_percent, tax_percent) {
    let tip_amout = ((tip_percent / 100) * meal_cost);
    let tax_amount = ((tax_percent / 100) * meal_cost);

    return Math.round(meal_cost + tip_amout + tax_amount);
}

function checkMagazine(magazine, note) {
    let map = {},
        magArr = magazine.split(" "),
        noteArr = note.split(" "),
        maglen = magArr.length,
        noteLen = noteArr.length;
    
    if(noteLen > maglen) {
        console.log("No");
        return;
    }

    for(let i = 0; i < maglen; i++) {
        let nextEl = magArr[i];
        if(map[nextEl]) {
            map[nextEl] += 1;
        } else {
            map[nextEl] = 1;
        }
    }
    
    for(let j = 0; j < noteLen; j++) {
        let nextEl = noteArr[j];

        if(map[nextEl]) {
            map[nextEl] -= 1;
        } else {
            console.log("No");
            return;
        }
    }

    console.log("Yes");
}

function twoStrings(s1, s2) {
    for(let i = 0; i < s2.length; i++) {
        if(s1.indexOf(s2[i]) !== -1) {
            return "YES";
        }
    }

    return "NO";

}

function sherlockAndAnagrams(s) {
    let map = {},
        strLen = s.length,
        resultCount = 0;


    for(let i = 0; i < strLen; i++) {
        let nextEl = s[i];

        for(let j = i; j < strLen; j++) {
                let nextComb = (j === i) ? nextEl : nextEl + s[j],
                    sortedComb = (j === i) ? nextComb : nextComb.split("").sort().join("");

                nextEl = nextComb;

                if(map[sortedComb]) {
                    map[sortedComb] += 1;
                } else {
                    map[sortedComb] = 1;
                }

            }

    }
  map = Object.entries(map).filter(val => val[1] > 1);

  for(let [_, count] of map) {
      if(count == 2) {
        resultCount += 1;
      } else if(count > 2) {
          resultCount += count * (count - 1) / 2;
      }
  }
  return resultCount;  
}


function alternatingCharacters(s) {
    let strArr = s.split(""),
        arrLen = strArr.length,
        currentCh = strArr[0],
        delCount = 0;

    for(let i = 1; i < arrLen; i++) {
        if(strArr[i] === currentCh) {
            strArr.splice(i, 1);
            delCount++;
            i--;
        } else {
            currentCh = strArr[i];
        }
    }

    return delCount;
}

function alternatingCharacters(s) {
    let delCount = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1]) {
            delCount++;
        }
    }

    console.log(delCount);
}

function isBalanced(s) {
    let openBrackets = ["[", "(", "{"],
        bracketsMap = {"]":"[", "}":"{", ")":"("},
        arrS = s.split(""),
        stack = [];

    while(arrS.length) {
        let currEl = arrS.shift();
        
        if(openBrackets.includes(currEl)) {
            stack.push(currEl);
        } else {
            let prevEl = stack.pop();

            if(prevEl !== bracketsMap[currEl]) {
                return "NO";
            }
        }
    }

    if(!stack.length) {
        return "YES";
    } else {
        return "NO";
    }
}

function fibonacci(n) {
    if(n === 0) {
        return 0;
    }

    if(n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function countSwaps(a) {
    let unsortedTil = a.length - 1
        sorted = false,
        swaps = 0;

    while(!sorted) {
        sorted = true;

        for(let i = 0; i <= unsortedTil; i++) {
            if(a[i] > a[i + 1]) {
                sorted = false;
                let temp = a[i + 1];
                a[i + 1] = a[i];
                a[i] = temp;
                swaps++;
            }
        }

        unsortedTil--;
    }
    
    console.log(`Array is sorted in ${swaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);
}

class QuickSort {
    constructor(array) {
        this.array = array;
    }

    swap(leftPointer, rightPointer) {
        let temp = this.array[leftPointer];
        this.array[leftPointer] = this.array[rightPointer];
        this.array[rightPointer] = temp;
    }

    partition(leftPointer, rightPointer) {
        let pivotId = rightPointer,
            pivot = this.array[rightPointer];

        rightPointer -= 1;
        
        while(true) {
            while(this.array[leftPointer] <= pivot) {
                leftPointer += 1;
            }

            while(this.array[rightPointer] > pivot) {
                rightPointer -= 1;
            }

            if(leftPointer >= rightPointer) {
                break;
            } else {
                this.swap(leftPointer, rightPointer);
            }
        }

        this.swap(leftPointer, pivotId);

        return leftPointer;
    }

    run(leftPointer, rightPointer) {
        if((rightPointer - leftPointer) <= 0) {
            return;
        }

        let pivot = this.partition(leftPointer, rightPointer);

        this.run(leftPointer, pivot - 1);
        this.run(pivot + 1, rightPointer);
    }
}

function maximumToys(prices, k) {
    let priceLen = prices.length,
        sortedArr = prices.sort((a,b) => a - b),
        numOfToys = 0,
        totalCost = 0;
    
    for(let i = 0; i < priceLen; i++) {
        if((totalCost + sortedArr[i]) > k) {
            break;
        } else {
            totalCost += sortedArr[i];
            numOfToys++;
        }
    }

    return numOfToys;

}

function main(n) {
    for(let i = 1; i <= 10; i++) {
        console.log(`n x ${i} = ${n * i}`);
    }
}

function makeAnagram(a, b) {
    let aSorted = a.split("").sort().join(""),
        bSorted = b.split("").sort().join(""),
        alen = a.length,
        blen = b.length,
        totalNum = 0,
        lowerLen,
        biggerLen,
        lowerStr,
        biggerStr;

    if(alen < blen) {
        lowerLen = alen;
        biggerLen = blen;
        lowerStr = aSorted;
        biggerStr = bSorted;

    } else if(alen >= blen) {
        lowerLen = blen;
        biggerLen = alen;
        lowerStr = bSorted;
        biggerStr = aSorted;
    } 
    
    console.log(lowerLen);
    console.log(biggerLen);
    console.log(lowerStr);
    console.log(biggerStr);

    for(let i = 0; i < lowerLen; i++) {
        let nextSubstr = lowerStr.split("").reverse().join("").substring(0, lowerLen - i),
            nextSubLen = nextSubstr.length;
        if(biggerStr.includes(nextSubstr)) {
            totalNum = biggerLen + lowerLen - 2 * nextSubLen;
            break;
        }
    }

    console.log(totalNum);

}


function makeAnagram(a, b) { 
    let totalNum = 0;


}

function simpleArraySum(ar) {
    return ar.reduce((acc, nextVal) => acc + nextVal, 0);
}

function processData(input) {
        let even = [],
            odd = [],
            inputArr = input.split("\n"),
            totalNum = + inputArr[0].trim();

        for(let i = 1; i < totalNum + 1; i++) {
            let nextStr = inputArr[i].trim(),
                strLen = nextStr.length;

            for(let j = 0; j < strLen; j++) {
                if(j == 0 || !(j % 2)) {
                    even.push(nextStr[j]);
                } else {
                    odd.push(nextStr[j]);
                }
            }

            console.log(`${even.join("")} ${odd.join("")}`);
            even = [];
            odd = [];
        }
} 



function extraLongFactorials(n) {   
    let map = {};

    if(n == 1 || n == 0) {
        return 1;
    }

    if(map[n]) return map[n];

    map[n] = BigInt(extraLongFactorials(n - 1) * n);

    return map[n].toString(10);
}

function aVeryBigSum(ar) {
    let resultn = 0n;

    for(let i = 0; i < ar.length; i++) {
        resultn += BigInt(ar[i]);
    }

    return resultn.toString(10);
}

let arr = [1, 4, 3, 2];

const result = arr.reverse().reduce((a, b) => {
    return a + " " + b;
    }, "").trim();

function compareTriplets(a, b) {
    let count = [0, 0];

    for(let i = 0; i < 3; i++) {
        if(a[i] > b[i]) {
            count[0]++;
        } else if(a[i] < b[i]) {
            count[1]++;
        }
    }

    return count;
}

function miniMaxSum(arr) {
    let sortedArr = arr.sort((a,b) => a - b),
        minSum = 0,
        maxSum = 0;

    minSum = sortedArr.slice(0, 4).reduce((a, b) => a + b, 0);    
    maxSum = sortedArr.slice(1, 5).reduce((a, b) => a + b, 0); 

    console.log(`${minSum} ${maxSum}`);
}

function timeConversion(s) {
    let parsedTime = s.split(":"),
        hours = parsedTime[0],
        type = parsedTime[2].substring(2);

    hours = type === "AM" ? hours === "12" ? "00" : hours : parseInt(hours) !== 12 ? String(12 + parseInt(hours)) : hours;

    console.log(`${hours}:${parsedTime[1]}:${parsedTime[2].substring(0, 2)}`);

}

function birthdayCakeCandles(arr) {  
    let sortedArr = arr.sort((a, b) => a - b),
        tallest = sortedArr[sortedArr.length - 1],
        totalCount = 1;

    for(let i = sortedArr.length - 2; i >= 0; i--) {
        if(sortedArr[i] === tallest) {
            totalCount++;
        } else {
            break;
        }
    }    
    
    return totalCount;

}

function catAndMouse(x, y, z) {
    if(Math.abs(y - z) > Math.abs(x - z)) {
        return "Cat A";
    } else if(Math.abs(y - z) < Math.abs(x - z)) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}
