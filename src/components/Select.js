import React, { useEffect } from 'react';

const Select = ({ id, label, options }) => {
  useEffect(() => {
    console.log(`SelectInput created with id: ${id}`);
    return () => console.log(`SelectInput destroyed with id: ${id}`);
  }, [id]);
  
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
