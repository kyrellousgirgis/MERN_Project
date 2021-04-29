import { NavLink } from "react-router-dom";
 const Nav = () => {
  return (
    <nav  className="navbar navStyle navbar-expand-lg navbar-primary  bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse m-auto" id="navbarSupportedContent">
        <ul className="navbar-nav col-12 text-center  justify-conent-center">
          <li className="nav-item col-lg-2   text-center mx-auto ">
            <NavLink activeStyle={{color:"#f50057"}} exact to="/" className="nav-link">Register</NavLink>
          </li>
          <li className="nav-item col-lg-2   text-center mx-auto">
            <NavLink activeStyle={{color:"#f50057"}} to="/Users" className="nav-link">Users</NavLink>
          </li>
          <li className="nav-item col-lg-2   text-center mx-auto">
            <NavLink activeStyle={{color:"#f50057"}} to="/about" className="nav-link">about</NavLink>
          </li>
          {/* <li class="nav-item col-lg-3   text-center">
            <NavLink className="nav-link">Contact</NavLink>
          </li>
          <li class="nav-item col-lg-3  text-center">
            <NavLink id="main" class="nav-link">
              Subscribe via. RSS
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};
export default Nav