function Factorial(num) {
  if(num === 1) return 1;
  return num * Factorial(num-1);

}

const a = Factorial(4);
console.log(a);