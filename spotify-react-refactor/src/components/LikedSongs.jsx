import {Container, Row, Col} from "react-bootstrap";
import OneSongCard from "./OneSongCard";
import { useState, useEffect } from "react";
import { connect } from 'react-redux'



const mapStateToProps = (state) => ({
  liked: state.favourites.liked,
})

const mapDispatchToProps = (dispatch) => ({
 
})





const LikedSongs = (props) => {



    return (
      <Container fluid className="px-5 my-4">
        <div className="top-bumper"></div>
        <h2 className="h2-main">Liked Songs</h2>

        <Row id="main-section-recent">
          {props.liked &&
            props.liked.map((song) => (
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
            ))}
        </Row>
        <div className="bottom-bumper"></div>
      </Container>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(LikedSongs)
