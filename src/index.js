import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js';
import Garage from './Garage.js';
import Shoot from './Shoot.js';
import Garage2 from './Garage2.js';
import Goal from './Goal.js';
import MyForm from './Form.js';
import './App.css';
import { useState } from 'react';

//JSX is extention of JS allows write HTML in JS

let carsLoot = ["Mitsubishi", 'Peugeot', "BMW"];
let x = 3;

const myStyle = {
    color: "white",
    background: "Blue",
    padding: "10px",
    fontSize: "20px"
};

function FavouriteColor(){
    const [color, setColor] = useState("red");

    return <>
    <p>My favourite color is {color}!</p>
           <button type='button' onClick={() => setColor("blue")}>blue</button>
           </>
}

function Timer() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
    let timer =   setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);

    return () => clearTimeout(timer)  
    },[]);

    return <h1>I've rendered {count} times!</h1>;
}


const myFirstElement = (
<>
<h1 style={{background: 'black',color:'white'}}>Hello React!</h1>
<p style={myStyle}>first paragraf</p>
<p>second paragraf <span> 'span in second paragraf'</span></p>
<p>5 + 5 = {5+5}</p>
<p>Hello {(x) > 1 ? "Mark" : "Twain"}</p>
<Car color="green"/>
<Garage />
<br/>
<button onClick={Shoot}>Take a shoot!</button>
<Garage2 cars={carsLoot}/>
<Goal isGoal={true}/>
<MyForm/>
<FavouriteColor />
<Timer />
</>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
