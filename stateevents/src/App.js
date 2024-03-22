import {useState} from 'react'
import "./style.css"
import NumberBox from './numberbox';
import AlertBox from './alertbox.js';
import Dice from './dice.js';


function App() {

  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>State Examples</h1>
      <h3>{number}</h3>
      <NumberBox/>
      <NumberBox init={15}/>
      <AlertBox/>
      <AlertBox init="Testing"/>
      <Dice/>
    </>
  );
}

export default App;
