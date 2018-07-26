/*
//How to get a fibo Array

let fiboArray = num => {
    array=[0];
    array.push(array[0] + 1);
    for (i = 1 ; i >= 0 && i < num ; i++) {
        array.push(array[i] + array[i-1]);
      } return array
}

console.log(fiboArray(5))


//Fibonacci Calculator

let fibonacci = n => {
    let fibo = [0,1];
    if(fibo===0) return 0
    for( i = 2 ; i <= n ; i++ ) {
      fibo[i] = fibo[i-1] + fibo[i-2];
    } return fibo[n-1];
  }
  
  fibonacci(7);

  // Fibonacci Calculator my way 

  let fibo = num => {
    let array=[0,1];
    if(num===0) return 0;
    for (i = 2 ; i <= num ; i++) {
        array.push(array[i-1] + array[i-2]); //only difference is I used push :/
      } return array[num-1]
}

console.log(fibo(6))


//recursion solution

let fibonacci = n => {
    if(n===1){
      return 0;
    } else if(n===2){
      return 1
    } else {
      return fibonacci(n-1) + fibonacci(n-2);
    }
  }
  
  fibonacci(8)
  */

  

  

