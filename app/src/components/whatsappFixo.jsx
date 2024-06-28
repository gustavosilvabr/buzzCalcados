import '../style/styleWhatsappFixo.css';
import imgWhatsapp from '../img/whatsapp.png';
export default function WhatsappFixo(){
    return(
        <div className='button-whatsapp-container'>
        <button className='buttonWhatsappFixo'>
           <img  src={imgWhatsapp} alt="whatsapp"/>
        </button>
        </div>
   
    )
}