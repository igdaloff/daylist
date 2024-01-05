import React, { useEffect, useState } from 'react'
import PlanListItem from './PlanListItem'

export default function PlanList() {
  const [values, setValues] = useState('')

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  // Get today's date as a string, for localstorage key
  const d = new Date()
  const year = d.getFullYear().toString()
  const month = (d.getMonth() + 1).toString()
  const day = d.getDate().toString()
  const localStorageKey = year + month + day

  // Get values from local storage, if they exist
  useEffect(() => {
    const storedItems = window.localStorage.getItem(localStorageKey)
    if (storedItems !== null) {
      setValues(JSON.parse(storedItems))
    }
  }, [])

  // Set values to local storage
  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(values))
  }, [values])

  const renderPlanListItems = () => {
    const planListItems = []
    for (let i = 6; i <= 24; i++) {
      const hourLabel = i <= 12 ? `${i}:00${i < 12 ? 'a' : 'p'}` : `${i - 12}:00p`
      const name = `todo${i}`
      planListItems.push(
        <PlanListItem
          key={name}
          hourLabel={hourLabel}
          hour={i.toString()}
          value={values[name] || ''}
          name={name}
          onChange={handleInputChange}
        />
      )
    }
    return planListItems
  }
  return (
    <>
      <form className='planForm' autoComplete='off'>
        <ul>
          {renderPlanListItems()}
          <li className='notesListItem'>
            <label className='notesLabel'>Notes</label>
            <textarea
              rows='8'
              placeholder='Recap or reflect on the day...'
              value={values.note}
              onChange={handleInputChange}
              name='note'
              label='Note'></textarea>
          </li>
        </ul>
      </form>
    </>
  )
}
