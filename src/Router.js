import { HashRouter, Routes, Route } from "react-router-dom";
import GithubUserSearch from "./pages/GithubUserSearch";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<GithubUserSearch />}>
          <Route exact path="/:username" element={<GithubUserSearch />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;
