import React from 'react';

const TermButton = ({ term, setTerm, checked }) => (
  <>
    <input
      type="radio"
      id={term}
      data-cy={term}
      autoComplete="off"
      checked={checked}
      onChange={() => setTerm(term)}
    />
    <label htmlFor={term}>{term}</label>
  </>
);

export default TermButton;
