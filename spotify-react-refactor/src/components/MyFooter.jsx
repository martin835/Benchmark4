 import { Nav, Navbar, NavDropdown } from "react-bootstrap";
 import Container from "react-bootstrap/Container";

const MyFooter = () => (
  <footer className="fixed-bottom footer-class">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 d-flex flex-nowrap justify-content-center justify-content-md-between">
          <img
            src={require("../Assests/tile1.jpg")}
            alt="footer-tile"
            className="align-self-center footer-tile mr-2"
          />

          <div className="align-self-center mr-md-auto">
            <p className="mb-0 footer-song-text">Everlong</p>
            <span className="band-text">Foo Fighters</span>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <i className="bi bi-heart ml-3"></i>
            <i className="bi bi-pip ml-3"></i>
          </div>
        </div>
        <div className="col-md-6 px-5">
          <div className="d-flex justify-content-center align-items-center w-100">
            <i className="bi bi-shuffle d-inline-block mx-2 "></i>
            <i className="bi bi-skip-start d-inline-block mx-2 "></i>
            <div className="footer-play-button-wrapper">
              <i className="bi bi-play-circle-fill d-inline-block footer-play-button-bigger mx-2"></i>
            </div>
            <i className="bi bi-skip-end d-inline-block mx-2 "></i>
            <i className="bi bi-arrow-repeat d-inline-block mx-2 "></i>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-3 mt-n1">
            <span className="mr-n4">3.34</span>
            <div className="bar-wrapper">
              <hr className="bar-inner align-self-start mb-auto mt-auto" />
            </div>
            <span className="ml-n4">3.34</span>
          </div>
        </div>
        <div className="col-md-2 d-none d-lg-block ">
          <div className="d-flex flex-nowrap justify-content-between align-items-center d-inline-block mt-3">
            <i className="bi bi-list-task"></i>
            <i className="bi bi-music-player-fill px-2"></i>
            <i className="bi bi-volume-up pl-2"></i>
            <hr className="right-controls" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default MyFooter

