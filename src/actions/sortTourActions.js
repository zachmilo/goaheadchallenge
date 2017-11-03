export function setdata() {
  return(dispatch,getState) => {
    let { tours }= getState().tours;
    dispatch({type: 'VIEW_DATA_SET',payload: tours});
  };
}

export function sortBy(filter) {
  return(dispatch,getState) => {
    let { tours }= getState().tours;
    dispatch({type: formatType(filter), payload: tours});
  };
}

/**
 * Formats the incoming string to match redux type 
 * @param {String} filter 
 * @returns {String}
 */
function formatType(filter) {
  return filter.toUpperCase().replace(' ','_');
}