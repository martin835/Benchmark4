import { Container, Row, Col } from "react-bootstrap";
import Comments from "./Comments";



const OneSongCard = (props) => (
  <>
    <Col
      xs={12}
      md={6}
      lg={4}
      xl={3}
      className="mt-3"
      onClick={() => {
        props.setCurrentSong({
          songTitle: props.title,
          artist: props.artist,
          image: props.image,
        });
      }}
    >
      <div className="card-main pb-1">
        <div className="d-flex justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="imagewrapper">
              <div className="son">
                <img
                  className="px-3 py-3 card-image-main"
                  src={props.image}
                  alt="album-img"
                />
              </div>
              <div className="son2 d-flex justify-content-end align-items-end">
                <div className="playbutton mb-3 mr-3">
                  <div className="arrow-right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6 className="px-2 my-1 card-title">{props.title}</h6>
        <p className="card-description-main my-2 px-2 ">{props.artist}</p>
        <p className="card-description-main my-2 px-2 ">
          <Comments albumId={props.albumId} songId={props.songId} />
        </p>
      </div>
    </Col>
  </>
);

export default OneSongCard;
