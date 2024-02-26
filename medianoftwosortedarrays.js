// Anonymous Function
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
let median = function(arr1, arr2) {
  let merged = arr1.concat(arr2);
  merged.sort(function(a, b) {
    return a - b;
  });
  let mid = Math.floor(merged.length / 2);
  return merged.length % 2 !== 0 ? merged[mid] : (merged[mid - 1] + merged[mid]) / 2;
};
console.log("Anonymous Function:",median(arr1, arr2));

// IIFE
let medianIIFE = (function(arr1, arr2) {
  let merged = arr1.concat(arr2);
  merged.sort(function(a, b) {
    return a - b;
  });
  let mid = Math.floor(merged.length / 2);
  return merged.length % 2 !== 0 ? merged[mid] : (merged[mid - 1] + merged[mid]) / 2;
})(arr1, arr2);
console.log("IIFE:",medianIIFE);