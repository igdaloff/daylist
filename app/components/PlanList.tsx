'use client';

import React, { useEffect, useState, ChangeEvent } from 'react';
import PlanListItem from './PlanListItem';

interface PlanFormValues {
  [key: string]: string;
}

export default function PlanList() {
  const localStorageKey: string = new Date().toLocaleDateString().slice(0, 10).replace(/\//g, '-');

  const [values, setValues] = useState<PlanFormValues>(() => {
    try {
      const storedItems = window.localStorage.getItem(localStorageKey);
      return storedItems ? JSON.parse(storedItems) : {};
    } catch (error) {
      console.error('Error parsing stored items:', error);
      return {};
    }
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(values));
  }, [values, localStorageKey]);

  const renderPlanListItems = () => {
    const planListItems = [];

    for (let i = 6; i <= 24; i++) {
      const hourLabel = i <= 12 ? `${i}:00${i < 12 ? 'a' : 'p'}` : `${i - 12}:00p`;
      const name = `todo${i}`;

      const value = values[name] !== undefined ? values[name] : '';

      planListItems.push(
        <PlanListItem
          key={name}
          hourLabel={hourLabel}
          hour={i}
          value={value}
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
              rows={8}
              placeholder="Recap or reflect on the day..."
              value={values ? values.note : ''}
              onChange={handleInputChange}
              name="note"
              className="w-full sm:p-4 p-2 bg-zinc-100 border-2 border-transparent rounded-sm text-sm font-light outline-2 outline-transparent focus:outline-zinc-400 duration-700 placeholder:text-zinc-400 placeholder:text-sm dark:bg-zinc-700 resize-none"
            ></textarea>
          </li>
        </ul>
      </form>
    </>
  );
}
