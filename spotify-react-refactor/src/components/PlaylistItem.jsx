import { useState, useEffect } from "react";

function PlaylistItem() {
  return (
    <>
      <div class="row align-items-center py-3">
        <div class="col-9 col-sm-6 artist-main-songs-list">
          <span class="pr-2">INDEX</span>
          <span
            class="d-none"
            onClick={console.log(
              "HERE GOES ACTION THAT DISPLAYS SONG IN THE PLAYER"
            )}
          >
            <i class="bi bi-play-fill"></i>
          </span>
          <img src="" alt></img>
          <span>SONG NAME</span>
        </div>
        <div class="col-3 d-none d-md-block artist-main-songs-right">
          <span>NUMBER OF LISTENS</span>
        </div>
        <div class="col-6 col-md-3 d-none d-sm-block text-right  text-sm-center artist-main-songs-right">
          {/* <!-- <span><i class="bi bi-heart"></i></span> --> */}
          <span class="ml-3">SONG DURATION</span>
        </div>
      </div>
    </>
  );
}

export default PlaylistItem;
