let input = 'a whale of a deal!';
const vowels = ['a','e','i','o','u'];
let resultArray = [];
for(let x=0;x<input.length;x++) {
  for(let y=0;y<vowels.length;y++) {
    if(input[x] === vowels[y]) {
      resultArray.push(input[x]);
      if(input[x] ==='e' || input[x] === 'u') {
      resultArray.push(input[x]);
      }
    }
  }
}

console.log(resultArray.join(''))