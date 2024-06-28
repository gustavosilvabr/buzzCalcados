import Carousel from 'react-grid-carousel';
import imgBanner from '../img/banner.jpg';
import imgBanner2 from '../img/banner.jpg';

import '../style/style.css';
export default function Banner(){
    return(
        <section>
            <div style={{ margin: 0, padding: 0 }}>
            <Carousel rows={1} loop gap={0} dotMarginLeft={0} autoplay={4000} >
                <Carousel.Item >
                <div  style={{
            margin:0,
            padding:0,
            width: '100%',
            height:'450px', // Ajuste a altura conforme necessário
            backgroundImage: `url(${imgBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius:5
          }}></div>
                </Carousel.Item>
                <Carousel.Item>
                <div  style={{
              margin:0,
              padding:0,
              width: '100%',
              height:'450px', // Ajuste a altura conforme necessário
              backgroundImage: `url(${imgBanner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius:5
          }}></div>
                </Carousel.Item>
            </Carousel>
            </div>
            
           
        </section>
    )
}