import { NavLink } from "react-router-dom";
import { GiFrog } from "react-icons/gi";
// styles
import styles from "./Navbar.module.css";
import UserLog from "../../Containers/UserLog";

const Navbar = () => {
  const activeStyle = {
    color: "#fff",
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <NavLink to="/">
          <GiFrog className={styles.logo} />
        </NavLink>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink
                to="popular"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Games
              </NavLink>
            </li>
            <li>
              <UserLog/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
