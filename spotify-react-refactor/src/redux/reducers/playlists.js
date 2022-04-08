import { ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST } from '../actions'
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


    default:
      return state
  }
}

export default playlistsReducer
