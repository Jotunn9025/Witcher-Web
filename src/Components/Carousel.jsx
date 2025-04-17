import { React, useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import images from "../importImages";
import "./Carousel.css";
function Carousel({ selectedIndex, setSelectedIndex, characters }) {
  useEffect(() => {
    const arrows = document.querySelectorAll(".slick-arrow");
    const dots = document.querySelectorAll(".slick-dots");
    const handleClick = () => {
      setSelectedIndex(null);
    };
    arrows.forEach((arrow) => {
      arrow.addEventListener("click", handleClick);
    });
    dots.forEach((dot) => {
      dot.addEventListener("click", handleClick);
    });
    return () => {
      arrows.forEach((arrow) => {
        arrow.removeEventListener("click", handleClick);
      });
      dots.forEach((dot) => {
        dot.removeEventListener("click", handleClick);
      });
    };
  }, [setSelectedIndex]);
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: !selectedIndex ? 4 : 3,
    slidesToScroll: 1,
    speed: 400,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: !selectedIndex ? 3 : 2,
          centerMode: true,
          variableWidth: false,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          variableWidth: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: false,
        },
      },
    ],
  };
  useEffect(() => {
    if (sliderRef.current) {
      if (selectedIndex !== null) {
        sliderRef.current.slickPause();
      } else {
        sliderRef.current.slickPlay();
      }
    }
  }, [selectedIndex]);
  const handleCardClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <>
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {characters.map((char, index) => (
            <div key={index} onClick={() => handleCardClick(index)}>
              {selectedIndex === null ? (
                <Card name={char.name} img_src={images[char.image]} />
              ) : (
                <Card
                  name={char.name}
                  img_src={images[char.image]}
                  selected={selectedIndex === index}
                  anySelected={true}
                />
              )}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
