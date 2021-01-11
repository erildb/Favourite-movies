import React from "react";
import ReactDOM from "react-dom";

const Modal = (porps) => {
  return ReactDOM.createPortal(
    <div onClick={porps.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standart modal visible active"
      >
        <div className="header">{porps.title}</div>
        <div className="content">{porps.content}</div>
        <div className="actions">{porps.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
