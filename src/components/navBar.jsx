import { Link, NavLink } from "react-router-dom";
// import kruger from "../assets/logoKrB.pn";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <div className="title-t">
            <img src="/logoKrB.png" alt="logokruger" width="50" />
          </div>
          <Link className="navbar-brand" to="/">
            Book library
          </Link>
          <NavLink className="isActive nav-item nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="isActive nav-item nav-link" to="/create">
            Create
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
