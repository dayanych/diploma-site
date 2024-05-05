import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.navUl}>
          <li>
            <Link to="/">
              <p>
                Главная
              </p>
            </Link>
          </li>
          <li>
            <Link to="/parser">
              <p>
                Парсер документов
              </p>
            </Link>
          </li>
          <li>
            <Link to="/graphs">
              <p>
                Графики
              </p>
            </Link>
          </li>
          <li>
            <Link to="/contacts">
              <p>
                Контакты
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
