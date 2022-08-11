import React, { useEffect, useState } from 'react'
import PlanListItem from './PlanListItem'
import styles from '../styles/Plan.module.scss'

export default function PlanList() {
  
  const [values, setValues] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });       
  };

  // Get today's date as a string, for localstorage key  
  const d = new Date();
  const year = d.getFullYear().toString();
  const month = (d.getMonth() + 1).toString();
  const day = d.getDate().toString();
  const localStorageKey = year + month + day;

  // Get values from local storage, if they exist
  useEffect(() => {
    const storedItems = window.localStorage.getItem(localStorageKey);
    if ( storedItems !== null ) {
      setValues(JSON.parse(storedItems))
    }
  }, []);

  // Set values to local storage
  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(values))
  }, [values]);  
  
  return ( 
    <>            
      <form className={styles.planForm} autoComplete="off">
        <ul>
          <PlanListItem 
            hourLabel="6:00a"
            hour="6"
            value={values.todo6 || ''}
            name="todo6" 
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hourLabel="7:00a"
            hour="7"
            value={values.todo7 || ''} 
            name="todo7"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hourLabel="8:00a"
            hour="8"
            value={values.todo8 || ''} 
            name="todo8"           
            onChange={handleInputChange}                   
          />    
          <PlanListItem 
            hourLabel="9:00a"
            hour="9"
            value={values.todo9 || ''} 
            name="todo9"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hourLabel="10:00a"
            hour="10"
            value={values.todo10 || ''} 
            name="todo10"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hourLabel="11:00a"
            hour="11"
            value={values.todo11 || ''} 
            name="todo11"           
            onChange={handleInputChange}                   
          />    
          <PlanListItem 
            hourLabel="12:00p"
            hour="12"
            value={values.todo12 || ''} 
            name="todo12"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hourLabel="1:00p"
            hour="13"
            value={values.todo13 || ''} 
            name="todo13"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hourLabel="2:00p"
            hour="14"
            value={values.todo14 || ''} 
            name="todo14"           
            onChange={handleInputChange}                   
          />    
          <PlanListItem 
            hourLabel="3:00p"
            hour="15"
            value={values.todo15 || ''} 
            name="todo15"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hourLabel="4:00p"
            hour="16"
            value={values.todo16 || ''} 
            name="todo16"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hourLabel="5:00p"
            hour="17"
            value={values.todo17 || ''} 
            name="todo17"           
            onChange={handleInputChange}                   
          />    
          <PlanListItem 
            hourLabel="6:00p"
            hour="18"
            value={values.todo18 || ''} 
            name="todo18"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hourLabel="7:00p"
            hour="19"
            value={values.todo19 || ''} 
            name="todo19"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hourLabel="8:00p"
            hour="20"
            value={values.todo20 || ''} 
            name="todo20"           
            onChange={handleInputChange}                   
          />    
          <PlanListItem 
            hourLabel="9:00p"
            hour="21"
            value={values.todo21 || ''} 
            name="todo21"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hourLabel="10:00p"
            hour="22"
            value={values.todo22 || ''} 
            name="todo22"           
            onChange={handleInputChange}                   
          />
          <PlanListItem 
            hourLabel="11:00p"
            hour="23"
            value={values.todo23 || ''} 
            name="todo23"           
            onChange={handleInputChange}                   
          />     
          <PlanListItem 
            hourLabel="12:00p"
            hour="24"
            value={values.todo24 || ''} 
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