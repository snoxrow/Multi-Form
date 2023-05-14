import { useState, useEffect, useRef } from "react";
import Heading from "../components/Heading";
import Plans from "../components/Plans";
import "../CSS/Step2.css";
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";
import Buttons from "../components/Buttons";

const Step2 = () => {
  const [checked, setChecked] = useState(true);
  const [selected, setSelected] = useState("");
  const [checkStep, setCheckStep] = useState(false);


  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);



  // const asyncLocalStorage = {
  //   setItem : async function (key, value) {
  //       await null;
  //       return localStorage.setItem(key, value)
  //   } ,
  //   getItem : async function (key) {
  //       await null;
  //       return localStorage.getItem(key)
  //   }
  // }

  useEffect(() => {
    const tier = localStorage.getItem("tier");

    let billing = localStorage.getItem("checked");


    if (billing === "false") {
      billing = false ; 
    } else {
      billing = true;
    }
 

      setChecked(billing);
      setSelected(tier);


    switch (tier) {
      case "1":
        ref1.current.focus();
        break;
      case "2":
        ref2.current.focus();
        break;
      case "3":
        ref3.current.focus();
        break;

      default:
        null;
    }
    (tier === null) ? setCheckStep(false) : setCheckStep(true)


    // console.log(typeof(billing));
    // console.log(typeof(tier));
    // console.log(tier);
  }, [checked, selected]);


  const select = (e) => {
    const index = e.target.tabIndex;
    localStorage.setItem("tier", index);
    setSelected(index);
  };
  return (
    <div>
      <Heading
        h1="Select your plan"
        p="You have the option of monthly or yearly billing."
      />
      <div className="tiers-wrapper">
        <Plans
          num="1"
          tier="Arcade"
          icon={Arcade}
          checked={checked}
          monthly="9"
          yearly="90"
          onclick={select}
          checkSelected={selected}
          ref={ref1}

        />
        <Plans
          num="2"
          tier="Advanced"
          icon={Advanced}
          checked={checked}
          monthly="12"
          yearly="120"
          onclick={select}
          checkSelected={selected}
          ref={ref2}
        />
        <Plans
          num="3"
          tier="Pro"
          icon={Pro}
          checked={checked}
          monthly="15"
          yearly="150"
          onclick={select}
          checkSelected={selected}
          ref={ref3}
        />
      </div>
      <div className="toggle-wrapper">
        <p id="billing" style={{ color: !checked && "hsl(213, 96%, 18%)" }}>
          Monthly
        </p>
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          onChange={() => {
            setChecked(!checked);
    localStorage.setItem("checked", !checked);

          }}
          checked={ checked}
        />
        <label htmlFor="toggle" className="label-toggle"></label>
        <p id="billing" style={{ color: checked && "hsl(213, 96%, 18%)" }}>
          Yearly
        </p>
      </div>
      <Buttons pathBack="/" pathFor="/step3" text="Next Step" check={!checkStep}/>
    </div>
  );
};

export default Step2;
