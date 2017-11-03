import axios from 'axios';

export default function fetchTours() {
  return (dispatch,getState) => {
    axios.get('http://demo5376176.mockable.io/getAllTours')
    .then((response) => {
      dispatch({ type: 'FETCH_TOURS_FULFILLED',payload: response.data })
    })
    .then(()=>{
      dispatch({ type: 'VIEW_DATA_SET',payload: getState().tours })
    })
    .catch((error)=> {
      dispatch({ type: 'FETCH_TOURS_REJECTED',payload: error })
    })
  }
}