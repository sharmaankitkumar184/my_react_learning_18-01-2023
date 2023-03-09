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

  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

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
const removeBodyClasses=()=>
{
  document.body.classList.remove('bg-info');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-warning');
}

  const toggleMode = ()=>{
    if(mode === 'dark'){
      removeBodyClasses();
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showStling('green','2');
      showAlert("Light mode has been enabled", "success");
    }
    if(mode === 'light')
    {
      removeBodyClasses();
      setMode('dark');
      document.body.style.backgroundColor = '#706767';
      showStling('red','2');
      showAlert("Dark mode has been enabled", "success");
    }
  }
  const colorMode = (cls)=>{
    if(mode === 'light')
    {
     removeBodyClasses();
      setMode('light');
      document.body.classList.add('bg-'+cls);
      showAlert(`${capitalize(cls)} mode has been enabled`, "success");
    }
    if(mode === 'dark'){
      removeBodyClasses();
      setMode('dark');
      document.body.classList.add('bg-'+cls);
      showAlert(`${cls} mode has been enabled`, "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title={Title} mode={mode} toggleMode={toggleMode} colorMode ={colorMode}HomeText ={HomeText} AboutText={AboutText} showAlert={showAlert}></Navbar>
    <Alert alert={alert}/>
    <div className='container'>
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
                <TextForm heading="Try TextUtils - word counter, character counter" showAlert={showAlert} mode={mode} styling={styling}/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
