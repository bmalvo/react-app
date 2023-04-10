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

hello = (userName) => 'Hello ' + userName + '!';
