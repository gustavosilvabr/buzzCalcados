import Carousel from "react-grid-carousel";
import ReactPlayer from "react-player";
import { bd } from "../bd";
import imgAvaliacoes from "../img/imgAvaliacao.png";
import { useState } from "react";
import "../style/styleProduto.css";
import "../style/styleProdutoUnico.css";
export default function SectionProdutoUnico() {
  const [currentIndex, setCurrentIndex] = useState(1);
  return (
    <section className="sessao-produto-unico">
            <div className="container-img">
            <Carousel cols={1} rows={1} gap={10} loop>
              <Carousel.Item>
                <img
                  width="100%"
                  src={bd[currentIndex].img}
                  alt={`Imagem de ${bd[currentIndex].nome}`}
                />
              </Carousel.Item>
              <Carousel.Item>
                <div className="video">
                  <ReactPlayer
                    width={"100%"}
                    height={"100%"}
                    url={bd[currentIndex].video}
                    playing
                    muted
                    loop
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  width="100%"
                  src={bd[currentIndex].img2}
                  alt={`Imagem de ${bd[currentIndex].nome}`}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  width="100%"
                  src={bd[currentIndex].img3}
                  alt={`Imagem de ${bd[currentIndex].nome}`}
                />
              </Carousel.Item>
            </Carousel>
            </div>
            <div className="container-text-button">
              <div className="title-produto-unico">
                    <h2>{bd[currentIndex].nome}</h2>
                  </div>
                  <div className="container-preco-avaliacoes-unico">
                    <div className="preco">
                      <h1>R${bd[currentIndex].preco}</h1>
                      <span>R${bd[currentIndex].promocao}</span>
                    </div>
                    <div className="avaliacoes">
                      <img src={imgAvaliacoes} alt="estrela" />
                      <p>{bd[currentIndex].reviews} Reviews</p>
                    </div>
                  </div>
                  <div className="button-whatsapp">
                    <button>Peça pelo WhatsApp</button>
                  </div>
            </div>
    </section>
  );
}
