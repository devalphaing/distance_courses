import React, { useEffect, useState } from 'react'
import './ImageSlide.css'
import { Fragment } from 'react'
import imageOne from '../assets/image1.1.jpg'
import imageTwo from '../assets/image1.2.jpg'

const ImageSlide = () => {
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlag((prevFlag) => !prevFlag);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Fragment>
            <div className='container-imageSlide'>
                <img
                    src={flag ? imageOne : imageTwo}
                    alt={flag ? 'img1' : 'img2'}
                />
            </div>
        </Fragment>
    );
};

export default ImageSlide;
