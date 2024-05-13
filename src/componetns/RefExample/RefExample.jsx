import { useRef } from "react"


const RefExample = () => {

const buttonRef = useRef(null)

const handleClick = () => {
console.log(getComputedStyle(buttonRef.current).height);
console.log(getComputedStyle(buttonRef.current).width)
}


  return (
    <div>
      <button ref={buttonRef} onClick={handleClick}>Click to do smth</button>
      <input type="text" placeholder="enter smth" />
    </div>
  )
}

export default RefExample