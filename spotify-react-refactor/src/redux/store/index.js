import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import searchReducer from '../reducers/search'
import thunk from 'redux-thunk'

const composeFunction =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {

  search: {
    result: [
      
    ],
  },
}

const bigReducer = combineReducers({
  search: searchReducer,
})

const configureStore = createStore(
 
  bigReducer,

  initialState,
 
  composeFunction(applyMiddleware(thunk))
)

export default configureStore