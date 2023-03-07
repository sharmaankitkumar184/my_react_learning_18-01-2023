import './App.css';
import Navbar from './components/Navigations/Navbar';
import About from './components/About/AboutPage';
import TextForm from './components/TextForms/TextForm';
import Alert from './components/Alert/Alert';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const Title="TextUtils";
const HomeText="Home";
const AboutText="About-TextUtils";
  
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [styling, setStyling] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  const showStling = (color, height)=>{
    setStyling({
      color: color,
      height: height
    })
}
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showStling('red','2');
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showStling('green','2');
      showAlert("Light mode has been enabled", "success");
      
    }
  }
  return (
    <>
    <Router>
    <Navbar title={Title} mode={mode} toggleMode={toggleMode} HomeText ={HomeText} AboutText={AboutText}></Navbar>
    <Alert alert={alert}/>
    <div className='container'>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
                <TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces" showAlert={showAlert} mode={mode} styling={styling}/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
