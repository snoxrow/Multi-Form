import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Buttons from "../components/Buttons";
import Heading from "../components/Heading";
import "../CSS/step4.css";

const Step4 = () => {
  const [tier, setTier] = useState("");
  const [timeSelected, setTime] = useState();
  const [price, setPrice] = useState();
  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();
  const [option3, setOption3] = useState();
  const [total, setTotal] = useState()

  useEffect(() => {
    const selection = localStorage.getItem("checked");
    const selectedTier = localStorage.getItem("tier");
    const option1 = localStorage.getItem("option1");
    const option2 = localStorage.getItem("option2");
    const option3 = localStorage.getItem("option3");

    selection === "true" ? setTime(true) : setTime(false);
    option1 === "true" ? setOption1(true) : setOption1(false);
    option2 === "true" ? setOption2(true) : setOption2(false);
    option3 === "true" ? setOption3(true) : setOption3(false);
  let tempTotal = "";

    switch (selectedTier) {
      case "1":
        setTier("Arcade");
        setPrice(timeSelected ? "90" : "9");
        tempTotal = timeSelected ? "90" : "9" ;
        break;
      case "2":
        setTier("Advanced");
        setPrice(timeSelected ? "120" : "12");
        tempTotal = timeSelected ? "120" : "12" ;
        break;
      case "3":
        setTier("Pro");
        setPrice(timeSelected ? "150" : "15");
        tempTotal = timeSelected ? "150" : "15" ;
        break;
    }
     
    tempTotal = parseInt(tempTotal)

     if ( option1 === "true" ) {
       tempTotal += timeSelected ? 10 : 1;
     }
     if ( option2 === "true" ) {
       tempTotal += timeSelected ? 20 : 2;
     }
     if ( option3 === "true" ) {
       tempTotal += timeSelected ? 20 : 2;
     }
    setTotal(tempTotal)
      console.log(tempTotal)
      
  },[total]);
  
  
  return (
    <div>
      <Heading
        h1="Finishing up"
        p="Double-check everything looks OK before confirming."
      />
      <div className="total-wrapper">
        <div className="summary">
          <div className="summary-addons">
            <p id="summary-p">
              {tier + (timeSelected ? " (Yearly)" : " (Monthly)")}

              <Link to={"/step2"} id="change-link">
                Change
              </Link>
            </p>
            <p id="summary-p">
              ${price}/{timeSelected ? "yr" : "mo"}
            </p>
          </div>
          <hr />
          <div
            className="addons-total"
            style={{ display: option1 ? "flex" : "none" }}
          >
            <p>Online Service</p>
            <p>+${timeSelected ? "10/yr" : "1/mo"}</p>
          </div>
          <div
            className="addons-total"
            style={{ display: option2 ? "flex" : "none" }}
          >
            <p>Larger Storage</p>
            <p>+${timeSelected ? "20/yr" : "2/mo"}</p>
          </div>
          <div
            className="addons-total"
            style={{ display: option3 ? "flex" : "none" }}
          >
            <p>Customizable Profile</p>
            <p>+${timeSelected ? "20/yr" : "2/mo"}</p>
          </div>
        </div>
        <div className="total-cont">Total ( per {timeSelected ? "year" : "month"})
          <p id="total">+$  {  total } /{timeSelected ? "yr" : "mo"}</p>
        </div>
      </div>
      <div className="btn-wrapper">
        <Buttons
          pathBack="/addons"
          pathFor="/confirmation"
          text="Confirm"
          btnId="Step4-btn"
          onclick={()=> localStorage.clear()}
        />
      </div>
    </div>
  );
};

export default Step4;
