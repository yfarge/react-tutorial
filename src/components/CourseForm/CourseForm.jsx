import React from 'react';
import Modal from '../Modal/Modal';

const CourseForm = ({ course, open, close }) => {
  return (
    <Modal title={`${course.title}`} open={open} close={close}>
      <form id="course-form" style={{ height: '100%' }} onSubmit={() => {}}>
        <div
          style={{ display: 'flex', flexDirection: 'column', margin: '1rem' }}
        >
          <label style={{ display: 'block' }}>Course Title</label>
          <input
            style={{ width: '80%' }}
            id="course-title-input"
            type="text"
          />
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', margin: '1rem' }}
        >
          <label style={{ display: 'block' }}>Meeting Time</label>
          <input
            style={{ width: '80%' }}
            id="course-meeting-input"
            type="text"
          />
        </div>
      </form>
      <div>
        <button
          onClick={close}
          style={{
            float: 'right',
            padding: '1rem 2rem',
            backgroundColor: 'lightgrey',
            borderRadius: '8px',
            margin: '1rem',
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default CourseForm;
