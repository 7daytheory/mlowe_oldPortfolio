import React, { Component } from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';

class IntroductionComponent extends Component {
  render() {
    return (
      <div className="introduction">
        <Avatar src="avatar.jpg" size={200} />
        <p className="introduction-text">
          I was hired by Strategic Transitions half way through my final year
          during a project they did with our class as a web developer. I quickly
          moved forward with the company who at the time sold all their products
          by CD and shipping them to customers. I developed an online
          subscription system so they could sell in licenses in bulk; this
          license management system is now used for all of our apps and programs
          (over 60).
          <br />
          <br />I now am focusing on improving my front end development
          knowledge and am very interested in React, I have taken 4 night
          courses on React and I am currently taking a course solely on Redux.
        </p>
      </div>
    );
  }
}

export default IntroductionComponent;
