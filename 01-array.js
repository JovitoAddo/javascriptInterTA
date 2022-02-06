////  Soal 1

const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(arr) {
    return arr.slice().reverse();
    
}

function reverse(arr2){
    return arr2.slice().reverse();
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

//// Soal 2

const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
  const totalAngka = arr.reduce((total, arr) => {
    return total + arr;
  }, 0);
  console.log(totalAngka);
  const rata = totalAngka / arr.length;
  console.log(rata);

  let numfilter = arr.filter((arr, rata) => {
    return arr > rata;
  })
  console.log(numfilter);
  
  if(numfilter = true){
    return numfilter.length;
  }
  
}

console.log(getAverage(arr1));
console.log(getAverage(arr2));


/// Soal 3

const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(arr) {
    let sorted = arr.sort();
    console.log(sorted);
  
    arr.find();
  }
  
  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));