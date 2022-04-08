import { ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST, ADD_SONG_TO_PLAYLIST } from '../actions'
import { initialState } from '../store'

const playlistsReducer = (state = initialState.playlists, action) => {
  switch (action.type) {

    case ADD_TO_PLAYLIST:
      return {

          ...state,

          all: [...state.all, action.payload],
        }

    case REMOVE_FROM_PLAYLIST:
      return {
          ...state,
          all: state.all.filter(
            (playlist, i) => i !== action.payload
          ),
     
        }

        case ADD_SONG_TO_PLAYLIST:{
      
        const index = state.all.findIndex(playlist => playlist.name === action.payload.name); 
        const newArray = [...state.all]; 
        newArray[index].songs.push(action.payload.song) 
        return { 
         ...state,
         all: newArray, 
        }
        }


    default:
      return state
  }
}

export default playlistsReducer
