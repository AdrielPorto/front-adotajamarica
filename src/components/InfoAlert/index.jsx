import { Container } from "./styles";

const InfoAlert = () => {
  return (
    <Container>
      <h1>Aviso sobre cadastro de animais de estimação</h1>
      <div className="container_info">
        <p>
          <strong>Aviso Importante: </strong> Antes de colocar um pet para
          adoção, é recomendavel providenciar uma avaliação veterinária para
          garantir a saúde do animal. Certifique-se de vaciná-lo, vermifugá-lo
          e, no caso de cães ou gatos com mais de 6 meses, realizar a castração
          antes da doação.
        </p>
        <p>
          <strong>Atenção: </strong>Este site destina-se exclusivamente à adoção
          de pets. A venda de animais através deste site é totalmente proibida.
          Caso ocorra alguma tentativa de venda, solicitamos que denunciem
          imediatamente pelo e-mail: <strong>adotajamarica@gmail.com</strong>.
        </p>

        <p>
          Pedimos a todos quando o animal for adotado,{" "}
          <strong>entre no seu perfil e marque o animal como ADOTADO</strong>{" "}
          para exclusão do anúncio e para manter o site atualizado. Lembramos
          que todas as informações a respeito dos animais sob a guarda de
          particulares, são de responsabilidade dos anunciantes. o AdotaJáMaricá
          não se responsabiliza por informações recebidas de pets anunciados no
          site, que não estejam sob tutela do grupo.
        </p>

        <p>
          <strong>
            Antes de colocar um animal de estimação para adoção, reflita
            seriamente sobre essa decisão!
          </strong>{" "}
          Há milhares de animais abandonados que precisam de um lar. Se você não
          tem condições de manter seu bichinho com você, procure, primeiramente,
          entre seus conhecidos, parentes, amigos, colegas de trabalho,
          vizinhos, etc., alguém que possa se tornar o novo responsável pelo
          animal. Pense bem antes de doar seu cão ou gato! A mudança de ambiente
          e de família pode causar grande impacto emocional no animal, levando-o
          à depressão e até mesmo à morte. Os animais são seres sensíveis, com
          sentimentos, medos, sofrem, ficam deprimidos e sentem solidão e
          abandono. Sempre busque alguém próximo, parente, amigo ou vizinho que
          possa adotar o animal antes de fazer um anúncio. Ao doar para alguém
          próximo, será mais fácil monitorar a adoção e garantir o bem-estar do
          animal.
        </p>
      </div>
    </Container>
  );
};

export default InfoAlert;
