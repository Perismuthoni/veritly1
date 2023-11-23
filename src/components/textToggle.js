import React from 'react';
import '../css/texttoggle.css';

const textToggle = (props) => {
  //   const [toggle, setToggle] = useState(toggle);
  return (
    <div className="toggle">
      <div> 
        <div className="header" >{props.header}</div>
        
      </div>
      <div className="desc" >{props.description}</div>
    </div>
  );
};

export default textToggle;
