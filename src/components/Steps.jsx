import  "../CSS/steps.css"

// eslint-disable-next-line react/prop-types
const Steps = ({num, disc, selected}) => {
  return (
    <div className="container-steps"> 
      <div className={selected ? "stepnum active-step" : "stepnum"}>{num}</div>
      <div className="stage" >
         <div>Step {num}</div>
        <p>{disc}</p>
      </div>
     </div>
  )
}

export default Steps