

export default function Form(props) {
    // const [userName, setUserName] = useState("");
    // const [email, setEmail] = useState("");

    return (
        <>
            <div>
                <label>Username: </label>
                <input 
                    type='text' 
                    name='username'
                    value={props.p1}
                    onChange={(e)=> {props.p2(e.target.value)}}
                />
            </div>
            <div>
                <label>E-Mail: </label>
                <input 
                    type='text' 
                    name='email'
                    value={props.p3}
                    onChange={(e)=> {props.p4(e.target.value)}}
                />
            </div>
            <button onClick={props.p5}>Submit</button>
        </>
    )
}