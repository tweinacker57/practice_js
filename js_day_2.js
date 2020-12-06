



function selectEvenItems(strings) {
  var result = [];
  var index = 0;
  strings.forEach(function (string) {
    if (index % 2 === 0) {
      result.push(string);
    }
    index++;
  });
  return result;
}

console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));


function max(numbers) {
  var currentMax = numbers[0];
  numbers.forEach(function (number) {
    if (number > currentMax) {
      currentMax = number;
    }
  });
  return currentMax;
}
console.log(max([5, 4, 8, 1, 2]));


