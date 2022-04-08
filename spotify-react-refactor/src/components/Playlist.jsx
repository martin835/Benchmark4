import {Container, Row, Col} from "react-bootstrap";
import OneSongCard from "./OneSongCard";
import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";



const mapStateToProps = (state) => ({
  playlists: state.playlists.all,
})

const mapDispatchToProps = (dispatch) => ({
 
})





const Playlist = (props) => {

const params = useParams()

    return (
      <Container fluid className="px-5 my-4">
        <div className="top-bumper"></div>
        <h2 className="h2-main">{params.playlistName} playlist</h2>

        <Row id="main-section-recent">
          {props.playlists &&
            props.playlists.filter(playlist=> playlist.name === params.playlistName).map((single) => (single.songs.map((song) => 
              <OneSongCard
                key={song.id}
                albumId={song.album.id}
                songId = {song.id}
                image={song.album.cover_medium}
                title={song.title}
                artist={song.artist.name}
                setCurrentSong={props.setCurrentSong}
                song={song}
              />
            )))}
        </Row>
        <div className="bottom-bumper"></div>
      </Container>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
