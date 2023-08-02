import React, { useState, useEffect } from 'react';
import './SchoolSlider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InfoCard from './InfoCard';

const SchoolSlider = () => {

      return (
        <div className='card-container'>
            <InfoCard />
            <InfoCard />
        </div>
      )
    
}

export default SchoolSlider