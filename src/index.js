import React from 'react';
import ReactDOM from 'react-dom/client';
//JSX is extention of JS allows write HTML in JS

let x = 3;

const myFirstElement = (
<>
<h1>Hello React!</h1>
<p>first paragraf</p>
<p>second paragraf <span> 'span in second paragraf'</span></p>
<p>5 + 5 = {5+5}</p>
<p>Hello {(x) > 1 ? "Mark" : "Twain"}</p>
</>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
