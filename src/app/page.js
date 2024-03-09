'use client'
import React from 'react';
/** COMPONENTES INTERNOS */
import WeddingCountdown from '@/components/WeddingCountdown';
import ComponenteNovios from '@/components/ComponenteNovios';
import ComponentePadrinos from '@/components/ComponentePadrinos';
import ComponentesHonor from '@/components/ComponentesHonor';
import ComponenteUbicaciones from '@/components/ComponenteUbicaciones';
import SectionWithFade from '@/components/SectionWhitFade';
import { Fade, Bounce, Pop, Swing } from "react-swift-reveal";

const page = () => {

  const weddingDate = '2024-09-22T13:00:00';

  return (
    <div>
      <div className="row" style={{ backgroundImage: "url('/fondo_image_3.png')", backgroundSize: 'cover', overflow: 'hidden', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', height: '100vh' }}>

        <div className="col-md-7 d-flex justify-content-center align-items-center" >
          <Fade duration={1000} delay={500} distance="30px">
            <div style={{ textAlign: 'center' }}>
              <img src="/nombre_banner_1.png" alt="Imagen" width="100%" height="auto" />
            </div>
          </Fade>
        </div>

        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <Pop duration={1000} delay={500} distance="30px">
            <img src="/branyjacque_banner_4.png" alt="Imagen" width="100%" height="auto" />
          </Pop>
        </div>

      </div>

      <SectionWithFade isWhite={true}>
        <WeddingCountdown weddingDate={weddingDate} />
      </SectionWithFade>

      <SectionWithFade>
        <ComponenteNovios />
      </SectionWithFade>

      <SectionWithFade>
        <ComponentesHonor />
      </SectionWithFade>

      <SectionWithFade isWhite={true} >
        <ComponenteUbicaciones />
      </SectionWithFade>

      <SectionWithFade>
        <ComponentePadrinos />
      </SectionWithFade>

    </div>
  );
};

export default page;