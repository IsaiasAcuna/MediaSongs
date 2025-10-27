import React from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ResponsiveProps {
  children: React.ReactNode
}

export const Responsive: React.FC<ResponsiveProps> = ({ children }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, // ✅ correcto,
          arrows: false
        }
      }
    ]
  };



  return (
    <div className="w-[100%] lg:w-[96%] mx-auto">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
}


