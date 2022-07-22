import styles from '../styles/Home.module.scss'

const Plan = () => {
  return ( 
    <>
      <h1>What do you want to do today?</h1>
      <h2>Thu Jul 21 2022</h2>      
      <form className={styles.planForm}>
        <ul>
          <li className={styles.hourListItem}>
            <label>6:00a</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>            
          </li>
          <li className={styles.hourListItem}>
            <label>7:00a</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.hourListItem}>
            <label>8:00a</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.hourListItem}>
            <label>9:00a</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.hourListItem}>
            <label>10:00a</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.hourListItem}>
            <label>11:00a</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.hourListItem}>
            <label>12:00p</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.hourListItem}>
            <label>1:00p</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.hourListItem}>
            <label>2:00p</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.hourListItem}>
            <label>3:00p</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.hourListItem}>
            <label>4:00p</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.hourListItem}>
            <label>5:00p</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.hourListItem}>
            <label>6:00p</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.hourListItem}>
            <label>7:00p</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.hourListItem}>
            <label>8:00p</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.hourListItem}>
            <label>9:00p</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.hourListItem}>
            <label>10:00p</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.hourListItem}>
            <label>11:00p</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.hourListItem}>
            <label>12:00p</label>
            <input placeholder="A thing to do..." />
            <span className="material-icons-outlined">check_circle</span>
          </li>
          <li className={styles.notesListItem}>
            <label className={styles.notesLabel}>Notes</label>
            <textarea rows="8" placeholder="Recap or reflect on the day...">
            </textarea>
          </li>
        </ul>

      </form>      
    </>
  );
}
 
export default Plan;