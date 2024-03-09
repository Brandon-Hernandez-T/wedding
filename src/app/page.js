'use client'
import React from 'react';
/** COMPONENTES INTERNOS */
import WeddingCountdown from '@/components/WeddingCountdown';
import ComponenteNovios from '@/components/ComponenteNovios';
import ComponentePadrinos from '@/components/ComponentePadrinos';
import ComponentesHonor from '@/components/ComponentesHonor';
import ComponenteUbicaciones from '@/components/ComponenteUbicaciones';

const page = () => {

  const weddingDate = '2024-09-22T13:00:00';

  return (
    <div>
      <div className="row" style={{ backgroundImage: "url('/fondo_image_3.png')", backgroundSize: 'cover', overflow: 'hidden', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', height: '100vh' }}>

        <div className="col-md-7 d-flex justify-content-center align-items-center" >
          <div style={{ textAlign: 'center' }}>
            <img src="/nombre_banner_1.png" alt="Imagen" width="100%" height="auto" />
          </div>
        </div>

        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <img src="/branyjacque_banner_4.png" alt="Imagen" width="100%" height="auto" />
        </div>

      </div>

      <div style={{ backgroundColor: 'white' }} >
        <WeddingCountdown weddingDate={weddingDate} />
      </div>

      <div className='row d-flex align-items-center justify-content-center text-center ' style={{ backgroundImage: "url('/fondo_image_2.png')", backgroundSize: 'cover', overflow: 'hidden', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', }} >
        <ComponenteNovios />
      </div>

      <div className='row d-flex align-items-center justify-content-center text-center ' style={{ backgroundImage: "url('/fondo_image_2.png')", backgroundSize: 'cover', overflow: 'hidden', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', }} >
        <ComponentesHonor />
      </div>

      <div className='row d-flex align-items-center justify-content-center text-center '>
        <ComponenteUbicaciones />
      </div>

      <div className='row d-flex align-items-center justify-content-center text-center ' style={{ backgroundImage: "url('/fondo_image_2.png')", backgroundSize: 'cover', overflow: 'hidden', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', }} >
        <ComponentePadrinos />
      </div>

    </div>
  );
};

export default page;