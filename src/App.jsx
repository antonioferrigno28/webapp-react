import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import MovieIndexPage from "./pages/movies/MovieIndexPage";
import MovieShowPage from "./pages/movies/MovieShowPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} path="/">
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />

            <Route path="movies">
              <Route index element={<MovieIndexPage />} />
              <Route path=":id" element={<MovieShowPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
