import { useState } from 'react';
import variables from '../styles/_variables.module.scss';

export default function PlanListItem(props) {
  const [complete, setComplete] = useState(false);

  const { hour, hourLabel, name, onChange, value } = props;

  const animate = () => {
    setComplete(!complete);
  };

  const completeInputStyle = {
    outlineColor: variables.blue,
    transition: 'ease-in 0.25s',
  };

  const completeCheckmarkStyle = {
    transform: 'rotate(360deg)',
    transition: 'ease-in 0.4s',
    color: variables.blue,
  };

  const currentArrowStyle = {
    fontSize: '1em',
    marginLeft: '-1.5em',
    marginRight: '0.5em',
  };

  const d = new Date();
  const currentHour = d.getHours();

  return (
    <li className={`${currentHour == hour ? 'activeHour' : null} hourListItem`}>
      {currentHour == hour ? <span style={currentArrowStyle}>→</span> : null}
      <label>{hourLabel}</label>
      <input
        placeholder="Enter a task..."
        type="text"
        label="Todo"
        hour={hour}
        name={name}
        value={value}
        onChange={onChange}
        style={complete ? completeInputStyle : null}
      />
      {value && (
        <span
          style={complete ? completeCheckmarkStyle : null}
          className="completeIcon material-icons-outlined"
          onClick={animate}
        >
          check_circle
        </span>
      )}
    </li>
  );
}
