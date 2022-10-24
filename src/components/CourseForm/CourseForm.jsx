import React, { useState } from 'react';
import { useFormData } from '../../utilities/useFormData';
import InputField from '../InputField/InputField';
import Modal from '../Modal/Modal';
import { timeParts } from '../../utilities/times';
import { useDbUpdate } from '../../utilities/firebase';

const validateCourseData = (key, val) => {
  switch (key) {
    case 'title':
      return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
    case 'meets':
      return !val || !!timeParts(val).days
        ? ''
        : 'must contain days and start-end, e.g., MWF 12:00-13:20';
    default:
      return '';
  }
};

const CourseForm = ({ course, open, close }) => {
  const [state, change] = useFormData(validateCourseData, course);
  const [update, result] = useDbUpdate(
    `/courses/${course.term.at(0) + course.number}`
  );
  const submit = (evt) => {
    evt.preventDefault();
    console.log('submitted');
    if (!state.errors) {
      console.log(state.values);
      update(state.values);
      close();
    } else close();
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
          name="title"
          text="Course Title"
          state={state}
          change={change}
        />
        <InputField
          name="meets"
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
        <button
          form="course-form"
          type="submit"
          style={{
            padding: '0.5rem 2rem',
            backgroundColor: 'blue',
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
