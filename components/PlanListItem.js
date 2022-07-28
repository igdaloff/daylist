import { useState } from 'react'
import styles from '../styles/Plan.module.scss'
import variables from '../styles/_variables.module.scss'

export default function PlanListItem(props) {

  const [complete, setComplete] = useState(false);

  const animate = () => {
    setComplete(!complete)       
  }

  const completeInputStyle = {
    borderColor: variables.green,
    outlineColor: variables.green,
    transition: "ease-in 0.25s",
  }

  const completeCheckmarkStyle = {      
    transform: "rotate(360deg)",
    transition: "ease-in 0.4s",
    color: variables.green   
  }

  return ( 
    <li className={styles.hourListItem}>
      <label>{props.hour}</label>
      <input
        placeholder="Enter a thing to do..."
        type="text"
        label="Todo" 
        name={props.name}
        value={props.value}
        onChange={props.onChange}    
        style={complete ? completeInputStyle : null}   
      />
      <span
        style={complete ? completeCheckmarkStyle : null}
        className="completeIcon material-icons-outlined"
        onClick={animate}
      >check_circle        
      </span>        
    </li>    
  );
}