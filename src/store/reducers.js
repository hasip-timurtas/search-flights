 const rootReducer = (state={}, action) => { 
  switch (action.type) {
    case 'GET_FLIGHTS':
      return { ...state, loading: true };
    case 'CREATE_FLIGHT':
      return { ...state, creating: true};
    case 'FLIGHT_CREATED':
      return { ...state, flights: action.json, creating: false };
    case 'FLIGHTS_RECEIVED':
      return { ...state, flights: action.json, loading: false };
    default:
      return state;
  }
}
export default rootReducer;
