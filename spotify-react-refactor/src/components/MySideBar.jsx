import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, Navigate, useNavigate } from "react-router-dom";

const MySideBar = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="sidebar-logo mt-2">
        <span>
          <i className="bi bi-spotify"></i>
        </span>
        <span className="ml-2 sidebar-logo-text">Spotify</span>
      </div>
      <div className="sidebar-top mt-3">
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          <span>
            <i className="bi bi-house-door-fill"></i>
          </span>
          <span>Home</span>
        </div>
        <div
          onClick={() => {
            navigate("/album");
          }}
        >
          <span>
            <i className="bi bi-disc"></i>
          </span>
          <span>Album</span>
        </div>

        <div
          onClick={() => {
            navigate("/artist");
          }}
        >
          <span>
            <i className="bi bi-person-lines-fill"></i>
          </span>
          <span>Artist</span>
        </div>

        <div className="sidebar-divider"></div>
        <div>
          <span>
            <i className="bi bi-plus-square-fill"></i>
          </span>
          <span>Create Playlist</span>
        </div>
        <div  onClick={() => {
            navigate("/liked");
          }}>
          <span>
            <img src={require("../Assests/liked-icon.png")} alt="" />
          </span>
          <span>Liked Songs</span>
        </div>
      </div>
      <div className="sidebar-line-divider ">
        <hr className="my-2" />
      </div>
      <div className="sidebar-bottom mt-2">
        <div className="sidebar-bottom-content">
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>
            June19{" "}
            <span className="float-right">
              <i className="bi bi-people"></i>
            </span>{" "}
          </div>
          <div>
            Party{" "}
            <span className="float-right">
              <i className="bi bi-people"></i>
            </span>{" "}
          </div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
        </div>

        <div className="sidebar-instal my-3">
          <span>
            <i className="bi bi-arrow-down-circle"></i>
          </span>
          <span className="ml-2">Install App</span>
        </div>
      </div>
    </>
  );
}

export default MySideBar;
