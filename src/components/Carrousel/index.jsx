import Slider from "react-slick";

import { CarrouselContainer } from "./styles";
import LogoTipo from "../../assets/images/logotipoApoiador.png";
const Carrousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1135,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 855,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <CarrouselContainer>
      <Slider {...settings}>
        <div className="item-logo">
          <img src={LogoTipo} alt="Logo Tipo" />
        </div>
        <div className="item-logo">
          <img src={LogoTipo} alt="Logo Tipo" />
        </div>
        <div className="item-logo">
          <img src={LogoTipo} alt="Logo Tipo" />
        </div>
        <div className="item-logo">
          <img src={LogoTipo} alt="Logo Tipo" />
        </div>
        <div className="item-logo">
          <img src={LogoTipo} alt="Logo Tipo" />
        </div>
        <div className="item-logo">
          <img src={LogoTipo} alt="Logo Tipo" />
        </div>
        <div className="item-logo">
          <img src={LogoTipo} alt="Logo Tipo" />
        </div>
        <div className="item-logo">
          <img src={LogoTipo} alt="Logo Tipo" />
        </div>
      </Slider>
    </CarrouselContainer>
  );
};

export default Carrousel;
