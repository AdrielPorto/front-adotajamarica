import { GridAdotar } from "./styles";

import adota_1 from "../../assets/images/adota_1.png";
import adota_2 from "../../assets/images/adota_2.png";
import adota_3 from "../../assets/images/adota_3.png";

const AdocaoContainer = () => {
  return (
    <GridAdotar>
      <div className="item-adotar">
        <img src={adota_3} alt="amor pet" />
        <h3> Adotar um pet é amor incondicional.</h3>
        <p>
          Ao adotar um pet, você recebe algo especial em troca: amor
          incondicional. Esses animais estão esperando ansiosamente por um lar
          amoroso e se tornarão seus companheiros leais, trazendo alegria e
          felicidade para sua vida diária.
        </p>
      </div>

      <div className="item-adotar">
        <img src={adota_2} alt="faça a diferença" />
        <h3>Adotar um pet faz a diferença hoje.</h3>
        <p>
          Ao adotar um pet, você faz uma diferença imediata na vida de um animal
          que precisa de ajuda. Além de ganhar um companheiro fiel, você está
          contribuindo para reduzir o número de animais abandonados e promovendo
          um mundo melhor para eles.
        </p>
      </div>

      <div className="item-adotar">
        <img src={adota_1} alt="Descubra a magia" />
        <h3 className="last_title">Descubra a magia da adoção de pets</h3>
        <p className="last_paragraph">
          A adoção de um pet traz uma magia única para a sua vida. Esses animais
          têm a capacidade de nos ensinar sobre lealdade, empatia e conexões
          profundas. Ao adotar, você vivencia essa magia todos os dias,
          recebendo um amor puro e verdadeiro que ilumina sua existência.
        </p>
      </div>
    </GridAdotar>
  );
};

export default AdocaoContainer;
