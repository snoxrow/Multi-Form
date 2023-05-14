import React from 'react'
import checkmark from "../assets/images/icon-checkmark.svg"
import thankyou from "../assets/images/icon-thank-you.svg"
const Confirmation = () => {
  return (
    <div >

      <img src={thankyou}/>
       <p style={{color:"hsl(213, 96%, 18%)" , fontSize: 34 + "px"}}> Thank you!</p>
       <p>Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Confirmation