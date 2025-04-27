import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm bg-dark">
      <div className="container">
        {isLoggedIn && (
          <Link className="navbar-brand fw-bold" to="/">
            AdminPanel
          </Link>
        )}

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
            )}

            

            {isLoggedIn && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Manage
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/add-category">
                      Add Category
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/add-recipe">
                      Add Recipe
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/recipes">
                      Recipes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/category">
                      Categories
                    </Link>
                  </li>
                </ul>
              </li>
            )}
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleLogout} style={{ marginLeft: "10px", padding: "5px 10px" }}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/auth">
                  Login
                </Link>
              </li>
            )}
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
