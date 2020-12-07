function interesctSets(setA, setB) {
  var intersection = new Set();

  for (var item of setA) {
    if (setB.has(item)) {
      intersection.add(item);
    }
  }

  return intersection;
}

function isSuperset(setA, subset) {
  for (var item of subset) {
    if (!setA.has(item)) return false;
  }

  return true;
}

function unionSet(setA, setB) {
  var union = new Set(setA);

  for (var item of setB) {
    union.add(item);
  }

  return union;
}

function differenceSet(setA, setB) {
  var difference = new Set(setA);

  for (var item of setB) {
    difference.remove(item);
  }

  return difference;
}

function checkDuplicates(arr) {
  var mySet = new Set(arr);

  return mySet.size < arr.length;
}

function uniqueList(arr1, arr2) {
  var mySet = new Set(arr1.concat(arr2));

  return Array.from(mySet);
}
