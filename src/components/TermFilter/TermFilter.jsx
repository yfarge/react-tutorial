import React, { useState } from 'react';
import TermButton from '../TermButton/TermButton';
import './TermFilter.css';

const terms = ['Fall', 'Winter', 'Spring'];

const TermFilter = ({ term, setTerm }) => {
  return (
    <div className="radio-toolbar">
      {terms.map((value, idx) => (
        <TermButton
          key={idx}
          term={value}
          setTerm={setTerm}
          checked={term === value}
        />
      ))}
    </div>
  );
};

export default TermFilter;
