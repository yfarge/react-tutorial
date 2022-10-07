import './Modal.css';

const Modal = ({ title, children, open, close }) => (
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
        <h2>{title}</h2>
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

export default Modal;
