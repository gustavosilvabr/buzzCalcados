import { bd } from "../bd";
import Carousel from "react-grid-carousel";
import "../style/styleCarroselAvaliacoes.css";
export default function CarroselAvaliacoes() {
  return (
    <section className="container-carrosel">
      <div className="title-avaliacoes">
        <h1>AVALIAÇOES DOS NOSSOS CLIENTES</h1>
      </div>
      <div className="container-carrosel-avaliacoes">
        
            <Carousel loop >
                 <Carousel.Item>
                    <img src={} alt="" />
                </Carousel.Item>
            </Carousel>
      </div>
    </section>
  );
}
