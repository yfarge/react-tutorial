import React, { useState } from 'react';
import { useFormData } from '../../utilities/useFormData';
import InputField from '../InputField/InputField';
import Modal from '../Modal/Modal';
import { timeParts } from '../../utilities/times';

const validateCourseData = (key, val) => {
  switch (key) {
    case 'course-title':
      return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
    case 'course-meets':
      return !val || !!timeParts(val).days ? '' : 'must contain days and start-end, e.g., MWF 12:00-13:20';
    default:
      return '';
  }
};

const CourseForm = ({ course, open, close }) => {
  const [title, setTitle] = useState('');
  const [meets, setMeets] = useState('');
  const [state, change] = useFormData(validateCourseData, course);
  const submit = (evt) => {
    evt.preventDefault();
    if (!state.errors) {
      update(state.values);
    }
  };

  return (
    <Modal title={`${course.title}`} open={open} close={close}>
      <form
        onSubmit={submit}
        noValidate
        id="course-form"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          margin: '1rem',
        }}
      >
        <InputField
          name="course-title"
          text="Course Title"
          state={state}
          change={change}
        />
        <InputField
          name="course-meets"
          text="Meeting Time"
          state={state}
          change={change}
        />
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
      </div>
    </Modal>
  );
};

export default CourseForm;
