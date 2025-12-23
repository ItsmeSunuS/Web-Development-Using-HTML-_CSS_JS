import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">React Router App</h2>
      <div className="links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/todos">Todos</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
