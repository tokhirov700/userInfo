import { NavLink } from "react-router-dom";
import './Nav.css'; 

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="navWrapper">
          <ul className="navList">
            <li className="navItem">
              <NavLink to="/" exact className="navLink" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/card" className="navLink" activeClassName="active">
                Card
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
