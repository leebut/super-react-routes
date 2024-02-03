import { NavLink } from "react-router-dom";
import styles from "./TopNav.module.css";

function TopNav() {
  return (
    <nav className={styles.navList}>
      <ul className="flex">
        <li className={styles.listItem}>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to="/skills">Skills Page</NavLink>
        </li>
        <li className={styles.listItem}>
          <a href="#">Page 3</a>
        </li>
        <li className={styles.listItem}>
          <a href="#">Page 4</a>
        </li>
        <li className={styles.listItem}>
          <a href="#">Page 5</a>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
