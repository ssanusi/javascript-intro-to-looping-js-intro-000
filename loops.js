function forLoop(array){
  for (let i = 0; i < 25; i++) {
    console.log(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  return 'done';
}
