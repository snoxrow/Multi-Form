import { useState } from "react";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import { useEffect } from "react";

const Step1 = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  useEffect(()=> {
    
  })

  const navigate = useNavigate();

  const handleOnChange = (key, value) => {
    let temp = Object.assign({}, inputValues);
    temp[key] = value;
    setInputValues(temp);
  };

  const updateInfo = (key, value) => {
    localStorage.setItem(key, value)
  }
  return (
    <div>
      <Heading
        h1="Personal Info"
        p="Please provide your name, email address, and phone number."
      />
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          updateInfo("name" , inputValues.name)
          updateInfo("email" , inputValues.email)
          updateInfo("phone" , inputValues.phone)
          
        }}
      >
        <InputField
          title="name"
          type="text"
          plchldr="e.g. Stephen Hawk"
          label="name"
          onchange={(value) => handleOnChange("name", value)}
          value={inputValues.name}
        />
        <InputField
          title="email"
          type="email"
          plchldr=" e.g. stephenhawk@lorem.com"
          label="email"
          onchange={(value) => handleOnChange("email", value)}
          value={inputValues.email}
        />
        <InputField
          title="phone"
          type="text"
          plchldr="e.g. +1 234 567 890"
          label="phone number"
          onchange={(value) => handleOnChange("phone", value)}
          value={inputValues.phone}
        />

        <button type="submit" onClick={() => navigate("/step2")}>
          Next Step
        </button>
      </form>
    </div>
  );
};

export default Step1;
