import React, { useState } from "react";
import "./ImageCarousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageCarousel.css";

import imageOne from "../assets/image1.1.jpg";
import imageTwo from "../assets/image1.2.jpg";

const ImageCarousel = () => {
  const images = [
    imageOne,
    imageTwo,
    imageOne,
    imageTwo,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleOnChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Carousel
      selectedItem={currentSlide}
      onChange={handleOnChange}
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      swipeable
    >
      {images.map((image, index) => (
        <div key={index} className="carousel-item">
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
