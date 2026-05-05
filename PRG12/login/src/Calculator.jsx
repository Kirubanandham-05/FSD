import { useState } from 'react'

import './App.css'

function Calculator() {

      const [n1,sN1] = useState("");
      const [n2,sN2] = useState("");
      const [result,setResult] = useState("");
      const ad = ( ) => {
        setResult(parseFloat(n1)+ parseFloat(n2));};
      const su = ( ) => {
        setResult(parseFloat(n1)-parseFloat(n2));};
        const mu = ( ) => {
        setResult(parseFloat(n1) * parseFloat(n2));};
        const di = ( ) => {
        setResult(parseFloat(n1)/parseFloat(n2));};
  return (
    <div className='App'> 
        <input type="number" placeholder='num 1' value={n1} 
          onChange={(e) => sN1(e.target.value)}/>
           <input type="number" placeholder='num 2' value={n2} 
          onChange={(e) => sN2(e.target.value)}/>
        <div>
          <button onClick={ad}>+</button>
          <button onClick={su}>-</button>
          <button onClick={mu}>*</button>
          <button onClick={di}>/</button>

        </div>
        <h3>result : {result}</h3>
    
    </div>
  )
}

export default Calculator;


//To create 
//npx create-react-app calculator
//to run
//npm start    