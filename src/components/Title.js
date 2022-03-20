import React from 'react'
import "./title.scss";
const Title = (props) => {
  return (
    <div>
         <span className="title">
        <h1>{props.name}</h1>
        <h5>
          {props.name2}
        </h5>
      </span>
    </div>
  )
}

export default Title