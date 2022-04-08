export const GET_RESULT = 'GET_RESULT'
export const ADD_TO_LIKED = 'ADD_TO_LIKED'
export const REMOVE_FROM_LIKED = 'REMOVE_FROM_LIKED'

export const getResultAction = (search) => {
    return async (dispatch) => {
      try {
        let resp = await fetch(
          `${process.env.REACT_APP_LOCAL}/search?q=${search}`
        )
        if (resp.ok) {
          let result = await resp.json()
  
          dispatch({
            type: GET_RESULT,
            payload: result.data,
          })
  
        } else {
          console.log('error')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  export const addToLikedAction = (song) => ({
    type: ADD_TO_LIKED,
    payload: song,
  })
  
  export const removeFromLikedAction = (index) => ({
    type: REMOVE_FROM_LIKED,
    payload: index,
  })