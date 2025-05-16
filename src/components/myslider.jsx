// src/components/MySlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 👉 Import local images from assets
import shirts4 from "../assets/shirts4.jpg";
import poster1 from "../assets/poster1.jpg";

import cups from "../assets/cups.jpg";
import bag from "../assets/bag.jpg";
import receipt1 from "../assets/receipt1.jpg";
import cert2 from "../assets/cert2.jpg";

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
        },
      },
    ],
  };

  const slides = [
    { title: "shirts", image: shirts4 },
    { title: "posters", image: poster1 },
    { title: "receipt books", image: receipt1 },
    { title: "certificates", image: cert2 },
    { title: "General branding", image: cups },
    { title: "Bags", image: bag },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative h-[50vh] md:h-[65vh] flex items-center justify-center w-full overflow-hidden ">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-[400px] h-[300px] md:w-[700px] md:h-[500px] p-[50px] md:p-[100px] "
              />
              <div className="absolute inset-0 mt-70 flex items-center justify-center">
                <h2 className="text-white text-2xl md:text-4xl font-bold bg-black/50 px-6 py-3 rounded-lg">
                  {slide.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
