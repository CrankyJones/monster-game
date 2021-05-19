import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import monster from '.././img/splashsnip2.PNG'




function StartScreen() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);


  return (
    <>
    <div className='splashscreen'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body size='fit-content'>
          <img  src={monster}/>
        </Modal.Body>
      </Modal>
    </div>
    </>
  );
}

export default StartScreen;