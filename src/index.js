import React from 'react';
import ReactDOM from 'react-dom/client';


const myFirstElement = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);


// Create class Car 

class Car {
    constructor(name){
        this.brand = name;
    }

    present(){
        return 'I have a ' + this.brand;
    }
}

const myCar = new Car("Ford");

// Extending class Car by class Model (inheritance)

class Model extends Car{
    constructor(name,mod){
        super(name);
        this.model = mod;
    }
    show(){
        return this.present() + ', it is a ' + this.model
    }
}

const myCar2 = new Model("Ford", "Mustang");

// Arrow function to invitation

var hello = (userName) => 'Hello ' + userName + '!';

// Declaring Variables

// If you use var outside of a function, it belongs to the global scope.
// If you use var inside of a function, it belongs to that function.
// If you use var inside of a block, i.e. a for loop, the variable is still 
//    available outside of that block.
// var has a function scope, not a block scope.

// let is the block scoped version of var, and is limited to the block
    // (or expression) where it is defined.
// If you use let inside of a block, i.e. a for loop, the variable is only 
    // available inside of that loop.
// let has a block scope.


// const is a variable that once it has been created, its value can never change.
// const has a block scope.


// Array methods

const myFruits = ['apple', 'banana', 'orange'];

const myListOfFruits = myFruits.map((item) => <p>{item}</p>)

// Destructuring

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;

const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  myVehicle(vehicleOne);
  
  function myVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' +
     model + '.';
  }

