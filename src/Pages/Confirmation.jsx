import { useNavigate } from "react-router-dom";
import thankyou from "../assets/images/icon-thank-you.svg";
const Confirmation = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={thankyou} style={{ width: "100px" }} />
      <p style={{ color: "hsl(213, 96%, 18%)", fontSize: 34 + "px" }}>
        Thank you!
      </p>
      <p
        style={{ textAlign: "center", lineHeight: "30px", fontSize: 18 + "px" }}
      >
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
        style={{position: "absolute", bottom: "14%"}}
      >
        {" "}
        Return
      </button>
    </div>
  );
};

export default Confirmation;
