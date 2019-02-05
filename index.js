// Code your solutions in this file
const badges = ['Ada', 'Brendan', 'Ali'];

function printBadges(badges) {
  for (let i = 0; i < badges.length; i++) {
    
  console.log(`Welcome ${badges[i]}! You are employee #${i + 1}.`)  
  }
  
  return badges; 
}

function tailsNeverFails() {
  return Math.random() >= 0.5;
}

while (tailsNeverFails()) {
  console.log();
}