import { Component } from "react";
import "./NavBar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = { clicked : false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }
  
  render() {
    return (
      <nav className="NavBarItems">
        <h1 className="navbar-logo">Evelyn Hsiao</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    )
  }
}

export default NavBar;