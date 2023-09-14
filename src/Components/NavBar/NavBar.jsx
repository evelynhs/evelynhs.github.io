import "./NavBar.css";
import { Component } from "react";
// import { MenuItems } from "./MenuItems.jsx";


class NavBar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Evelyn Hsiao</h1>

        <ul className="nav-menu">
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;