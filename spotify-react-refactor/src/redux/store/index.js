
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import searchReducer from '../reducers/search'
import likedReducer from '../reducers/liked'
import thunk from 'redux-thunk'


const composeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {


  favourites: {
    liked: [

    ],
  },


  search: {
    result: [],
    artistAlbum: {},
    artistSongs: [],
    artistInfo: {},
  },
};

const bigReducer = combineReducers({
  favourites: likedReducer,
  search: searchReducer,
});

const configureStore = createStore(
  bigReducer,

  initialState,

  composeFunction(applyMiddleware(thunk))
);

export default configureStore;
