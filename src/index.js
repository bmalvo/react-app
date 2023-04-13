import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js';
import Garage from './Garage.js';
import Shoot from './Shoot.js';
import Garage2 from './Garage2.js';
import Goal from './Goal.js';
//JSX is extention of JS allows write HTML in JS

let carsLoot = ["Mitsubishi", 'Peugeot', "BMW"];
let x = 3;

const myFirstElement = (
<>
<h1>Hello React!</h1>
<p>first paragraf</p>
<p>second paragraf <span> 'span in second paragraf'</span></p>
<p>5 + 5 = {5+5}</p>
<p>Hello {(x) > 1 ? "Mark" : "Twain"}</p>
<Car color="green"/>
<Garage />
<br/>
<button onClick={Shoot}>Take a shoot!</button>
<Garage2 cars={carsLoot}/>
<Goal isGoal={true}/>
</>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
