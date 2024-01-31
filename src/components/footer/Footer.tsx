import { useState } from 'react';
import Modal from '../../shared/ui/modal/Modal.tsx';
import AboutSite from '../../segments/footer/about-site/AboutSite.tsx';

const Footer = () => {
  const [modal, setModal] = useState(false);

  return (
    <footer>
      <div className='footer__wrapper'>
        <span className='footer__text'>Made by Andrei Solo</span>
        <span
          className='footer__text about__site'
          onClick={() => setModal(true)}
        >
          О сайте
        </span>
        <Modal visible={modal} setVisible={setModal}>
          <AboutSite />
        </Modal>
      </div>
    </footer>
  );
};

export default Footer;
