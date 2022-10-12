import React, { useState } from 'react';
import { useRef } from 'react';
import Modal from '../Modal/Modal';

const CourseForm = ({ course, open, close }) => {
  const [title, setTitle] = useState('');
  const [meets, setMeets] = useState('');
  return (
    <Modal title={`${course.title}`} open={open} close={close}>
      <form
        id="course-form"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          margin: '1rem',
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <label style={{ width: '100%' }}>
          Course Title
          <input
            style={{
              display: 'block',
              width: '100%',
              border: 'solid 1px grey',
              boxSizing: 'border-box',
              borderRadius: '4px',
              padding: '10px',
              marginTop: '2px',
            }}
            id="course-title-input"
            type="text"
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </label>
        <label style={{ width: '100%' }}>
          Meeting Time
          <input
            style={{
              display: 'block',
              width: '100%',
              border: 'solid 1px grey',
              boxSizing: 'border-box',
              borderRadius: '4px',
              padding: '10px',
              marginTop: '2px',
            }}
            id="course-meeting-input"
            type="text"
            onChange={(e) => setMeets(e.currentTarget.value)}
          />
        </label>
      </form>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '1rem',
        }}
      >
        <button
          onClick={close}
          style={{
            padding: '0.5rem 2rem',
            backgroundColor: 'grey',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            color: 'white',
          }}
        >
          Cancel
        </button>
        <button
          form="course-form"
          onClick={close}
          style={{
            padding: '0.5rem 2rem',
            backgroundColor: 'grey',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            color: 'white',
          }}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default CourseForm;
