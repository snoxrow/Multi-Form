/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Buttons = ({ pathBack, pathFor, text, btnId, check, onclick }) => {
  const navigate = useNavigate();
  const current = useLocation();

  // onClick={() => {
  //   if (allCheck) {
  //     navigate(pathFor);
  //   } else {
  //     alert('Please select an option!')
  //   }
  // }}
  // const currentPath = useLocation()

  return (
    <div className="buttons" >
      <Link className="back-text" to={pathBack}>
        Go Back
      </Link>
      <button
        id={btnId}
        onClick={() => {
            
          
          
          
            
              
                // e.preventDefault();

                if (check) {
                  alert("Please select an option");
                } else {
                  navigate(pathFor);
                }
                onclick()
            
          
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Buttons;
