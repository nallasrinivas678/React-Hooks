import React, {useRef} from "react";
import Button from './Button'
import "./style.css";

const App = ()=>  {
 const buttonRef = useRef(null);

  return (
    <div>
    <button onClick={()=>{
      buttonRef.current.alterToggle();
    }}>Button From Parent</button>
    <br/>
    <Button ref={buttonRef}/>
    </div>
  );
}

export default App;
