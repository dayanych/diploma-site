import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className='container'>
      <nav>
        <ul className={styles.navUl}>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/parser">Парсер документов</Link>
          </li>
          <li>
            <Link to="/graphs">Графики</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
