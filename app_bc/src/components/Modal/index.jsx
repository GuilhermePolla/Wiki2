import "./styles.css";

function Modal(props) {
  return (
    <div className="modal">
      <div className="modalContainer">{props.children}</div>
    </div>
  );
}

export default Modal;
