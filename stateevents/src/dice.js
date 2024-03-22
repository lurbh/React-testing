import { useState } from "react";

export default function Dice(){

    const [diceNo, setDiceNo] = useState(0);
    
    function rollDice ()
    {
        setDiceNo(Math.floor(Math.random() * 6) + 1)
    }

    return <>
        <span style={{
            padding : "10px",
            margin : "10px",
            backgroundColor : diceNo % 2 === 0?"green":"red",
            color : diceNo % 2 === 0?"black":"white",
        }} onClick={rollDice}>{diceNo}</span>
    </>;
}