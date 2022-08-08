import { BrowserRouter, Routes, Route } from "react-router-dom";
import GithubUserSearch from "./pages/GithubUserSearch";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<GithubUserSearch />}>
          <Route path=":username" element={<GithubUserSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
