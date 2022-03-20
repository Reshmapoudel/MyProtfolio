import React from "react";
import "./poster.scss";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { GrMail } from "react-icons/gr";
const Poster = () => {
  return (
    <div className="poster">
      {/* <div className="socio-link"> */}
        <div class="row">
          <div class="column" >
          <AiFillLinkedin className="socio-item" />
          </div>
          <div class="column" >

        <AiFillFacebook className="socio-item" />
          </div>
        </div>

        <div class="row">
          <div class="column">
          <AiFillInstagram className="socio-item" />
          </div>
          <div class="column">
          <GrMail className="socio-item" />
          </div>
        </div>
       
        
        
      {/* </div> */}
    </div>
  );
};
export default Poster;
