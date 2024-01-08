import React from "react";
import Slider from "react-slick";
const Adu = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          d{" "}
          <img
            src="https://nodemy.vn/wp-content/uploads/2023/03/img.png"
            alt=""
          />
        </div>
        <div>d</div>
        <div>d</div>
        <div>d</div>
        <div>d</div>
      </Slider>
    </div>
  );
};
export default Adu;
