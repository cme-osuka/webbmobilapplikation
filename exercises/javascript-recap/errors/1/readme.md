
/* 
 * Det är en bugg i den här koden, och det är din uppgift att lösa den!
 * Du får lov att ändra koden, men du får inte ta bort koden och börja om.
 * Och var säker på att du förstår buggen och varför det händer! (det kan finnas mer än en)
 * Förväntat resultat bör vara:
 * Mean: 5.5
 * Median: 3.5
 * Mode: 4
 */
let arr = [1, 4, 4, 19, 3, 2];
console.log("Mean: " + mean(arr))
console.log("Median: " + median(arr))
console.log("Mode: " + mode(arr));

function getSum(arr) {
  let sum = 0;

  while(arr.length) {
    sum += arr.pop();
  }
  return sum;
}

function mean(arr) {
  let sum = getSum(arr);
  return sum / arr.length;
}

function median(arr) {
  arr.sort(function(a, b) {return a - b});
  if (arr.length % 2 === 0) {
    // Jämnt, vi tar de två numrena i mitten och tar fram snittet av de två
    return getSum(arr.splice(Math.floor(arr.length / 2) - 1, 2)) / 2;
  } else {
    // Udda, vi returnerar numret i mitten
    return arr[Math.floor(arr.length / 2)];
  }
}

function mode(arr) {
  let countObj = {};
  for (let x of arr) {
    if (x in countObj === false) countObj[x] = 0;
    countObj[x]++;
  }

  let maxCount = 0;
  let maxNumber;
  for (let x in countObj) {
    let count = countObj[x];
    if (count > maxCount) {
      maxCount = count;
      maxNumber = x;
    }
  }
  return parseInt(maxNumber);
}