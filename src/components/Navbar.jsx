import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Navbar() {
  const { isLoggedIn, logout } = useContext(StudentContext);

  return (
    <nav style={styles.nav}>
      <h2>Student App</h2>

      {isLoggedIn && (
        <div>
          <NavLink to="/" style={styles.link}>Students</NavLink>
          <NavLink to="/favourites" style={styles.link}>Favourites</NavLink>
          <button onClick={logout} style={styles.logout}>Logout</button>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 20px",
    background: "#111827",
    color: "white"
  },
  link: {
    marginRight: "15px",
    color: "white",
    textDecoration: "none"
  },
  logout: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer"
  }
};

export default Navbar;