//console.log only appears in the console (inspect in chrome)

let myGrade = 90.99; //let is used for variables that can be changed.
const myName = "Sharna"; //const is used for variables that cannot be changed.
let awesomeClass = true;

let classmates = ["Mary","Imani","Mark","Choti","Shahid"];
console.log(classmates[3]);

let myArray = [
    ["hello", "goodbye", "food"],
    ["something", "else", "here"],
    ["beans", "fruit", "veggies"]
];

console.log(myArray[2][0]);

let myself = {
    firstName: "Sharna",
    lastName: "Hossain",
    age: 21,
    favoriteMovies: [
        "The Lord of the Rings",
        "The Greatest Showman",
        "Birdman"
    ]
}

console.log(myself.firstName)
console.log(myself.lastName)
let fullName = myself.firstName + " " + myself.lastName;
console.log(`My name is ${fullName}. I am ${myself.age} years old. My favorite movies are ${myself.favoriteMovies[0]}, ${myself.favoriteMovies[1]}, and ${myself.favoriteMovies[2]}.`)

let friend = {
    name:"Bonnie",
    eyeColor:"dark brown",
    hairColor:"black"
}

let topMovies = {
    topMovieOne:"The Greatest Showman",
    topMovieTwo:"Khabi Khushi Khabi Gham",
    topMovieThree:"Interstellar"
}

console.log(`My favorite movies are ${topMovies.topMovieOne} and ${topMovies.topMovieTwo}, but I really enjoy ${topMovies.topMovieThree}.`)


let array = ["David", "Josh", "John", "Kevin"];
for(let i = 0; i < array.length; i++) {
    console.log(array[i])
}


//done!!
let pluses = "++++++++++"
for(let i = 0; i < 10; i++) {
    // run code written here 10 times
    let pluses2 = pluses.substr(i);
    console.log(pluses2);
  }
