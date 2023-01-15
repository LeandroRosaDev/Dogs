import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MinhasFotos from '../../Assets/feed.svg';
import Estatisticas from '../../Assets/estatisticas.svg';
import AdicionarFoto from '../../Assets/adicionar.svg';
import Sair from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const [mobile, setMobile] = React.useState(null);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <img src={MinhasFotos} alt="" />
        {mobile && 'Minhas fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <img src={Estatisticas} alt="" />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <img src={AdicionarFoto} alt="" />
        {mobile && 'Adicionar Fotos'}
      </NavLink>
      <button onClick={userLogout}>
        <img src={Sair} alt="" />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
