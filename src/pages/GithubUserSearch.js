import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import User from "../components/User";

function GithubUserSearch() {
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState("light");
  const { username } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username || "octocat"}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, [username]);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add(theme);
    } else {
      document.body.classList.remove("light");
      document.body.classList.add(theme);
    }
  }, [theme]);

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} />
      <SearchBox />
      <User user={user} />
    </div>
  );
}

export default GithubUserSearch;
