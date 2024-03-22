import { useState } from "react";

function AlertBox(p) {
    const [message, setMessage] = useState(p.init?p.init:"Nil");

    return <div style={{
        border : "4px solid black",
        fontSize : "30px",
        margin : "10px"
    }}>
        {message}
    </div>;
}

export default AlertBox;