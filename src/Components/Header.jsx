import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Dogs from '../Assets/Dogs.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - home">
          <img src={Dogs} alt="" />
        </Link>
        <Link className={styles.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
