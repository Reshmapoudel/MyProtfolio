import React from "react";
import { Card,CardGroup } from "react-bootstrap";
import './blogsection.scss';
export const Blogsection = () => {
  return (
  
   
    <CardGroup className="card-sec">
    <Card className="card-item">
      <div className="blogs-image"></div>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
         
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card className="card-item">
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to
          additional content.{" "}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card className="card-item">
      <div className="blog-img">

      </div>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This card has even longer content
          than the first to show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  </CardGroup>

  );
};
