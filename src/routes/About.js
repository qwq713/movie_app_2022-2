import React from "react";
import './About.css'

// Route가 그려줄 컴포넌트는 항상 props가 전달됨.
function About(props){
  console.log(props);
  return (
    <div className="about__container">
      <span>
        "Freedom is the freedom to say that two plus two maek four. If that is
        granted, all else follows."
      </span>
      <br />
      <span>- George Orwell, 1984</span>
    </div>
  );
}

export default About;
