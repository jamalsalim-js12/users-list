const Modal = ({ isOpen, closeModal, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
