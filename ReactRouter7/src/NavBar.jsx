import { Link, Outlet } from "react-router";
import "./header.css";

function NavBar() {
  return (
    <div>
      <div className="header">
        <div>
          <Link className="link" to={"/"}>
            <h2>Logo</h2>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/" className="link">
                Home Page
              </Link>
            </li>
            <li>
              <Link to="/in/user/about" className="link">
                About Page
              </Link>
            </li>
            <li>
              <Link to="/in/user/login" className="link">
                Login Page
              </Link>
            </li>
            <li>
              <Link to="/college" className="link">
                College
              </Link>
            </li>
            <li>
              <Link to="/users" className="link">
                Users
              </Link>
            </li>
            <li>
              <Link to="/users/list" className="link">
                List 
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default NavBar;
