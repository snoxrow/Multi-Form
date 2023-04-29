import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Steps from "./components/Steps";
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
        <Steps num="2" disc="select plan" selected={currentPath.pathname == '/step2' && true}/>
        <Steps num="3" disc="add-ons" selected={currentPath.pathname == '/step3' && true}/>
        <Steps num="4" disc="summary" selected={currentPath.pathname == '/step4' && true}/>
      </div>
      <div className="right-side">
      <Routes>
    <Route path="/" element={<Step1/>} />
    <Route path="/step2" element={<Step2/>} />
    <Route path="/step3" element={<Step3/>} />
    <Route path="/step4" element={<Step4/>} />
    </Routes>
        
      </div>
    </div>
  );
}

export default App;
