// function sayHi(){
//     alert("Hello World!");
// };

// // let a = 10;
// // const name = "arnav";
// // var age = 19;

// // console.log('The value stored in variable a is:',a);
// // console.log('The value stored in variable name is:',name);
// // console.log('The value stored in variable age is:',age);

// // let b = 10;
// // let c = 20;
// // let d = 30;

// // console.log(b*c-d);

// // let age = 18;

// // if(age >= 18){
// //     console.log('U r an adult!');
// // }
// // else{
// //     console.log('You are a Minor');
// // }

// // let marks = 55;

// // if(marks>50){
// //     console.log('Student has  Passed');
// // }
// // else if(marks<50 && marks>=40){
// //     console.log('Another Chance will be given.');
// // }
// // else if(marks<40){
// //     console.log('Student has failed');
// // }

// // for(let i=1; i<101; i++){
// //     console.log(i);
// // }

// // let i =1;
// // while(i<=100){
// //     console.log(i);
// //     i++;
// // }

// // function add(a,b){ //processed
// //     return a + b;
// // };
// // const result = add(2,3); //input

// // console.log(result); //output

// // //arrow fxn

// // const add = (2,3) => a + b;

// //arrays

// let fruits = ['apple', 'banana', 'cherry','grapes','mango']


// // fruits.pop();
// // fruits.pop();

// // fruits.push('grapes');

// // fruits.push('mango');

// // console.log(fruits);

// // console.log(fruits[1]);

// // fruits.forEach((fruit)=>{
// //     console.log(fruit);
// // })

// //Map - Transforms an array
// //Returns a new array
// //Does not modify original array


// // const upperfruits = fruits.map(fruit => fruit.toUpperCase());
// // console.log(upperfruits);
// // console.log(fruits, upperfruits);


// //filter -  used to filter items based on a conditions
// //It will return a anew array with only the items that match the conditions

// // const numbers = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150];

// // const greaterthan30 = numbers.filter(num => num>30 && num<120);
// // console.log(greaterthan30); 
// // console.log(numbers);


// //Reduce - reduces an array to a single value
// //used for sum, product or any mathematical op etc

// // const arr = [1,2,3,4,5,6];
// // const sum = arr.reduce((acc,num)=>acc+num,0)
// // //acc(Accumulator) - the initial numbers from  where the operation starts, starts from 0 by default
// // //num - each num gets added to the acc
// // /*
// //   1st iteration: acc = 0; num = 1
// //   result-> 1, acc = result = 1

// //   2nd iteration: 1 + 2 = 3
// //   result-> 3, acc = 3

// //   3rd iteration: 3 + 3 = 6
// //   result-> 6, acc = 6
// //   and so on until the end of the array.
// // */

// // console.log(sum);


// //Objects - a collection of data in key-value pairs
// const person = { //person is an Object here
//     name: 'Yash',
//     age: 25,
//     Designation: "Manager"
// }

// console.log(person);
// console.log(person.age);//Dot notation
// console.log(person.name);

// console.log(person["age"]);//Square[] bracket notation
// console.log(person["name"]);


// person.city = "New Delhi"//Adding a New Key
// console.log(person);

// person.age = 31;// Updating a Key
// console.log(person);

// delete person.city;//Deleting a key
// console.log(person);

// Object.keys(person);//to obtain all the keys of an object
// console.log(Object.keys(person));

// console.log(Object.values(person));//to obtain  all the values of an object



//Accessing the DOM
// const heading = document.getElementById("title");
// const buttn = document.getElementById("btn");

// //change the text
// heading.innerText = "Welcome to DOM";
// heading.style.fontSize = "100px";

// buttn.addEventListener('click', function(){
//     alert('Button has been Clicked.');
// });

const api = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';

const api_key = "900ba812192872cbbb9f73b635236d43";

const inputValue = document.querySelector(".input");
const windspeed = document.querySelector(".windspeed");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");

function input(e){
    e.preventDefault();
   const word =  document.querySelector("#inputValue").value;
//    console.log(word);
 fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${api_key}`
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    var descp = data.weather[0].description;
    var tempt = data.main.temp;
    var windspd = data.wind.speed;

    windspeed.innerHTML = "Windspeed: " + windspd;
    desc.innerHTML = "Desc: " + descp;
    temp.innerHTML = "Temp: " + Math.floor(tempt - 273.15);
  });
}


inputValue.addEventListener('submit', input);