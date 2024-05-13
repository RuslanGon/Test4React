import { useRef } from "react"


const RefExample = () => {

const buttonRef = useRef(null)

  return (
    <div>
      <button ref={buttonRef}>Click to do smth</button>
      <input type="text" placeholder="enter smth" />
    </div>
  )
}

export default RefExample