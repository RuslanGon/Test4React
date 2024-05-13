import { useRef } from "react"


const RefExample = () => {

const buttonRef = useRef(null)
const inpurRef = useRef(null)

const handleClick = () => {
console.log(getComputedStyle(buttonRef.current).height);
console.log(getComputedStyle(buttonRef.current).width)
}

const inputClick = () => {
console.log(inpurRef.current);
}

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