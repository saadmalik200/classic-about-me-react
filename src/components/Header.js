import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <h1>About Me</h1>
      <ul>
        <NavLink to={"/"}>
          <li>Me</li>
        </NavLink>
        <NavLink to={"/hobbies"}>
          <li>Hobbies</li>
        </NavLink>
        <NavLink to={"/contact"}>
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Header;
