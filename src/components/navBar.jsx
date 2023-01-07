import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
      <Link to="/"></Link>
    </div>
  );
};

export default NavBar;
