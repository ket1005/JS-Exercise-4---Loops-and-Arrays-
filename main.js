//1.Display numbers from 1 to 10
/*for (let num = 0; num<=10; num++){
    console.log(num);
}*/


//2.Print the odd numbers less than 100
/*for (let i = 1; i < 100; i += 2) {
    console.log(i);
}*/


//3.Print the multiplication table with 7
/*for (let i = 1; i <=7; i++){
    sum=i*7;
    console.log(sum);
}*/


//4.Print all the multiplication tables with numbers from 1 to 10
/*let mult;

    for(let i=1; i<=10; i++){
        for(let j=1; j<=10; j++){

            mult = i*j;
            console.log(mult);
        }
        console.log('\n');
    }
*/


//5.Calculate the sum of numbers from 1 to 10
//let sum = 0;
/*let sum = 0;
for (let i = 0; i <= 10; i ++) {
    sum += i;
     
}
console.log(sum);
*/


//6.Calculate 10!
/*let sum = 1;
for (let i = 0; i <= 10; i ++) {
    sum = sum*(i-1);
     
}
console.log(sum); */


//7.Calculate the sum of odd numbers greater than 10 and less than 30
/*
//Method to check if a number is odd

function odd(n){
    return Boolean(n%2);
  }
   
//Method to find sum of odd numbers till n
  
  function findSum(n) {
    let sum = 0;
    for(let i = 10; i <= n; i++){
      if(odd(i)) {
        sum += i;
      }
    }
    return sum;
  }
  
  console.log(`Sum is ${findSum(30)}`)*/



//8.Calculate the sum of numbers in an array of numbers
/*let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce(function (a, b){
    return a+b;
}, 0);
console.log(sum);*/



//9.Calculate the average of the numbers in an array of numbers
/*let average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([1,2,3,4,5]));*/


//10. Create a function that receives an array of numbers and returns an array containing only the positive numbers

/*var array = [3, -1, 0, 7, -71, 9, 10, -19];

const getpositiveNumbers = (array) => array.filter(value => value > 0);

var positives = getpositiveNumbers(array);

console.log(positives)
*/



//11.Find the maximum number in an array of numbers
/*const num = [4,5,1,3];
console.log(Math.max.apply(null, num));*/

//12.Create a function that will return a Boolean specifying if a number is prime
/*function isPrime(num){
    let isPrime = '';
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % i === 0){
        isPrime = false;
      } else {
        isPrime = true;
      }
    }
    return isPrime;
  
  }
  
  isPrime(11);*/


//13.Calculate the sum of digits of a positive integer number
/*function sumDigits(n) {
    let sum = 0;
    while (n) {
        digit = n % 10;
        sum += digit;
        n = (n - digit) / 10;
    }
    return sum;
}*/

//14.Print the first 100 prime numbers
/*
function isPrime(num) {
    for ( let i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    let arr = [2];
    for ( let i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log(arr); // use arr result on your own
}

display(100);*/

//15.Rotate an array to the left 1 position
/*let arr = [1, 2, 4, 5];
rotateLeft(arr);*/


//16.Reverse an array
/*const arr1 = [ 1, 2, 3, 4, 5];
console.log(arr1);
const arr2 = arr1.reverse();
console.log(arr2);*/



//17.Create a function that will merge two arrays and return the result as a new array
/*const arr1 = ['A', 'B', 'C', 'D'];
const arr2 = ['E', 'F', 'G'];
const result = arr1.concat(arr2);
console.log(result);*/

//18.Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both


//19.Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
let arr = [5, 10 ,15 ,20, 25, 30, 40];

function getFirstLast(arr) {
  return arr && arr.length > 1
    ? [arr[0], arr[arr.length - 1]]
    : arr 
}

console.log(getFirstLast(arr));


 //20.Create a function that will return the number of words in a text
