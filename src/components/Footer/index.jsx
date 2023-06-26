import { FooterWrapper, Icones } from "./styles";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import logoFooter from "../../assets/images/logoAdotaJaMarica_footer.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <div className="logos">
          <Link to="/" className="logo-footer">
            <img src={logoFooter} alt="Logo Adota Já Maricá" />
          </Link>
          <div className="social_media">
            <Icones href="https://pt-br.facebook.com">
              <BsFacebook />
            </Icones>

            <Icones href="https://www.instagram.com">
              <BsInstagram />
            </Icones>
            <Icones href="https://www.gmail.com">
              <MdEmail />
            </Icones>
            <Icones href="https://www.whatsapp.com">
              <BsWhatsapp />
            </Icones>
          </div>
        </div>

        <div className="desenvolvedores">
          <span>Copyright © 2023 - Todos os Direitos Reservados</span>
          <p>
            Desenvolvido por:{" "}
            <a href="https://github.com/vinicyusAbreu">Vinicius de Abreu</a>
            {` & `}
            <a href="https://github.com/AdrielPorto">Adriel Porto</a>
          </p>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
