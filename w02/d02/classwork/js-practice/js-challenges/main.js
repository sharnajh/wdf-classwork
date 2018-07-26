//A Running Total
let prices = [33, 26, 99, 120, 12, 45];
let sum = 0;
for(var i=0; i < prices.length; i++){
   sum = sum + prices[i];
   console.log(sum);
}

//99 Crows On The Wall
let crows = 99;
for(let i=0; i < 98; i++){
  crows = 99 - i ;
  console.log(`${crows} crows on the wall. ${crows} crows. 1 fell down and became a wight. ${crows} crows on the wall.`);
} if(crows=1) {
  console.log(`${crows} crow on the wall. ${crows} single crow. It fell down and became a wight. There's no one left to defend Westeros now.`);
}

//Finding recurring numbers
let arr = [5,10,5,2,2,1,653,5,90,5,2,7,9,20,43,92,1,74]
//We create a new object
let obj = {}
//Loop through the array
for(let i = 0; i < arr.length; i++){
    //On each iteration use the tertiery operator to compare if the value exists or not
    (obj[arr[i]] != undefined) ? obj[arr[i]]++ : obj[arr[i]] = 1;
    //Does 5 exist in our obj object
    //Go into our obj object and set the key of that value to be 1
}
for(let k in obj){
    console.log(`${k} exists ${obj[k]} times`)
}

//Bonus Interview Question




