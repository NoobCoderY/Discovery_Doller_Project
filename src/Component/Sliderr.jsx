import React from "react";
import "./slider.css";
import Img1 from "../Component/SliderImage/photo_2023-02-01_01-31-26.jpg";
import Img2 from "../Component/SliderImage/photo_2023-02-01_01-31-33.jpg";
import Img3 from "../Component/SliderImage/photo_2023-02-01_01-31-38.jpg";
import Img4 from "../Component/SliderImage/photo_2023-02-01_01-31-42.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Sliderr = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img src={Img1} alt=""></img>
          </div>
          <div>
            <img src={Img2} alt=""></img>
          </div>
          <div>
            <img src={Img3} alt=""></img>
          </div>
          <div>
            <img src={Img4} alt=""></img>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Sliderr;
