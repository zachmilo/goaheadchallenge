const toursInit = {
  tours:[]
}

export default function reducer(state = toursInit, action) {
  switch(action.type) {
    case 'FETCH_TOURS_FULFILLED' : {
      return { ...state, tours:action.payload };
    }
    default: {
      return state;
    }
  }
}