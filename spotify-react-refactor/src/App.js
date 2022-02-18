import logo from './logo.svg';
import './App.css';
import MyFooter from './components/MyFooter';
import {Container, Row, Col} from "react-bootstrap"
import MySideBar from './components/MySideBar';
import MyNavBar from "./components/MyNavBar"
import MainBody from './components/MainBody';

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} className="sidebar-bg">
              <MySideBar/>
          </Col>
          <Col xs={10}>
              <MyNavBar/>
              <MainBody/>
          </Col>
        </Row>
      </Container>

      <MyFooter/>
    </>
  );
}

export default App;
