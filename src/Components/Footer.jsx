import React from 'react';
import styles from './Footer.module.css';
import DogsFooter from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={DogsFooter} alt="" />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
