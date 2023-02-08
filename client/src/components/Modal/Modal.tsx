const Modal = ({ content, toggleModal }) => {
  return (
    <div>
      <div>{content}</div>
      <button onClick={toggleModal}>Close Modal</button>
    </div>
  );
};
export default Modal;
