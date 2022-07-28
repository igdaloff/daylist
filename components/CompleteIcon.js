import { useState } from 'react'
import styles from '../styles/Home.module.scss'


export default function CompleteIcon() {
  const [complete, setComplete] = useState(false);

  const animate = () => {
    setComplete(!complete)       
  }

  const completeCheckmarkStyle = {      
    transform: "rotate(360deg)",
    transition: "ease-in 0.4s",
    color: "green"   
  }

  return(
    <span
      style={complete ? completeCheckmarkStyle : null}
      className={"completeIcon material-icons-outlined " + [complete ? 'complete' : null]}
      onClick={animate}
    >check_circle        
    </span>            
  )
}