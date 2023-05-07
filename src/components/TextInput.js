import React, { useEffect } from 'react';

const TextInput = ({ id, label, placeholder }) => {
  useEffect(() => {
    console.log(`TextInput created with id: ${id}`);
    return () => console.log(`TextInput destroyed with id: ${id}`);
  }, [id]);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} placeholder={placeholder} />
    </div>
  );
};

export default TextInput;
