import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";


const Slider = (props) => {
  const { images,setCurrentIndex,currentIndex,setDirection} = props;

  return (
    <div className=" hero__slider slider">
      <div className="slider__container">
        <div className="slider__arrows">
          <button
            className="slider__arrow slider__arrow--prev"
            type="button"
            aria-label="next slide"
            onClick={
                () =>setCurrentIndex( currentIndex => currentIndex > 0 ? currentIndex - 1: currentIndex)}
            
          ></button>
          <button
            className="slider__arrow slider__arrow--next"
            type="button"
            aria-label="previous slide"
            onClick={
                () => setCurrentIndex( currentIndex => currentIndex < 2 ? currentIndex +1: currentIndex)}
          ></button>
        </div>

        <div className="slider__track">
          <ul className="slider__list">
            {images.map(({desktop,mobile}, i) => {
              return (
                <li
                  className={`slider__slide ${currentIndex === i ? "slider__slide--active": ""}`}
                  key={i}
                  id={`pignation-slide-${i}`}
                >
                <picture>
                    <source srcSet={mobile} media="(max-width:35em)"></source>
                    <img className="slider__image" src={desktop} alt={`image ${i}`}></img>
                </picture>
                </li>
              );
            })}
          </ul>
        </div>

        <ol className="slider__pignation">
          {images.map((item, i) => {
            <li>
              <button
                type="button"
                aria-label={`Go to slide${i}`}
                aria-controls={`pignation-slide-${i}`}
              ></button>
            </li>;
          })}
        </ol>
      </div>
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.array.isRequired,
};

Slider.defaultProps = {
  images: [],
};

export default Slider;
