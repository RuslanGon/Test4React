import { useEffect, useRef } from "react"


const RefExample = () => {

const buttonRef = useRef(null)
const inpurRef = useRef(null)

const handleClick = () => {
console.log(getComputedStyle(buttonRef.current).height);
console.log(getComputedStyle(buttonRef.current).width)
}

const inputClick = () => {
  // inpurRef.current.focus()
}

useEffect(() => {
  if (inpurRef.current === null) return;
  inpurRef.current.focus();
}, []);


  return (
    <div>
      <button ref={buttonRef} onClick={handleClick}>Click to do smth</button>
      <br />
      <button onClick={inputClick}>Click input</button>
      <input ref={inpurRef} type="text" placeholder="enter smth" />
    </div>
  )
}

export default RefExample