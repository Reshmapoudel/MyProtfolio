import React from "react";
import {  Container, Navbar } from "react-bootstrap";
import "./Navigation.scss";
import { Link } from "react-router-dom";


const Navigation = () => {
  return (
    <div>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            reshma
          </Navbar.Brand>
          <ul className="ml-auto navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
            </li>
           
            <li className="nav-item">
            <Link to="/work" className="nav-link">Work</Link>
            </li>
            <li className="nav-item">
            <Link to="/resume" className="nav-link">Resume</Link>
            </li>
            <li className="nav-item">
            <Link to="/blogs" className="nav-link">Blogs</Link>
            </li>
            <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>

        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
