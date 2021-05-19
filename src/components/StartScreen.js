import React, { useState } from 'react';
import  Modal  from 'react-bootstrap/Modal';
import monster from '.././img/splashsnip2.PNG'




function StartScreen() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);


  return (
    <>
    <div className='splashScreen'>
      <Modal show={show} onHide={handleClose}>
          <img className='titleLogo' src={monster}/>
      </Modal>
    </div>
    </>
  );
}

export default StartScreen;