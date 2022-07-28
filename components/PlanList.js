import React, { useEffect, useState } from 'react'
import PlanListItem from './PlanListItem'
import styles from '../styles/Plan.module.scss'

export default function PlanList() {
  
  const [values, setValues] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });       
  };

  // Get values from local storage, if they exist
  useEffect(() => {
    const storedItems = window.localStorage.getItem('values');
    if ( storedItems !== null ) {
      setValues(JSON.parse(storedItems))
    }
  }, []);

  // Set values to local storage
  useEffect(() => {
    window.localStorage.setItem('values', JSON.stringify(values))
  }, [values]);  
  
  return ( 
    <>            
      <form className={styles.planForm}>
        <ul>
          <PlanListItem 
            hour="6:00a"
            value={values.todo6}
            name="todo6" 
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hour="7:00a"
            value={values.todo7} 
            name="todo7"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hour="8:00a"
            value={values.todo8} 
            name="todo8"           
            onChange={handleInputChange}                   
          />    
          <PlanListItem 
            hour="9:00a"
            value={values.todo9} 
            name="todo9"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hour="10:00a"
            value={values.todo10} 
            name="todo10"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hour="11:00a"
            value={values.todo11} 
            name="todo11"           
            onChange={handleInputChange}                   
          />    
          <PlanListItem 
            hour="12:00p"
            value={values.todo12} 
            name="todo12"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hour="1:00p"
            value={values.todo13} 
            name="todo13"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hour="2:00p"
            value={values.todo14} 
            name="todo14"           
            onChange={handleInputChange}                   
          />    
          <PlanListItem 
            hour="3:00p"
            value={values.todo15} 
            name="todo15"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hour="4:00p"
            value={values.todo16} 
            name="todo16"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hour="5:00p"
            value={values.todo17} 
            name="todo17"           
            onChange={handleInputChange}                   
          />    
          <PlanListItem 
            hour="6:00p"
            value={values.todo18} 
            name="todo18"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hour="7:00p"
            value={values.todo19} 
            name="todo19"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hour="8:00p"
            value={values.todo20} 
            name="todo20"           
            onChange={handleInputChange}                   
          />    
          <PlanListItem 
            hour="9:00p"
            value={values.todo21} 
            name="todo21"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hour="10:00p"
            value={values.todo22} 
            name="todo22"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hour="11:00p"
            value={values.todo23} 
            name="todo23"           
            onChange={handleInputChange}                   
          />     
          <PlanListItem 
            hour="12:00p"
            value={values.todo24} 
            name="todo24"           
            onChange={handleInputChange}                   
          />
          
          <li className={styles.notesListItem}>
            <label className={styles.notesLabel}>Notes</label>
            <textarea 
              rows="8"
              placeholder="Recap or reflect on the day..."
              value={values.note} 
              onChange={handleInputChange}            
              name="note"
              label="Note"
            >
            </textarea>  
          </li>
        </ul>

      </form>   
    </>
  )  
}