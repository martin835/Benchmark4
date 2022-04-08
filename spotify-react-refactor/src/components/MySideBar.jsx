import {  Modal, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import { addToPlaylistAction} from '../redux/actions'
import { propTypes } from "react-bootstrap/esm/Image";
import { useState } from "react";

const mapStateToProps = (state) => ({
    all: state.playlists.all,
  })

const mapDispatchToProps = (dispatch) => ({
  addToPlaylist: (playlist) => {
    dispatch(addToPlaylistAction(playlist))
  },
  })

const MySideBar = (props) => {

  const [show, setShow] = useState(false);

  const [playlist, setPlaylist] = useState(undefined)

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
        <div onClick={()=> setShow(true)}>
          <span>
            <i className="bi bi-plus-square-fill"></i>
          </span>
          <span>Create Playlist</span>
        </div>
        <Modal show={show} onHide={()=> setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Playlist</Modal.Title>
        </Modal.Header>
        <input className="m-2" placeholder="insert new playlist name..." type="text" onChange={(e) => {setPlaylist({name: e.target.value, songs: []})}}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{ setShow(false); props.addToPlaylist(playlist)}}>
            create playlist
          </Button>
        </Modal.Footer>
      </Modal>
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
          {props.all.map((playlist) => {return <div>{playlist.name}</div>})
}
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

export default connect(mapStateToProps, mapDispatchToProps)(MySideBar)
