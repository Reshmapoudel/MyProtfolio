import React from 'react';
import Carditems from './Carditem';
import Poster from './Poster';
import './section.scss';
const Section = () => {
  return (
    <div className='section'> 
      <Carditems />
      <Poster />
    </div>
  )
}

export default Section
