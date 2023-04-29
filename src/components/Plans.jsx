/* eslint-disable react/prop-types */

import { forwardRef } from "react";
import "../CSS/Plans.css"




const Plans = forwardRef( function Plans ({icon, tier, num, checked, yearly, monthly, onclick} , ref) {



  return (
    <div
    tabIndex={num}
      className="plan-cont" onFocus={ onclick} ref={ref}>
      <div>
        <img src={icon} />
      </div>
      <div className="tiers">
        <div className="tier">{tier}</div>
        <div className="price">{checked ? "$"+yearly+"/yr"  : "$"+monthly+"/mo"}</div>
        {checked && <div className="free-months">2 months free</div> }
        
      </div>
    </div>
  );
});

export default Plans;
