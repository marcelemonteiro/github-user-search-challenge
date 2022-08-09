import "./Header.css";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";
import { Link } from "react-router-dom";

function Header({ theme, setTheme }) {
  const themeChosen = theme === "light" ? "dark" : "light";

  return (
    <header className="header">
      <Link to="/">
        <h1>devfinder</h1>
      </Link>
      <button className="themeSwitcher" onClick={() => setTheme(themeChosen)}>
        {themeChosen}
        <img
          src={themeChosen === "light" ? iconSun : iconMoon}
          alt="Theme Mode Icon"
        />
      </button>
    </header>
  );
}

export default Header;
