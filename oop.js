//object literal syntex
// object literal syntex is simple way to define a an objevt. 
const circle = {
    radiou: 1,
    location: {
        x: 1,
        y: 2
    },
    draw: function () {
        console.log('draw');
    }
};
circle.draw();

//ai uporer kode tuko abr use korle duplicate korte hobe. And er pore jodi error hoi fix korte kothin multiple jaiga thaka fix korte hobe So ........object literal syntex is not good awy to create an object. Er solution holo factory or constructor function use kora


//factory function (uporer code tuko e)
function createCircle(radius) {
    return {
        radious,
        draw: function () {
            console.log('draw');
        }
   } 
}
const circle = createCircle(1);
circle.draw;


//construction function
function Circle(radius) {
    this.radius = radios;
    this.drow = function () {
        console.log('draw');
    }
}
const another = new Circle(1);


let x = {};
//behind the sceen JS translate it let x = new Object();

//In javascript functions are object




//value/premitive VS Reference Types

//premitive example
let number = 10;

function increase(number) {
    number++;
}
increase(number);
console.log(number);
//Output: 10


//reference example(reference types are object)
let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj);
//Output: {value: 11}




//Adding/removing Properties
function Circle(radius) {
  this.radius = radios;
  this.drow = function () {
    console.log("draw");
  };
}
const another = new Circle(1);

circle.location = { x: 1 };
circle["location"] = { x: 1 };
//both same

//Thard bracket use er karon koro...
const propertyName = 'Centeer Location'; // aita ami circle.propertyName ai vabe pabo na. tai...
circle[propertyName] = { x: 1 };



//Type of method:
class student{
    constructor(name) {
      //constructor method
        this.fName = name;
      console.log("construction Function");
    }
    hello() {
      //eta ekta prototype method
      console.log(`Hello ${this.fName}`);
    }
}
let a = new student('My baba');
a.hello();
//Output: construction Function
//Output: Hello My baba