import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import searchReducer from '../reducers/search'
import likedReducer from '../reducers/liked'
import playlistsReducer from '../reducers/playlists'
import thunk from 'redux-thunk'

const composeFunction =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {

  favourites: {
    liked: [

    ],
  },

  search: {
    result: [
      
    ],
  },
  playlists:{
    all:[

    ]
  }
}

const bigReducer = combineReducers({
  favourites: likedReducer,
  playlists: playlistsReducer,
  search: searchReducer,
})

const configureStore = createStore(
 
  bigReducer,

  initialState,
 
  composeFunction(applyMiddleware(thunk))
)

export default configureStore