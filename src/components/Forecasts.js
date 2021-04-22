import React, {useState} from 'react';
import Forecastdetails from './Forecastdetails';
import {forecastData} from '../data';
import './Forecasts.css';

const Forecasts = () => {
  const [showModal, setShowModal] = useState(false);
  const [question, setQuestion] = useState();
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [current, setCurrent] = useState();
  const [amount, setAmount] = useState();
  const [position, setPosition] = useState();

  const showDetails = (question, current, date, title, amount, position) => {
    setShowModal(true);
    setQuestion(question);
    setCurrent(current);
    setDate(date);
    setTitle(title);
    setAmount(amount);
    setPosition(position);
  }; // function sets the details for the forecast details component when the div clicked

  return (
    <div className='forecast'>
      {/* map through the data.js file and display forecast on cards */}
      {forecastData.map((data, key) => {
        return (
          <div key={key} className='forecast-container'>
            <div className='forecast-card'>
              <div className='forecast-title'>
                <h3>{data.title}</h3>
              </div>
              <div
                className='forecast-info'
                onClick={() =>
                  showDetails(
                    data.question,
                    data.current_forecast,
                    data.due_date,
                    data.title,
                    data.num_of_forecast,
                    data.position
                  )
                }
              >
                <h2>{data.question}</h2>
              </div>
            </div>
            {/* show forecast details if the showModal is true */}

            {showModal && (
              <Forecastdetails
                title={title}
                question={question}
                date={date}
                current={current}
                showDetails={() => setShowModal(false)}
                amount={amount}
                position={position}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Forecasts;
