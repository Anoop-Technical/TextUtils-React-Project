import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';


function App() {
   const [mode, setMode] = useState("light");
   const [alert, setAlert] = useState(null);
   const showAlert = (message, type) => {
      setAlert({
         msg: message,
         type: type
      });
      setTimeout(() => {
         setAlert(null);
      }, 1500);
   }


   const toggleMode = () => {
      if (mode === "light") {
         setMode("dark");
         document.body.style.backgroundColor = "#042743";
         showAlert("Dark mode has been enabled now !!", "success");
         document.title = "Textutils - Dark Mode"
      }
      else {
         setMode("light");
         document.body.style.backgroundColor = "white";
         showAlert("Ligth mode has been enabled now !!", "success");
         document.title = "Textutils - Light Mode"
      }
   }
   return (
      <>
         <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
         <Alert alert={alert} />
         <div className="container my-3">
            <TextForm showAlert = {showAlert} heading="Enter the text to analyze below" mode={mode} />
            {/* <About mode={mode}/> */}
         </div>
      </>
   );
}

export default App;
