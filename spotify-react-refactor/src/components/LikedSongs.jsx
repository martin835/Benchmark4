import {Container, Row, Col} from "react-bootstrap";
import OneSongCard from "./OneSongCard";
import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { getResultAction } from '../redux/actions'


const mapStateToProps = (state) => ({
  result: state.search.result,
})

const mapDispatchToProps = (dispatch) => ({
 
})





const LikedSongs = (props) => {



    return (
      <Container fluid className="px-5 my-4">
        <div className="top-bumper"></div>
        <h2 className="h2-main">Liked Songs</h2>

        <Row id="main-section-recent">
          <h1>PLACEHOLDER</h1>
          {/* {props.searchQuery.length &&
            props.result.map((song) => (
              <OneSongCard
                key={song.id}
                albumId={song.album.id}
                songId = {song.id}
                image={song.album.cover_medium}
                title={song.title}
                artist={song.artist.name}
                setCurrentSong={props.setCurrentSong}
              />
            ))} */}
        </Row>
        <div className="bottom-bumper"></div>
      </Container>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(LikedSongs)
