import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">V&Vbooking</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Registrarse</button>
            <button className="navButton">Iniciar sesión</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
