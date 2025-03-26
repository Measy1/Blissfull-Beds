import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./carousel1.jpg" 
import image2 from "./carousel2.jpg"; 
import image3 from "./carousel3.jpg"; 


const BedCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="BED 1" className="carousel-image" />
        </div>
        <div>
          <img src={image2} alt="BED 2" className="carousel-image" />
        </div>
        <div>
          <img src={image3} alt="BED 3" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
};

export default BedCarousel;
