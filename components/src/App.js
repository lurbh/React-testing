
function displayHeader()
{
  return(<h1>About Me</h1>);
}

function sayHello()
{
  return "Hello, Everybody";
}

function Alert(props) {
  return (
    <h1 style={{
      backgroundColor : props.bgcolor?props.bgcolor:"red",
      color : "white",
      padding : "10px"
    }}>ALERT!!! {props.msg}</h1>
    
  );
}

function Shout(p) {
  return(
    <h1>{p.msg.toUpperCase()}</h1>
  );
}

function SumOfTwo(p) {
  return (
    <h3>{p.num1} + {p.num2} = {p.num1 + p.num2}</h3>
  );
}

function ImageFrame(p) {
  console.log(p.src)
  return (
      <img src={require('./dog.jpeg')} alt={p.alt}/>
  );
}


function App() {
  return (
    <>
      <h1>Hello World</h1>
      {sayHello()}
      {displayHeader()}
      <Alert/>
      <Alert msg="Danger Ahead"/>
      <Alert msg="Danger Ahead GGXX" bgcolor="black"/>
      <Shout msg="i am shouting"/>
      <SumOfTwo num1={5} num2 ={6}/>
      <ImageFrame src="./dog.jpeg" alt="loading"/>
    </>
  );
}

export default App;
