import styles from '../NavBar/NavBar.module.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div>
        <ul>
        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/'>Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}to='/favorite'>Favorite</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}to='/about'>About</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
