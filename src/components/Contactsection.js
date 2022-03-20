import React from "react";
import { Form, Button } from "react-bootstrap";
import { MdLocationPin, MdMailOutline, MdPhoneEnabled } from "react-icons/md";
import "./contactsection.scss";
import Title from "./Title";


const Contactsection = () => {
  return (
    <div className="contact-container">
     <Title name="get in touch" name2="Have a question or feedback? Please fill the form below to get in touch."/>
      <div className="contact-body">
        <div className="location">
          <div className="items">
            <li className="icon">
              <MdLocationPin size={50}/>
            </li>
            <span className="text">
              address <br />
              putalisadak, kathmandu
            </span>
          </div>
          <div className="items">
            <li className="icon">
              <MdMailOutline size={50}/>

            </li>
            <span className="text">
              Email <br /> reshmapoudel815@gmail.com
            </span>
          </div>
          <div className="items">
            <li className="icon">
              <MdPhoneEnabled size={50} />
            </li>
            <span className="text">
              Phone number <br /> 98411111
            </span>
          </div>
        </div>
        <Form className="form">
          <span className="text">
            Fill This Form And We Will Get Back To You As Soon As Possible!
          </span>
          <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Fullname" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="Email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>PhoneNumber</Form.Label>
            <Form.Control placeholder="Without country code" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Message</Form.Label>
            <Form.Control type="name" placeholder="Enter Your Message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contactsection;
