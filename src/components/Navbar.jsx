import { Link, Outlet } from "react-router-dom";
import styles from "./navbar.module.css";
export const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <h2>
          <Link to="/">ShopNow</Link>{" "}
        </h2>
        {/* <input type="search" /> */}
        <ul className={styles.navul}>
          <Link to="/cart">Cart</Link>
          <li>Wishlist</li>
          <li>User</li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
