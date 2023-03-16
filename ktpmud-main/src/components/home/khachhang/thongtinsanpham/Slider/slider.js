import React from 'react'
import "./slider.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const slider = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'ease-in',
      };
  return (
    <div className="products">
        <Slider {...settings}>
            <div className="product">
            <div className="products__item ">
                  <img src="/image/spSlider-2.jpg" alt="" />
            </div>
            </div>
            <div className="product">
            <div className="products__item ">
                  <img src="/image/spSlider-3.jpg" alt="" />
            </div>
            </div>
            <div className="product">
            <div className="products__item ">
                  <img src="/image/spSlider-4.jpg" alt="" />
            </div>
            </div>
        </Slider>
      </div>
  )
}

export default slider