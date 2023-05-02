import { useState } from "react";
import { useEffect } from "react";
import AddOns from "../components/addOns";
import Buttons from "../components/Buttons";
import Heading from "../components/Heading";

const Step3 = () => {
const [billing, setBilling] = useState()
const [option1, setOption1] = useState(false)
const [option2, setOption2] = useState(false)
const [option3, setOption3] = useState(false)

useEffect(()=> {
  const billing = localStorage.getItem("checked"); 
  const Option1 = localStorage.getItem("option1"); 
  const Option2 = localStorage.getItem("option2"); 
  const Option3 = localStorage.getItem("option3"); 

  setOption1(Option1 === "true" ? true : false)
  setOption2(Option2 === "true" ? true : false)
  setOption3(Option3 === "true" ? true : false)

  setBilling(billing === "true" ? true : false)
},[])

  const updateAddOns = (key,option) => {
    localStorage.setItem(key, option)
  }
  return (
    <div>
      <Heading
        h1="Pick add-ons"
        p="Add-ons help enhance your gaming experience"
      />

      <AddOns
        title="Online service"
        p="Access to multiplayer games"
        billing={billing}
        amnt={billing ? "10" : "1"}
        addon="online-service"
        onfocus={()=> {
          setOption1(!option1);
          updateAddOns("option1", !option1)}}

          option={option1}
      />
      <AddOns
        title="Larger Storage"
        p="Extra 1TB of cloud save"
        billing={billing}
        amnt={billing ? "20" : "2"}
        addon="storage"
        onfocus={()=> {
          setOption2(!option2);
          updateAddOns("option2", !option2)}}

          option={option2}
      />
      <AddOns
        title="Customizable Profile"
        p="Custom theme on your profile"
        billing={billing}
        amnt={billing ? "20" : "2"}
        addon="theme"
        onfocus={()=> {
          setOption3(!option3);
          updateAddOns("option3", !option3)}}

          option={option3}
      />
      <Buttons pathBack="/step2" pathFor="/step4" />
    </div>
  );
};

export default Step3;
