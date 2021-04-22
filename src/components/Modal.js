import React from 'react';
import './Modal.css';

const Modal = (props) => {
  return (
    <>
      <div className='overlay' onClick={props.closeModal}></div>
      <div className='modal'>
        <header className='modal-header'>
          <h1>{props.title}</h1>
          <button onClick={props.closeModal} className='close-button'>
            &times;
          </button>
        </header>
        <main className='modal-content'>{props.children}</main>
      </div>
    </>
  );
};

export default Modal;
