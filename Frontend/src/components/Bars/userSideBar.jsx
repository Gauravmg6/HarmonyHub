import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../userLogin/UserContext";
import axios from "axios";
const UserSideBar = ({ user }) => {
  const ctx = useContext(AuthContext);

  axios.defaults.withCredentials = true;
  const handleDeleteToken = () => {
    axios
      .get("https://note-nirvana-backend.onrender.com/Authentication/Logout")
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .then((err) => console.log(err));
  };

  return (
    <nav
      className="col-md-1.5 d-none d-md-block bg-light sidebar"
      style={{ maxWidth: "150px" }}
    >
      <div className="sidebar-sticky">
        <ul className="nav flex-column  pt-4">
          <li className="nav-item text-center" style={{ maxWidth: "150px" }}>
            <Link className="nav-link" to="/user_profile">
              {user.split("@")[0]}
            </Link>
          </li>
          <li className="nav-item">
            <div className="spacer"></div>
          </li>
          <li className="nav-item text-center p-0">
            <Link className="nav-link" to="/publish">
              +Publish Tab
            </Link>
          </li>
          <li className="nav-item text-center mt-5">
            <button className="btn btn-danger" onClick={handleDeleteToken}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default UserSideBar;
