import { Container, Row, Col } from "react-bootstrap";
import Comments from "./Comments";

import { Link } from "react-router-dom";

import { connect } from 'react-redux'
import { addToLikedAction, removeFromLikedAction } from '../redux/actions'

const mapStateToProps = (state) => ({
    liked: state.favourites.liked,
  })

const mapDispatchToProps = (dispatch) => ({
   
    addToLiked: (songL) => {
      dispatch(addToLikedAction(songL))
    },
    removeFromLiked: (songL) => {
      dispatch(removeFromLikedAction(songL))
    }
  })




const OneSongCard = (props) => (
  <>
    <Col
      xs={12}
      md={6}
      lg={4}
      xl={3}
      className="mt-3"
      onClick={() => {
        props.setCurrentSong(props.song);
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

       
        
       

        <Link to={`/album/${props.albumId}`}>
          <h6 className="px-2 my-1 card-title">{props.title}</h6>
        </Link>
        <div className="d-flex justify-content-between" >
        <Link to={`/artist/${props.artistId}`}>
          <p className="card-description-main my-2 px-2 ">{props.artist}</p>
        </Link>
        {props.liked.indexOf(props.song) === -1 ?
        <i className="bi bi-heart mr-2 like-heart-button" onClick={()=> {props.addToLiked(props.song)}}></i>:
        <i className="bi bi-heart-fill mr-2 like-heart-button" onClick={()=>{props.removeFromLiked(props.liked.indexOf(props.song))}}></i>
        }
        </div>
        

          <Comments albumId={props.albumId} songId={props.songId} />
        {/* </p> */}
      </div>
    </Col>
  </>
);

export default connect(mapStateToProps, mapDispatchToProps)(OneSongCard)
