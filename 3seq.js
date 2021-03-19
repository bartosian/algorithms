var mostVisitedPattern = function(username, timestamp, website) {
      let visitTuples = timestamp.map((_, i) => [username[i], timestamp[i], website[i]]).sort((a, b) => a[1] - b[1]),
          visitsByUser = {};

      visitTuples.forEach(tuple => {
        if (!visitsByUser[tuple[0]]) visitsByUser[tuple[0]] = [];
        visitsByUser[tuple[0]].push(tuple[2]);
      });

      let seqMap = {},
          max = ['', 0];

      Object.entries(visitsByUser).forEach(([_, websites]) => {
        let seqByUser = {};

        for (let i = 0; i < websites.length + 2; i++) {
          for (let j = i + 1; j < websites.length + 1; j++) {
            for (let k = j + 1; k < websites.length; k++ ) {
              let key = `${websites[i]}|${websites[j]}|${websites[k]}`;

              if (!seqByUser[key]) seqByUser[key] = 1;
            }
          }
        }

        Object.keys(seqByUser).forEach(key => {
          if (!seqMap[key]) seqMap[key] = 0;
          seqMap[key] += 1;

          if ((seqMap[key] === max[1] && seqMap[key].split("|").join(" ") < max[0].split("|").join(" ")) || seqMap[key] > max[1]) {
            max[0] = key;
            max[1] = seqMap[key];
          }
        });
      });

      return max[0].split("|");
};

let logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"];

var reorderLogFiles = function(logs) {
    let letterLogs = [],
        digitLogs = [];

    logs.forEach(log => {
      if (isNaN(+log[log.length - 1])) {
        letterLogs.push(log);
      } else {
        digitLogs.push(log);
      }
    });

    letterLogs.sort((a, b) => {
      let aIdent = a.indexOf(" "),
          bIdent = b.indexOf(" "),
          aSubstr = a.substring(aIdent + 1),
          bSusbtr = b.substring(bIdent + 1);

    let compareResult = aSubstr.localeCompare(bSusbtr);

      if (compareResult) {
        return compareResult;
      } else {
        return a.substring(0, aIdent).localeCompare(b.substring(0, bIdent));
      }
    });

    return [...letterLogs, ...digitLogs];
}

function countKsubArr(nums, k) {
  let len = nums.length,
      count = 0;

  for (let i = 0; i < len; i++) {
    if (nums[i] % k === 0) count++;
    let iterSum = nums[i];

    for (let j = i + 1; j < len; j++) {
      iterSum += nums[j];

      if (iterSum % k === 0) {
        count++;
      } else {
        break;
      }
    }
  }

  return count;
}
