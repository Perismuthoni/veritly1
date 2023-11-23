import React from 'react';
import '../css/texttoggle.css';
//import dropdown from "../images/dropdown-icon.png";

const textToggle = (props) => {

  // const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  // const toggleAnswer = () => {
  //   setIsAnswerVisible(!isAnswerVisible);
  // };

  return (
    <>
    <div className="toggle">
      <div> 
        <div className="header" >{props.header}</div>
        
      </div>
      <div className="desc" >{props.description}</div>
    </div>


    {/* <div className={`toggle ${isAnswerVisible ? 'expanded' : ''}`}>
      <div className="header"> 
        {props.header}
        <img src={dropdown} alt="drop-down" onClick={toggleAnswer} />
      </div>
      {isAnswerVisible && (
        <div className="desc">{props.description}</div>
      )}
    </div> */}


</>


  );
};

export default textToggle;
