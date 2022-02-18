import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const MyNavBar = () => (
    <>
                <div className="row">
                                <div className="col-12 ">
                                    <div className="nav-wrapper-outter">
                                        <div className="nav-wrapper-inner pt-2">
                                            <div className="d-flex justify-content-between align-items-center  ">
                                                <div className="nav-left d-flex align-items-center">
                                                    <div className="navbar-chevrons ">
                                                        <a><i className="fas fa-chevron-circle-left"></i></a>
                                                        <a><i className="fas fa-chevron-circle-right ml-3"></i></a>
                                                    </div>
                                                    <div className="nav-play-button ml-4  ">
                                                        <div className="artist-main-play-button d-none ">
                                                            <i className="bi bi-play-circle-fill"></i> 
                                                            <div className="artist-main-play-button-inner-div"></div>                                                       
                                                        </div>                                                    
                                                    </div>
                                                    <div className="nav-text-toggling ml-4 d-none">Foo Fighters</div>
                                                </div>
                                                <div className="d-none d-md-block">
                                                    <div className="navStyle d-flex align-items-center">
                                                        <div className="pl-1"><i className="bi bi-person-circle"></i></div>                            
                                                        <div id="username" className="ml-3">
                                                        
                                                        </div>
                                                        <div className="ml-3 mr-3"><i className="bi bi-caret-down-fill"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
</>
)


export default MyNavBar;
