import React from "react";
import "./Modal.css";

const Modal = ({isOpen, setClose}) => {
  if(isOpen){
    return (
      <div className="backModal">
        <div className="contentModal">
          <p>Modal</p>
          <button onClick={setClose}>Fechar</button>
        </div>
      </div>
    );
  }
    
  return null;
};

export default Modal;
