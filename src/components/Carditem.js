import React from "react";
import {Card, Button } from "react-bootstrap";
import './carditem.scss';
const Carditems = () => {
  return (
      <Card className="card"  >
        {/* <Card.Img className="card-img" variant="top" src="./thumb.jpg" />
        */}
        <Card.Body className="card-body">
        <Card.Title className="card-title">web developer</Card.Title> 
          <Card.Text className="card-text">
            <span className="">hello!</span> <br/> <span>I'm Reshma Poudel, proficient in UI/UX, Html, CSS <br/> and have basic knowledge of React JS. </span>
           <br/>  <span>I'm working at cagtu Nepal as an intern in react,js. </span>
          </Card.Text>
          <Button className="card-button" variant="light">Contact me</Button>
        </Card.Body>      </Card>
 
  );
};

export default Carditems;
