// Write your code below


let bobsFollowers = ['ana', 'mina', 'hana', 'jonah'];
let tinasFollowers = ['ana', 'mark', 'hana'];
let mutualFollowers = [];

for(let x=0;x<bobsFollowers.length;x++) {
  for(let y=0;y<tinasFollowers.length;y++) {
    if(bobsFollowers[x]===tinasFollowers[y]) {
      mutualFollowers.push(bobsFollowers[x])
    }
  }
}

console.log(mutualFollowers);