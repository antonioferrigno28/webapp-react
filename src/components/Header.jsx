import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-bg-primary py-4 header">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <h1 className="me-3">CineBool01</h1>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                Chi siamo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">
                Lista Film
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
