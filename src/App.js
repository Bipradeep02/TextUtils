// import logo from './logo.svg';
import './App.css';
// import { Container, Button, Navbar, Nav, NavDropdown, Form, FormControl, OFf } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
// import About from './components/About';
import { useState } from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        message : message,
        type : type
      }) 
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
    }
  }

  return (
    <>    

      {/* <Router> */}
        <Navbarr title = "My Blog" mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert = {alert}/>
        <div className="container my-5">
          <TextForm heading = "Enter the text" mode = {mode} showAlert = {showAlert}/>
          {/* <Routes> */}
            {/* <Route exact path="/About" element={<About />} />
            <Route exact path="/" element = {<TextForm heading = "Enter the text" mode = {mode} showAlert = {showAlert}/>} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router>   */}
    </>
  );
}

export default App;
