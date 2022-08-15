import { useState } from 'react'
import variables from '../styles/_variables.module.scss'

export default function PlanListItem(props) {

  const [complete, setComplete] = useState(false);

  const animate = () => {
    setComplete(!complete)       
  }

  const completeInputStyle = {
    outlineColor: variables.blue,
    transition: "ease-in 0.25s",
  }

  const completeCheckmarkStyle = {      
    transform: "rotate(360deg)",
    transition: "ease-in 0.4s",
    color: variables.blue   
  }

  const currentArrowStyle = {
    fontSize: "1em",
    marginLeft: "-1.5em",
    marginRight: "0.5em"
  }

  const d = new Date();
  const hour = d.getHours();

  return ( 
    <li className="hourListItem">
      {hour == props.hour ? <span style={currentArrowStyle}>→</span> : null}
      <label>{props.hourLabel}</label>
      <input
        placeholder="A thing to do..."
        type="text"
        label="Todo" 
        hour={props.hour}
        name={props.name}
        value={props.value}
        onChange={props.onChange}    
        style={complete ? completeInputStyle : null}
        disabled={complete ? true : false}
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