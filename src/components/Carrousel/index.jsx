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
