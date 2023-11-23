import React, { useState } from 'react';
import dropdown from "../images/dropdown-icon.png";
import '../css/faq.css';

const FAQ = (props) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div className={`faq ${isAnswerVisible ? 'expanded' : ''}`}>
      <div className="faq-question"> 
        {props.title}
        <img src={dropdown} alt="drop-down" onClick={toggleAnswer} />
      </div>
      {isAnswerVisible && (
        <div className="faq-answer">{props.description}</div>
      )}
    </div>
  );
};

export default FAQ;
