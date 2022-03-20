import React from "react";
import { Figure, ProgressBar,Button } from "react-bootstrap";
import "./profile.scss";
export const Profile = () => {
  return (
    <div className="profile">
     
      <div>
        <Figure className="profile-title">
          <div className="profile-img"></div>
          <Figure.Caption className="title-caption">
            <span className="title-tag"> name: </span>reshma poudel <br />
            <span className="title-tag">profile: </span> Front end developer
            <br />
            <span className="title-tag">Email: </span> reshmapoudel815@gmail.com
          </Figure.Caption>
        </Figure>
      </div>
      <div className="skills">
       <span>html<ProgressBar striped variant="success" now={90}  className="skill-bar"/> </span>
       css <ProgressBar striped variant="info" now={80} className="skill-bar"/>
       js <ProgressBar striped variant="warning" now={40} className="skill-bar"/>
       react <ProgressBar striped variant="danger" now={40} className="skill-bar"/>
      </div>
      <Button variant="primary" className="button">Download CV</Button>
    </div>
  );
};
