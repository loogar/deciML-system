import React from 'react';
import Modal from './Modal';
import Map from './Map';
import './Forecastdetails.css';

const Forecastdetails = (props) => {
  return (
    <div>
      <Modal title={props.title} closeModal={props.showDetails}>
        {/* opens a modal with forecast details */}
        <div className='details'>
          <div className='details-left'>
            <div className='details-question'>
              <h3>{props.question}</h3>
            </div>
            <div className='details-date'>
              <h4>&#9650;Due date : {props.date}</h4>
            </div>
            <div className='details-forecast'>
              <h4>
                Number of forecasts made : <span>{props.amount}</span>
              </h4>
              <h4>
                Current forecast: <span>{props.current}</span>
              </h4>
            </div>
          </div>
          <div className='details-right'>
            <Map position={props.position} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Forecastdetails;
