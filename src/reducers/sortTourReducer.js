import _orderBy from 'lodash/orderBy'
const sortInit = {
  tours:[]
}


export default function sortreducer(state = sortInit, action) {
  switch(action.type) {
    case 'VIEW_DATA_SET' : {
      return { ...state, tours: action.payload.tours };
    } 
    case 'HIGHEST_PRICE' : {
      return { ...state, tours: _orderBy(action.payload, ['leadInPriceUSD'],['desc'])};
    }
    case 'LOWEST_PRICE' : {
      return { ...state, tours: _orderBy(action.payload, ['leadInPriceUSD'],['asc']) };
    }
    case 'LONGEST_DAYS' : {
      return { ...state, tours: _orderBy(action.payload, ['length'],['desc']) };
    }
    case 'SHORTEST_DAYS' : {
      return { ...state, tours:_orderBy(action.payload, ['length'],['asc'])};
    }
    default: {
      return state;
    }
  }
}
