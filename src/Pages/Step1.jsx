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

  const [inputErrors, setInputErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    let tempState = Object.assign({}, inputValues);

    tempState.name = localStorage.getItem("name")
      ? localStorage.getItem("name")
      : "";
    tempState.email = localStorage.getItem("email")
      ? localStorage.getItem("email")
      : "";
    tempState.phone = localStorage.getItem("phone")
      ? localStorage.getItem("phone")
      : "";

    setInputValues(tempState);
  }, []);

  const navigate = useNavigate();

  const handleOnChange = (key, value) => {
    let temp = Object.assign({}, inputValues);
    let tempErr = Object.assign({}, inputErrors);
    temp[key] = value;
    if (temp.name === "") {
      tempErr.name = "This Field is required";
    } else {
      tempErr.name = "";
    }

    if (temp.email === "") {
      tempErr.email = "This Field is required";
    } else {
      tempErr.email = "";
    }

    if (temp.phone === "") {
      tempErr.phone = "This Field is required";
    } else {
      tempErr.phone = "";
    }

    setInputErrors(tempErr);
    setInputValues(temp);
  };

  const updateInfo = (key, value) => {
    localStorage.setItem(key, value);
  };

  const onSubmit = () => {
    let tempErr = Object.assign({}, inputErrors);

    let isValid = true;
    updateInfo("name", inputValues.name);
    updateInfo("email", inputValues.email);
    updateInfo("phone", inputValues.phone);

    if (inputValues.name === "") {
      tempErr.name = "This Field is required";
      isValid = false;
    } else {
      tempErr.name = "";
    }

    if (inputValues.email === "") {
      tempErr.email = "This Field is required";
      isValid = false;
    } else if (
      !/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
        inputValues.email
      )
    ) {
      tempErr.email = "Invalid Format";
      isValid = false;
    } else {
      tempErr.email = "";
    }

    if (inputValues.phone === "") {
      tempErr.phone = "This Field is required";
      isValid = false;
    } else {
      tempErr.phone = "";
    }

    setInputErrors(tempErr);

    if (isValid) {
      navigate("/plans");
    }
  };
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
        }}
      >
        <InputField
          title="name"
          type="text"
          plchldr="e.g. Stephen Hawk"
          label="name"
          onchange={(value) => handleOnChange("name", value)}
          value={inputValues.name}
          error={inputErrors.name}
        />
        <InputField
          title="email"
          type="email"
          plchldr=" e.g. stephenhawk@lorem.com"
          label="email"
          onchange={(value) => handleOnChange("email", value)}
          value={inputValues.email}
          error={inputErrors.email}
          pattern=""
        />
        <InputField
          title="phone"
          type="text"
          plchldr="e.g. +1 234 567 890"
          label="phone number"
          onchange={(value) => handleOnChange("phone", value)}
          value={inputValues.phone}
          error={inputErrors.phone}
        />

        <button
          id="step1-btn"
          type="submit"
          onClick={() => onSubmit()}
          style={{ position: "absolute", bottom: "-42%" }}
        >
          Next Step
        </button>
      </form>
    </div>
  );
};

export default Step1;
