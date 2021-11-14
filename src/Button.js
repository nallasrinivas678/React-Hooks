import React, {useState, forwardRef, useImperativeHandle} from 'react';


const Button = forwardRef((props, ref) => {
const [toggle, setToggle] = useState(false);

useImperativeHandle(ref, ()=>({
  alterToggle(){
    setToggle(!toggle);
  }
}))

  return (
    <>
    <button type="button">
    Button from child
    </button>
    {toggle && <span>Toggle text!</span>}
    </>
  )
});

export default Button;