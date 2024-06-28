import img01 from '../img/img01.png';
import img02 from '../img/img02.png';
import img03 from '../img/img03.png';
import img04 from '../img/img04.png';
import '../style/styleWidgetsInfo.css';

export default function WidgetsInfo(){
    return(
        <section className="containerWidgetsInfo">
            <div className="title">
                <h1>PORQUE COMPRAR NA BUZZ CALÇADOS</h1>
            </div>
            <div className="WidgetsInfo">
                <div className='children'>
                <div className='child'>
                    <div className='widgetContainerRadius'>
                    <img src={img01}
                            width={'76px'}
                            height={'76px'}
                            alt="imgWidgetsInfo"/>
                    </div>
                            <h1>Design Exclusivo</h1>
                            <p>Nossas sandálias femininas são desenhadas com exclusividade, oferecendo uma combinação única de elegância e conforto, perfeitas para qualquer ocasião.</p>
                        </div>
                        <div>
                            
                        </div>
                        <div className='child'>
                            <div className='widgetContainerRadius'>
                            <img  src={img02} 
                            width={'76px'}
                             height={'76px'}alt="imgWidgetsInfo"/>
                            </div>
                        
                            <h1>Conforto e Qualidade</h1>
                            <p>Oferecemos produtos de alta qualidade que priorizam o conforto, para que você possa aproveitar cada passo com segurança e bem-estar.</p>
                        </div>
                        <div className='child'>
                            <div className='widgetContainerRadius'>
                            <img src={img03} 
                             width={'76px'}
                             height={'76px'}alt="imgWidgetsInfo"/>
                            
                            </div>
                           
                            <h1>Variedade e Estilo</h1>
                            <p>Nossa coleção inclui uma ampla variedade de modelos e estilos, desde sandálias elegantes até tênis casuais, para atender a todas as suas necessidades e gostos.</p>
                        </div>
                        <div className='child'>
                        <div className='widgetContainerRadius'>
                        <img src={img04} 
                            width={'76px'}
                             height={'76px'}alt="imgWidgetsInfo"/>
                        </div>
                          
                            <h1>Atendimento Personalizado</h1>
                            <p>Na BuzzCalçados, valorizamos cada cliente. Nosso atendimento é dedicado a proporcionar uma experiência de compra excepcional, com suporte especializado e soluções rápidas para suas dúvidas e necessidades.</p>
                        </div>
                </div>
               
            </div>
        </section>
    )
}