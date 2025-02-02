function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  var mid = Math.floor(arr.length / 2);
  var subLeft = mergeSort(arr.slice(0, mid));
  var subRight = mergeSort(arr.slice(mid));

  console.log(subLeft, "mergesort", subRight);

  return merge(subLeft, subRight);
}

function merge(node1, node2) {
  var result = [];
  console.log(node1, "merge", node2);
  while (node1.length > 0 && node2.length > 0)
    result.push(node1[0] < node2[0] ? node1.shift() : node2.shift());
  console.log("merge", result.concat(node1.length ? node1 : node2));
  return result.concat(node1.length ? node1 : node2);
}

console.log(mergeSort([1, 5, 3, 9, 6, 4, 8]));
