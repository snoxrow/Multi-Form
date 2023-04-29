/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Buttons = ({pathBack, pathFor}) => {
  const navigate = useNavigate();

  return (
    <div className="buttons">
        <Link className="back-text" to={pathBack}>
          Go Back
        </Link>
        <button onClick={() => navigate(pathFor)}> Next Step </button>
      </div>
  )
}

export default Buttons