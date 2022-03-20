import React from 'react';
import { About } from './About';
import { Profile } from './Profile';
import './resumecon.scss';

export const ResumeCont = () => {
  return (
    <div className='resume-section'>
        <Profile />
        <About />
    </div>
  )
}
