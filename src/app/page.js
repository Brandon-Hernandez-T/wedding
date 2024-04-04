'use client'
import React from 'react';
/** COMPONENTES INTERNOS */
import WeddingCountdown from '@/components/WeddingCountdown';
import ComponenteNovios from '@/components/ComponenteNovios';
import ComponenteSlider from '@/components/ComponenteSlider';
import ComponentePadrinos from '@/components/ComponentePadrinos';
import ComponentesHonor from '@/components/ComponentesHonor';
import ComponenteUbicaciones from '@/components/ComponenteUbicaciones';
import ComponenteRegalos from '@/components/ComponenteRegalos';
import SectionWithFade from '@/components/SectionWhitFade';
import ComponenteFooter from '@/components/ComponenteFooter';
import { Fade, Pop } from "react-swift-reveal";

const page = () => {

  const weddingDate = '2024-09-22T13:00:00';

  return (
    <div>
      <div className="row" style={{ backgroundImage: "url('/fondo_image_3.webp')", backgroundSize: 'cover', overflow: 'hidden', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', height: '100vh' }}>

        <div className="col-md-7 d-flex justify-content-center align-items-center" >
          <Fade duration={1000} delay={500} distance="30px">
            <div style={{ textAlign: 'center', paddingLeft: 10, paddingRight: 10, paddingTop: 10 }} >
              <img src="/nombre_banner_2.webp" alt="Imagen" width="100%" height="auto" />
            </div>
          </Fade>
        </div>

        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <Pop duration={1000} delay={500} distance="30px">
            <img src="/branyjacque_banner_5.webp" alt="Imagen" width="100%" height="auto" />
          </Pop>
        </div>

      </div>

      <SectionWithFade isWhite={true}>
        <WeddingCountdown weddingDate={weddingDate} />
      </SectionWithFade>

      <SectionWithFade>
        <ComponenteNovios />
      </SectionWithFade>

      {/* <SectionWithFade> */}
      <ComponenteSlider />
      {/* </SectionWithFade> */}

      <SectionWithFade>
        <ComponentesHonor />
      </SectionWithFade>

      <SectionWithFade isWhite={true} >
        <ComponenteUbicaciones />
      </SectionWithFade>

      <SectionWithFade >
        <ComponenteRegalos />
      </SectionWithFade>

      <SectionWithFade>
        <ComponentePadrinos />
      </SectionWithFade>

      <div className='row d-flex align-items-center justify-content-center' >
        <ComponenteFooter />
      </div>
    </div>
  );
};

export default page;