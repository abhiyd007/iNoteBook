import './App.css';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home  from './components/Home';
import About from './components/About'
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {


  const [alert, setalert] = useState(null);
  const showalert=(message, type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
setalert(null);
    }, 1500)
  }
  

  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <Alert alert={alert}/>
    <Switch>
          <Route exact path="/">
            <Home showalert={showalert}/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/login">
            <Login showalert={showalert}/>
          </Route>
          <Route exact path="/signup">
            <Signup showalert={showalert}/>
          </Route>
          
        </Switch>
        </Router>
        </NoteState>
    </>
  );
}

export default App;