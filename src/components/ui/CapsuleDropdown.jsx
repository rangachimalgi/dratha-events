import React from 'react';

const CapsuleDropdown = ({ options, value, onChange, placeholder }) => {
  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={onChange}
        className="appearance-none bg-global-5 text-global-1 font-dm-sans text-base px-6 py-2 rounded-full border border-global-3 focus:outline-none focus:ring-2 focus:ring-global-3 transition-colors cursor-pointer pr-10"
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-black">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </div>
  );
};

export default CapsuleDropdown; 