import "../CSS/addOns.css"
// eslint-disable-next-line react/prop-types
const AddOns = ({ addon, title, p, billing, amnt, onfocus, option}) => {
  return (
    <>
          <input className="input-addon" type="checkbox" id={addon} onChange={onfocus} checked={option}/>
    <div className="addOns" style={ {backgroundColor: option && "hsl(217, 100%, 97%)" , borderColor: option && "hsl(243, 100%, 62%)" } }>
      <label htmlFor={addon}>
        <div className="left-addon">
          <div className="checkbox" style={{backgroundColor: option && "hsl(243, 100%, 62%)" }}></div>
          <div className="text-addon">
            <h1>{title}</h1>
            <p>{p}</p>
          </div>

        </div>
        <div className="right-addon"> +${billing ? amnt+"/yr" : amnt+"/mo"}</div>
      </label>
    </div>
    </>
  );
};

export default AddOns;
