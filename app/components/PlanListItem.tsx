'use client';

import { useState, ChangeEvent, use, useEffect } from 'react';

interface PlanListItemProps {
  hour: number;
  hourLabel: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function PlanListItem(props: PlanListItemProps) {
  const [complete, setComplete] = useState<boolean>(false);
  const [hasValue, setHasValue] = useState<boolean>(false);

  const { hour, hourLabel, name, value, onChange } = props;

  useEffect(() => {
    props.value ? setHasValue(true) : setHasValue(false);
  }, [value]);

  const animate = () => {
    setComplete(!complete);
  };

  const d = new Date();
  const currentHour = d.getHours();

  return (
    <li className={`relative flex items-center mb-2`}>
      {currentHour == hour ? <span className="text-md -ml-6 mr-2 absolute">→</span> : null}
      <label
        className={`${
          currentHour == hour ? 'text-inherit' : 'text-zinc-400'
        } mr-1 sm:mr-4 w-16 font-light`}
      >
        {hourLabel}
      </label>
      <input
        placeholder="Enter a task..."
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full sm:p-4 p-2 bg-zinc-100 transition-all rounded-sm text-sm font-light border-2 border-transparent outline outline-2   duration-700 placeholder:text-zinc-400 placeholder:text-sm dark:bg-zinc-700
        ${
          complete ? 'outline-sky-500 text-sky-500' : 'outline-transparent focus:outline-zinc-400'
        }`}
      />
      {hasValue && (
        <span
          className={`absolute -right-8 material-icons-outlined cursor-pointer transition-all ${
            complete ? 'text-sky-500' : 'text-zinc-400 hover:text-black dark:hover:text-white'
          } `}
          onClick={animate}
        >
          check
        </span>
      )}
    </li>
  );
}
