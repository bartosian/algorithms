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
