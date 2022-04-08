import { useState, useEffect } from "react";

function PlaylistItem({ song, i, smallImg }) {
  return (
    <>
      <div class="row align-items-center py-3">
        <div class="col-9 col-sm-6 artist-main-songs-list">
          <span class="pr-2">{i + 1}</span>
          <span
            class="d-none"
            onClick={() =>
              console.log("HERE GOES ACTION THAT DISPLAYS SONG IN THE PLAYER")
            }
          >
            <i class="bi bi-play-fill"></i>
          </span>
          <img src={song && smallImg} alt></img>
          <span>{song && song.title_short}</span>
        </div>
        <div class="col-3 d-none d-md-block artist-main-songs-right">
          <span>{song && song.rank}</span>
        </div>
        <div class="col-6 col-md-3 d-none d-sm-block text-right  text-sm-center artist-main-songs-right">
          {/* <!-- <span><i class="bi bi-heart"></i></span> --> */}
          <span class="ml-3">{song && song.duration}</span>
        </div>
      </div>
    </>
  );
}

export default PlaylistItem;
