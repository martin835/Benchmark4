export const GET_RESULT = 'GET_RESULT'

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