'use client';

import React, { useEffect, useState } from 'react';
import PlanListItem from './PlanListItem';

export default function PlanList() {
  const [values, setValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
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
    try {
      const storedItems = window.localStorage.getItem(localStorageKey);
      if (storedItems) {
        setValues(JSON.parse(storedItems));
      }
    } catch (e) {
      console.error('Error parsing JSON from localStorage:', e);
    }
  }, [localStorageKey]);

  // Set values to local storage
  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(values));
  }, [values, localStorageKey]);

  const renderPlanListItems = () => {
    const planListItems = [];
    for (let i = 6; i <= 24; i++) {
      const hourLabel = i <= 12 ? `${i}:00${i < 12 ? 'a' : 'p'}` : `${i - 12}:00p`;
      const name = `todo${i}`;
      planListItems.push(
        <PlanListItem
          key={name}
          hourLabel={hourLabel}
          hour={i.toString()}
          value={values[name] || ''}
          name={name}
          onChange={handleInputChange}
        />
      );
    }
    return planListItems;
  };
  return (
    <>
      <form className="planForm" autoComplete="off">
        <ul>
          {renderPlanListItems()}
          <li className="notesListItem relative flex mb-2 items-start pt-4 mt-4 border-t border-t-zinc-200">
            <label className="notesLabel mr-1 sm:mr-4 w-16 text-zinc-400 font-light">Notes</label>
            <textarea
              rows="8"
              placeholder="Recap or reflect on the day..."
              value={values.note}
              onChange={handleInputChange}
              name="note"
              label="Note"
              className="w-full sm:p-4 p-2 bg-zinc-100 border-2 border-transparent rounded-sm text-sm font-light outline-2 outline-transparent focus:outline-zinc-400 duration-700 placeholder:text-zinc-400 placeholder:text-sm dark:bg-zinc-700 resize-none"
            ></textarea>
          </li>
        </ul>
      </form>
    </>
  );
}
