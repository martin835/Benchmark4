import { Container, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getArtistAlbumAction, getArtistInfoAction } from "../redux/actions";
import { useParams } from "react-router-dom";
import PlaylistItem from "./PlaylistItem";
import { useState, useEffect } from "react";

const mapStateToProps = (state) => ({
  artistInfo: state.search.artistInfo,
  artistAlbum: state.search.artistAlbum,
});

const mapDispatchToProps = (dispatch) => ({
  loadArtistInfo: (albumId) => {
    dispatch(getArtistInfoAction(albumId));
  },
  loadArtistAlbum: (albumId) => {
    dispatch(getArtistAlbumAction(albumId));
  },
});

const BodyAlbum = (props) => {
  const params = useParams();

  useEffect(() => {
    props.loadArtistInfo(params.albumId);
    props.loadArtistAlbum(params.albumId);
  }, []);
  console.log(params.albumId);
  console.log(props.artistAlbum.tracks.data);
  return (
    <div>
      <div className="top-bumper"></div>
      <Container fluid>
        <Row>
          <Col xs={12} className="card-head d-flex my-2">
            <Col xs={2} className="card-head-image">
              <img
                className="card-image-head"
                src={require("../Assests/album_pic.jpeg")}
                alt=""
              />
            </Col>
            <Col
              xs={8}
              className="d-flex description text-white justify-content-start align-items-end"
            >
              <div>
                <p className=" description-head_1 mb-0">
                  {" "}
                  {props.artistAlbum.record_type}{" "}
                </p>
                <h3 className=" description-head_2 mb-0">
                  {" "}
                  {props.artistAlbum.title}{" "}
                </h3>
                <p className=" text-muted description-head_3">
                  {" "}
                  <strong>{props.artistAlbum.artist.name}</strong> .{" "}
                  {props.artistAlbum.release_date} .{" "}
                  {props.artistAlbum.tracks.data.length} songs,{" "}
                  {props.artistAlbum.duration}
                </p>
              </div>
            </Col>
          </Col>
          <div>
            <Row className="text-white">
              <Col xs={12} className="d-flex align-items-center">
                <div className="artist-main-play-button">
                  <i className="bi bi-play-circle d-inline-block mx-2"></i>
                  <div className="artist-main-button-inner-div"></div>
                </div>
                <div className="ml-4 px-3 py-1 artist-follow">
                  {" "}
                  <i className="bi bi-heart"></i>
                </div>
                <div className="ml-4">
                  <i className="bi bi-three-dots"></i>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
      <div className="pt-2">
        <span className="pl-3 ash_tag">#</span>
        <span className="mx-2" style={{ color: "white" }}>
          {" "}
          TITLE
        </span>
      </div>
      <hr className="my-2 hr-album" />
      <div className="artist-songs-table-wrapper pr-3">
        {props.artistAlbum.tracks.data.map((song, i) => (
          <PlaylistItem
            song={song}
            i={i}
            smallImg={props.artistAlbum.cover_small}
          />
        ))}
      </div>
      <div className="bottom-bumper"></div>;
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(BodyAlbum);

// <div className="row align-items-center py-3">
//   <div className="col-9 col-sm-6 artist-main-songs-list">
//     <span className="px-3 mx-0 mb-3">1</span>
//     <div className="d-inline-block">
//       <p className="fox mb-0">20th Century Fox Fanfare</p>
//       <p className="under_text">Queen</p>
//     </div>
//   </div>
//   <div className="col-3 d-none d-md-block artist-main-songs-right">
//     <span></span>
//   </div>
//   <div className="col-12 col-md-3 d-none d-sm-block text-right artist-main-songs-right">
//     <span className="ml-3">4 : 10</span>
//   </div>
// </div>
// <div className="row align-items-center py-3">
//   <div className="col-9 col-sm-6 artist-main-songs-list">
//     <span className="px-3 mx-0 mb-3">1</span>
//     <div className="d-inline-block">
//       <p className="fox mb-0">20th Century Fox Fanfare</p>
//       <p className="under_text">Queen</p>
//     </div>
//   </div>
//   <div className="col-3 d-none d-md-block artist-main-songs-right">
//     <span></span>
//   </div>
//   <div className="col-12 col-md-3 d-none d-sm-block text-right artist-main-songs-right">
//     <span className="ml-3">4 : 10</span>
//   </div>
// </div>
// <div className="row align-items-center py-3">
//   <div className="col-9 col-sm-6 artist-main-songs-list">
//     <span className="px-3 mx-0 mb-3">1</span>
//     <div className="d-inline-block">
//       <p className="fox mb-0">20th Century Fox Fanfare</p>
//       <p className="under_text">Queen</p>
//     </div>
//   </div>
//   <div className="col-3 d-none d-md-block artist-main-songs-right">
//     <span></span>
//   </div>
//   <div className="col-12 col-md-3 d-none d-sm-block text-right artist-main-songs-right">
//     <span className="ml-3">4 : 10</span>
//   </div>
// </div>
// <div className="row align-items-center py-3">
//   <div className="col-9 col-sm-6 artist-main-songs-list">
//     <span className="px-3 mx-0 mb-3">1</span>
//     <div className="d-inline-block">
//       <p className="fox mb-0">20th Century Fox Fanfare</p>
//       <p className="under_text">Queen</p>
//     </div>
//   </div>
//   <div className="col-3 d-none d-md-block artist-main-songs-right">
//     <span></span>
//   </div>
//   <div className="col-12 col-md-3 d-none d-sm-block text-right artist-main-songs-right">
//     <span className="ml-3">4 : 30</span>
//   </div>
// </div>
// <div className="row align-items-center py-3">
//   <div className="col-9 col-sm-6 artist-main-songs-list">
//     <span className="px-3 mx-0 mb-3">1</span>
//     <div className="d-inline-block">
//       <p className="fox mb-0">20th Century Fox Fanfare</p>
//       <p className="under_text">Queen</p>
//     </div>
//   </div>
//   <div className="col-3 d-none d-md-block artist-main-songs-right">
//     <span></span>
//   </div>
//   <div className="col-12 col-md-3 d-none d-sm-block text-right artist-main-songs-right">
//     <span className="ml-3">2 : 16</span>
//   </div>
// </div>
// <div className="row align-items-center py-3">
//   <div className="col-9 col-sm-6 artist-main-songs-list">
//     <span className="px-3 mx-0 mb-3">1</span>
//     <div className="d-inline-block">
//       <p className="fox mb-0">20th Century Fox Fanfare</p>
//       <p className="under_text">Queen</p>
//     </div>
//   </div>
//   <div className="col-3 d-none d-md-block artist-main-songs-right">
//     <span></span>
//   </div>
//   <div className="col-12 col-md-3 d-none d-sm-block text-right artist-main-songs-right">
//     <span className="ml-3">6 : 10</span>
//   </div>
// </div>
// <div className="row align-items-center py-3">
//   <div className="col-9 col-sm-6 artist-main-songs-list">
//     <span className="px-3 mx-0 mb-3">1</span>
//     <div className="d-inline-block">
//       <p className="fox mb-0">20th Century Fox Fanfare</p>
//       <p className="under_text">Queen</p>
//     </div>
//   </div>
//   <div className="col-3 d-none d-md-block artist-main-songs-right">
//     <span></span>
//   </div>
//   <div className="col-12 col-md-3 d-none d-sm-block text-right artist-main-songs-right">
//     <span className="ml-3">4 : 58</span>
//   </div>
// </div>
// <div className="row align-items-center py-3">
//   <div className="col-9 col-sm-6 artist-main-songs-list">
//     <span className="px-3 mx-0 mb-3">1</span>
//     <div className="d-inline-block">
//       <p className="fox mb-0">20th Century Fox Fanfare</p>
//       <p className="under_text">Queen</p>
//     </div>
//   </div>
//   <div className="col-3 d-none d-md-block artist-main-songs-right">
//     <span></span>
//   </div>
//   <div className="col-12 col-md-3 d-none d-sm-block text-right artist-main-songs-right">
//     <span className="ml-3">2: 00</span>
//   </div>
// </div>
// <div className="row align-items-center py-3">
//   <div className="col-9 col-sm-6 artist-main-songs-list">
//     <span className="px-3 mx-0 mb-3">1</span>
//     <div className="d-inline-block">
//       <p className="fox mb-0">20th Century Fox Fanfare</p>
//       <p className="under_text">Queen</p>
//     </div>
//   </div>
//   <div className="col-3 d-none d-md-block artist-main-songs-right">
//     <span></span>
//   </div>
//   <div className="col-12 col-md-3 d-none d-sm-block text-right  text-sm-center artist-main-songs-right">
//     <span className="ml-3">1 : 10</span>
//   </div>
// </div>
