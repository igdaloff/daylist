import CompleteIcon from './CompleteIcon'
import styles from '../styles/Home.module.scss'

export default function PlanListItem(props) {

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
      />
      <CompleteIcon />
    </li>    
  );
}