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
        let currentElement = q[i] - 1;

        if(currentElement > i) {
            let localBribes = currentElement - i;

            if(localBribes > 2) {
                console.log("Too chaotic");
                return;
            } else {
                totalBribes += localBribes;
            }
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