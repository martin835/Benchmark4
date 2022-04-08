import logo from "./logo.svg";
import "./App.css";
import MyFooter from "./components/MyFooter";
import { Container, Row, Col } from "react-bootstrap";
import MySideBar from "./components/MySideBar";
import MyNavBar from "./components/MyNavBar";
import MainBody from "./components/MainBody";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BodyArtist from "./components/BodyArtist";
import BodyAlbum from "./components/BodyAlbum";
import { useState, useEffect } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("queen");
  const [currentSong, setCurrentSong] = useState({
    songTitle: "",
    artist: "",
    image: "",
  });

  useEffect(() => {
    console.log(searchQuery);
  }, []);
  useEffect(() => {
    console.log(currentSong);
  }, [currentSong]);

  return (
    <BrowserRouter>
      <Container fluid>
        <Row className="flex-nowrap">
          <Col xs={2} className="sidebar-bg">
            <MySideBar />
          </Col>
          <Col xs={10}>
            <MyNavBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <MainBody
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setCurrentSong={setCurrentSong}
                  />
                }
              />
              <Route path="/artist/:artistId" element={<BodyArtist />} />
              <Route path="/album/:albumId" element={<BodyAlbum />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <MyFooter currentSong={currentSong} />
    </BrowserRouter>
  );
}

export default App;
