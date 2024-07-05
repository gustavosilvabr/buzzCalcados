import { bd } from "../bd";
import Carousel from "react-grid-carousel";
import "../style/styleCarroselAvaliacoes.css";
import { useState } from "react";
import imgAvaliacao from '../img/Vector.svg';
import imgEmoji from '../img/emoji.svg';
export default function CarroselAvaliacoes() {
  const [bancoAvaliacoes, setBancoAvaliacoes] = useState(1)
  const [visibleProducts, setVisibleProducts] = useState(3);

  return (
    <section className="container-carrosel">
      <div className="title-avaliacoes">
        <h1>AVALIAÇOES DOS NOSSOS CLIENTES</h1>
      </div>
      <div className="container-carrosel-avaliacoes">
        <Carousel cols={1} loop >
          <Carousel.Item>
            <div className="container-cards">
            {bd.slice(0, visibleProducts).map((e) => (
            <div className="container-card">
              <div className="ativo"></div>
              <div className="container-img-nome">
                <div
                  style={{ backgroundImage: `url(${bd[bancoAvaliacoes].img})` }}
                  className="img-avaliacao">
                </div>
                <div className="nome">
                  <h2>ISABELA</h2>
                </div>
              </div>
              <div className="text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam facilis maiores corrupti, harum voluptatum sunt, esse magnam ducimus totam
                </p>
              </div>
              <div className="container-av-em">
                <div className="avaliacao">
                  <img src={imgAvaliacao} alt="" />
                  <img src={imgAvaliacao} alt="" />
                  <img src={imgAvaliacao} alt="" />
                  <img src={imgAvaliacao} alt="" />
                  <img src={imgAvaliacao} alt="" />
                </div>
                <div className="emoji">
                <img src={imgEmoji} alt="" />
                </div>
              </div>
              
            </div>
        ))}
            </div>
          
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
