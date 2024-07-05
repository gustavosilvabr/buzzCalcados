import Banner from './components/banner'
import CarroselAvaliacoes from './components/carroselAvaliacoes';
import Header from './components/header';
import SectionProdutoUnico from './components/sectionProdutoUnico';
import SectionProdutos from './components/sectionProdutos';
import WhatsappFixo from './components/whatsappFixo';
import WidgetsInfo from './components/widgetsInfo';
import './style/style.css';
function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <WidgetsInfo/>
      <SectionProdutos/>
      <WhatsappFixo/>
      <SectionProdutoUnico/>
      <CarroselAvaliacoes/>
    </>
  ) 
}

export default App;
