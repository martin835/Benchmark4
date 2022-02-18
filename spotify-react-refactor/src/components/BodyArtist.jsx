import { Container, Row, Col } from "react-bootstrap";
import OneSongCard from "./OneSongCard";
import { useState, useEffect } from "react";

const BodyArtist = () => {
  /* const [songs, setSongs] = useState([]);*/

  useEffect(() => {
    loadPlayList();
  }, []);

  /*   const fetchSongs = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data.data);

        setSongs(data.data);
      } else {
        alert("Something wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
 */

  const playlist = [
    {
      artist: "Foo Fighters",
      song: "Everlong",
      duration: "4:10",
      cover_image: "../Assests/tile1.jpg",
      listens: "532 068 244",
    },
    {
      artist: "Foo Fighters",
      song: "The Pretender",
      duration: "4:29",
      cover_image: "../Assests/tile2.jpg",
      listens: "482 032 144",
    },
    {
      artist: "Foo Fighters",
      song: "Best of You",
      duration: "4:15",
      cover_image: "../Assests/tile3.jpg",
      listens: "412 162 232",
    },
    {
      artist: "Foo Fighters",
      song: "Learn to Fly",
      duration: "3:55",
      cover_image: "../Assests/tile4.jpg",
      listens: "337 051 124",
    },
    {
      artist: "Foo Fighters",
      song: "All My Life",
      duration: "4:23",
      cover_image: "../Assests/tile5.jpg",
      listens: "232 155 174",
    },
  ];

  /* PLAYLIST ARRAY OF OBJECTS END */

  /* GENERATE PLAYLIST VARIABLES AND FUNCTION */
  

  const loadPlayList = () => {
      const playListContainer = document.getElementById("play-list-container");
      let playListHtml = " ";
    for (let i = 0; i < playlist.length; i++) {
      playListHtml = `        <div class="row align-items-center py-3">
                                <div class="col-9 col-sm-6 artist-main-songs-list">
                                    <span class="pr-2">${i + 1}</span>
                                    <span class="d-none" id="b${i}" onclick="getMeSong(event)"><i class="bi bi-play-fill" id="i${i}"></i></span>
                                    <img src=${
                                      playlist[i].cover_image
                                    } alt="">
                                    <span>${playlist[i].song}</span>
                                </div>
                                <div class="col-3 d-none d-md-block artist-main-songs-right">
                                    <span>${playlist[i].listens}</span>
                                </div>
                                <div class="col-6 col-md-3 d-none d-sm-block text-right  text-sm-center artist-main-songs-right">
                                    <!-- <span><i class="bi bi-heart"></i></span> -->
                                    <span class="ml-3">${
                                      playlist[i].duration
                                    }</span>
                                </div>
                            </div>`;
      playListContainer.innerHTML += playListHtml;
    }
  };

  return (
    <>
      <div
        className="artist-main-container"
        style={{
          backgroundImage:
            "url(" + require("../Assests/foo-fighters-1.jpg") + ")",
        }}
      >
        <Row className="artist-main-row-wrapper mb-4">
          <Col xs={12}>
            <div className="artist-main-text-vertical-center">
              <span className="artist-main-color-blue">
                <i className="bi bi-patch-check-fill"></i>
              </span>
              <span className="artist-main-text-smaller">
                {" "}
                Verified artist{" "}
              </span>
            </div>
            <h1>Foo Fighters</h1>
            <div className="">37,123,321 monthly listeners</div>
          </Col>
        </Row>
      </div>

      <div className="row text-white">
        <div
          className="col-12 d-flex  align-items-center"
          id="under-hero-section"
        >
          <div className="artist-main-play-button" id="artist-main-play-button">
            <i className="bi bi-play-circle-fill "></i>
            <i className="bi bi-pause-circle-fill  d-none  "></i>
            <div className="artist-main-play-button-inner-div"></div>
          </div>
          <div className="ml-4 border px-3 py-1 rounded artist-follow  ">
            FOLLOW
          </div>
          <div className="ml-4">
            <i className="bi bi-three-dots"></i>
          </div>
        </div>
        <div className="col-12">
          <h4 className="mb-4 mt-3">Popular</h4>
        </div>
      </div>
      <div className="artist-songs-table-wrapper px-3" id="play-list-container">
        {/* <!-- HTML GENERATED FROM movebar.js --> */}
      </div>
      <div className="row">
        <div className="col-12">
          <span className="ml-4 artist-text-secundary">MORE...</span>
        </div>
      </div>
    </>
  );
};

export default BodyArtist;
