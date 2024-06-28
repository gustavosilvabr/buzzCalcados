import imgLogo from "../img/imgLogo.png";
import "../style/styleHeader.css";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={imgLogo} alt="logo loja" />
      </div>
      <nav>
        <ul>
          <a href="">
            {" "}
            <li>Produtos</li>
          </a>
          <a href="">
            <li>Contato</li>
          </a>
          <a href="">
            {" "}
            <li>Avaliações</li>
          </a>
        </ul>
      </nav>
      <div className="button-whatsapp-header">
        <button>Peça pelo WhatsApp</button>
      </div>
    </header>
  );
}
