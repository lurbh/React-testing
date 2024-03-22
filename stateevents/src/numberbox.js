import { useState } from "react";

function NumberBox(p){

    const [count, setCount] = useState(p.init?p.init:0);

    const increseNumber = () => {
        setCount(count + 1);
    }

    const decreseNumber = () => {
        setCount(count - 1);
    }

    return <>
    <div>
        <span style={{
            "margin" : "10px",
            "padding" : "10px",
            "border": "1px solid black",
            display: "inline-block"
        }} onClick={decreseNumber}>-</span>
        <div style={{
            "padding" : "20px",
            "height" : "20px",
            "width" : "20px",
            "border": "1px solid black",
            margin : "10px",
            display: "inline-block"
        }}>
            {count}
        </div>
        <span style={{
            margin : "10px",
            "padding" : "10px",
            "border": "1px solid black",
            display: "inline-block"
        }} onClick={increseNumber}>+</span>
    </div>
    </>
}

export default NumberBox;