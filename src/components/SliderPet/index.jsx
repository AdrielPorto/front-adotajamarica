import { useState, useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

import SliderItem from "../sliderItem";
import Slider from "../slider";

const SliderPet = (fotos) => {
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    if (fotos) {
      const objetosFotos = fotos.fotos.map((foto, index) => {
        const chave = `BG${index + 1}`;
        return { [chave]: `${api.defaults.baseURL}/files/${foto}` };
      });

      setImageUrl(objetosFotos);
    }
  }, [fotos]);

  return (
    <Container>
      <div className="ContainerSLiderPet">
        <Slider imageUrl={imageUrl}>
          {imageUrl.map((item, index) => (
            <SliderItem key={index}>
              <img src={item[`BG${index + 1}`]} alt="Pet" />
            </SliderItem>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default SliderPet;
