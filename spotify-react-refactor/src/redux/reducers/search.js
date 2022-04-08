import { GET_RESULT } from "../actions";
import { initialState } from "../store";

const searchReducer = (state = initialState.search, action) => {
  switch (action.type) {
    case GET_RESULT:
      return {
        ...state,

        result: action.payload,
      };

    case "GET_ARTIST_ALBUM":
      return { ...state, artistAlbum: action.payload };

    case "GET_ARTIST_SONGS":
      return { ...state, artistSongs: action.payload };

    case "GET_ARTIST_INFO":
      return {
        ...state,
        artistInfo: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
