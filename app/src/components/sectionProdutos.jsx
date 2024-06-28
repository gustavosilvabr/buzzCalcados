import "../style/style.css";
import Produto from "./produto";
export default function SectionProdutos() {

return(
    <section className="container-title-produtos-button">
      <div className="container-title-produtos">
        <h1>GRANDE VARIEDADE DE PRODUTOS</h1>
      </div>
          <Produto/>
    </section>
  );
}
