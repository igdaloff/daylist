import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.scss'

export default function Plan() {

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

  // Get today's date
  const d = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  const date = String(d.getDate()).padStart(2, '0');
  const year = d.getFullYear()
  const today = days[d.getDay()] + ", " + months[d.getMonth()] + " " + date + ", " + year;
  
  // Checkmark component and click animation
  const CompleteIcon = () => {
    const [complete, setComplete] = useState(false);

    const animate = () => {
      setComplete(!complete)       
    }

    const completeStyle = {      
      transform: "rotate(360deg)",
      transition: "ease-in 0.4s",
      color: "green"      
    }

    return(
      <span style={complete ? completeStyle : null} className="completeIcon material-icons-outlined"  onClick={animate}>check_circle</span>            
    )
  }


  return ( 
    <>
      <h1>What do you want to do today?</h1>
      <h2>{today}</h2>      
      <form className={styles.planForm}>
        <ul>
          <li className={styles.hourListItem}>
            <label>6:00a</label>
            <input
              placeholder="A thing to do..."
              type="text"
              value={values.todo6}                
              onChange={handleInputChange}            
              name="todo6"                 
              label="Todo"                     
            />
            <CompleteIcon />
          </li>
          <li className={styles.hourListItem}>
            <label>7:00a</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo7}
              onChange={handleInputChange}            
              name="todo7"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
          <li className={styles.hourListItem}>
            <label>8:00a</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo8}
              onChange={handleInputChange}            
              name="todo8"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
          <li className={styles.hourListItem}>
            <label>9:00a</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo9}
              onChange={handleInputChange}            
              name="todo9"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
          <li className={styles.hourListItem}>
            <label>10:00a</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo10}
              onChange={handleInputChange}            
              name="todo10"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
          <li className={styles.hourListItem}>
            <label>11:00a</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo11}
              onChange={handleInputChange}            
              name="todo11"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
          <li className={styles.hourListItem}>
            <label>12:00p</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo12}
              onChange={handleInputChange}            
              name="todo12"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
          <li className={styles.hourListItem}>
            <label>1:00p</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo13}
              onChange={handleInputChange}            
              name="todo13"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
          <li className={styles.hourListItem}>
            <label>2:00p</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo14}
              onChange={handleInputChange}            
              name="todo14"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
          <li className={styles.hourListItem}>
            <label>3:00p</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo15}
              onChange={handleInputChange}            
              name="todo15"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
          <li className={styles.hourListItem}>
            <label>4:00p</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo16}
              onChange={handleInputChange}            
              name="todo16"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
          <li className={styles.hourListItem}>
            <label>5:00p</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo17}
              onChange={handleInputChange}            
              name="todo17"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
          <li className={styles.hourListItem}>
            <label>6:00p</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo18}
              onChange={handleInputChange}            
              name="todo18"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
          <li className={styles.hourListItem}>
            <label>7:00p</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo19}
              onChange={handleInputChange}            
              name="todo19"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
          <li className={styles.hourListItem}>
            <label>8:00p</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo20}
              onChange={handleInputChange}            
              name="todo20"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
          <li className={styles.hourListItem}>
            <label>9:00p</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo21}
              onChange={handleInputChange}            
              name="todo21"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
          <li className={styles.hourListItem}>
            <label>10:00p</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo22}
              onChange={handleInputChange}            
              name="todo22"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
          <li className={styles.hourListItem}>
            <label>11:00p</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo23}
              onChange={handleInputChange}            
              name="todo23"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
          <li className={styles.hourListItem}>
            <label>12:00p</label>
            <input
              placeholder="A thing to do..."
              type="text"                  
              value={values.todo24}
              onChange={handleInputChange}            
              name="todo24"                 
              label="Todo"       
            />
            <CompleteIcon />            
          </li>
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