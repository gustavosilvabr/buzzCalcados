import { bd } from "../bd";
import Carousel from "react-grid-carousel";
import "../style/styleCarroselAvaliacoes.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import imgAvaliacao from '../img/Vector.svg';
import imgEmoji from '../img/emoji.svg';
export default function CarroselAvaliacoes() {
  const [bancoAvaliacoes, setBancoAvaliacoes] = useState(1)
  // const [visibleProducts, setVisibleProducts] = useState(3);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
  };
  return (
    <section className="container-carrosel">
      <div className="title-avaliacoes">
        <h1>AVALIAÇOES DOS NOSSOS CLIENTES</h1>
      </div>

      <div className="slider-container">
      <Slider {...settings}>
        <div className="container-card">
            
        </div>
        <div className="container-card">
          <h3>2</h3>
        </div>
        <div className="container-card">
          <h3>3</h3>
        </div>
        <div className="container-card">
          <h3>4</h3>
        </div>
        <div className="container-card">
          <h3>5</h3>
        </div>
        <div className="container-card">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
    </section>
  );
}
