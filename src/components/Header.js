import "./Header.css";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

function Header({ theme, setTheme }) {
  const themeChosen = theme === "light" ? "dark" : "light";

  return (
    <header className="header">
      <h1>devfinder</h1>
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
