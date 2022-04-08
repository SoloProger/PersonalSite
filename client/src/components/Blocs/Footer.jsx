import React, { useState } from "react";
import Modal from "../UI/modal/Modal";
import AboutSite from "../AboutSite";

const Footer = () => {
  const [modal, setModal] = useState(false);

  return (
    <footer>
      <div className="footer-wrapper">
        <span className="footer-text">Made by Andrei Solo</span>
        <span className="about-site" onClick={() => setModal(true)}>
          О сайте
        </span>
        <Modal visible={modal} setVisible={setModal}>
          <AboutSite />
        </Modal>
        <span className="copy">© Copyright 2022. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
