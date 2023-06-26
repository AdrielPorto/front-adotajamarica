import React from "react";
import { ContainerSlide } from "./styles";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Carousel from "nuka-carousel";

const Slider = ({ children, imageUrl, segPlay }) => {
  return (
    <ContainerSlide imageUrl={imageUrl}>
      <Carousel
        autoplay={segPlay ? true : false}
        autoplayInterval={segPlay}
        wrapAround={true}
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide}>
            <MdArrowBackIosNew />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide}>
            <MdArrowForwardIos />
          </button>
        )}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </Carousel>
    </ContainerSlide>
  );
};

export default Slider;
