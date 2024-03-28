import './App.css';
import Form from './Form';
import {useState} from 'react'
import Confirmation from './Confirmation';
import TaskList from './TaskList';

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [submitState, setSubmitState] = useState(false);

  const confirmUpdate = (event) =>{
    alert(`username is now ${userName} and email ${email}.`)
    setSubmitState(true);
  }

  return (
    <div className="App">
      { !submitState?
      <Form p1={userName}
            p2={setUserName}
            p3={email}
            p4={setEmail}
            p5={confirmUpdate}
      />:
      <Confirmation 
          username={userName}
          email={email}
      />
      }
      <TaskList/>
    </div>
  );
}

export default App;
