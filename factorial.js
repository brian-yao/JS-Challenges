/* Implement factorial function */

//recursive
function factorialR(num) {
  if(num === 0) return 1;
  else {
    return num * factorialR(num -1);
  }
}
console.log(factorialR(4));

//iterative
function factorial(num) {
  if(num==0 || num==1) return 1;
  for(let i=num-1; i>0; i--) {
    num = num * i;
  }
  return num;
}

console.log(factorial(4));