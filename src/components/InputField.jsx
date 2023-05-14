
import "../CSS/inputField.css";

// eslint-disable-next-line react/prop-types
const InputField = ({ title, type, plchldr, label, onchange, value, error }) => {
  

  return (
    <div className="input-field">
      <label htmlFor={title}>{label}</label>
      <div
        className="error-msg"
        // style={
        //   InputText.length == 0
        //     ? { visibility: "visible" }
        //     : { visibility: "hidden" }
        // }
      >
        {error}
      </div>
      <input
        onChange={e => {
          onchange(e.target.value);

        }
        }
        type={type}
        name={title}
        id={title}
        placeholder={plchldr}
        minLength={4}
        value ={value}
      />
    </div>
  );
};

export default InputField;
