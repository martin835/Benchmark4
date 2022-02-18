import {Container, Row, Col} from "react-bootstrap";
import OneSongCard from "./OneSongCard";
import { useState, useEffect } from "react";

const MainBody = (props) => {

    const [songs, setSongs] = useState([])
    
    useEffect(() => {
      if(props.searchQuery) {
        fetchSongs();
    } else {
      props.setSearchQuery("queen")
    }
  }, [props.searchQuery]);

    const fetchSongs = async () => {
        try {
          let response = await fetch(
            "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
              props.searchQuery
          );
          if (response.ok) {
            let data = await response.json();
            console.log( data.data);
       
    
              setSongs(data.data);
     
          } else {
 
            alert("Something wrong")
          }
        } catch (error) {
          console.log(error);
       
        }
    } 


    return (
      <Container fluid className="px-5 my-4">
        <div className="top-bumper"></div>
        <h2 className="h2-main">Recently played</h2>

        <Row id="main-section-recent">
          {props.searchQuery.length &&
            songs.map((song) => (
              <OneSongCard
                key={song.id}
                image={song.album.cover_medium}
                title={song.title}
                artist={song.artist.name}
                setCurrentSong={props.setCurrentSong}
              />
            ))}
        </Row>
        <div className="bottom-bumper"></div>
      </Container>
    );
}

export default MainBody;
