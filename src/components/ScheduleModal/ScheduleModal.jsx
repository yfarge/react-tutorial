import './ScheduleModal.css';

const ScheduleModal = ({ children, open, close }) => (
  <div
    className={`${open ? 'modal-show' : 'modal'}`}
    tabIndex="-1"
    role="dialog"
    onClick={(evt) => {
      if (evt.target === evt.currentTarget) close();
    }}
  >
    <div className="modal-content">
      <div className="modal-header">
        <h2>Course Plan</h2>
        <div
          role="button"
          className="close-btn"
          type="button"
          aria-label="Close"
          onClick={close}
        />
      </div>
      {children}
    </div>
  </div>
);

export default ScheduleModal;
