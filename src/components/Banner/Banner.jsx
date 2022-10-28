import React from 'react';
import AuthButton from '../AuthButton/AuthButton';

const Banner = ({ title }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1>{title}</h1>
      <AuthButton />
    </div>
  );
};

export default Banner;
