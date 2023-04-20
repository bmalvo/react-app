import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js';
import Garage from './Garage.js';
import Shoot from './Shoot.js';
import Garage2 from './Garage2.js';
import Goal from './Goal.js';
import MyForm from './Form.js';
import './App.css';
// import { useState } from 'react';
import { useState, createContext, useContext } from "react";


//JSX is extention of JS allows write HTML in JS

let carsLoot = ["Mitsubishi", 'Peugeot', "BMW"];
let x = 3;
const UserContext = createContext()


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

function Component1() {
    const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
  }

  function Component2() {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 />
      </>
    );
  }
  
  function Component3() {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 />
      </>
    );
  }
  
  function Component4() {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 />
      </>
    );
  }
  
  function Component5() {
    const user = useContext(UserContext);
  
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
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
<Component1 />
</>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
