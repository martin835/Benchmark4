import { ADD_TO_LIKED, REMOVE_FROM_LIKED } from '../actions'
import { initialState } from '../store'

const likedReducer = (state = initialState.favourites, action) => {
  switch (action.type) {

    case ADD_TO_LIKED:
      return {

          ...state,

          liked: [...state.liked, action.payload],
        }

    case REMOVE_FROM_LIKED:
      return {
          ...state,
          liked: state.liked.filter(
            (song, i) => i !== action.payload
          ),
     
        }


    default:
      return state
  }
}

export default likedReducer
