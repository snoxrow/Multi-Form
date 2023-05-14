import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Steps from "./components/Steps";
import Confirmation from "./Pages/Confirmation";
import Step1 from "./Pages/Step1";
import Step2 from "./Pages/Step2";
import Step3 from "./Pages/Step3";
import Step4 from "./Pages/Step4";


function App() {
  const currentPath = useLocation();
  return (
   

    <div className="container">
      <div className="left-side">
        <Steps num="1" disc="your info" selected={currentPath.pathname == '/' && true} />
        <Steps num="2" disc="select plan" selected={currentPath.pathname == '/plans' && true}/>
        <Steps num="3" disc="add-ons" selected={currentPath.pathname == '/addons' && true}/>
        <Steps num="4" disc="summary" selected={currentPath.pathname == '/summary' || '/confirmation' && true}/>
      </div>
      <div className="right-side">
      <Routes>
    <Route path="/" element={<Step1/>} />
    <Route path="/plans" element={<Step2/>} />
    <Route path="/addons" element={<Step3/>} />
    <Route path="/summary" element={<Step4/>} />
    <Route path="/confirmation" element={<Confirmation/>} />
    </Routes>
        
      </div>
    </div>
  );
}

export default App;
