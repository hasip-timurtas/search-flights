import { put, takeLatest, all, call } from 'redux-saga/effects';
import { mergeFlightLists, getFlights } from './saga.helpers';


function* fetchFlightsSAGA(){
  const cheapFlights = yield call(getFlights, 'cheap')
  const businessFlights = yield call(getFlights, 'business')
  const flights = mergeFlightLists(cheapFlights, businessFlights);
  yield put({ type: "FLIGHTS_RECEIVED", json: flights });
}

function* getFlightsWATCHER() {
  yield takeLatest('GET_FLIGHTS', fetchFlightsSAGA)
}

function* createFlightSAGA(action) {
  yield put({ type: "FLIGHT_CREATED", json: action.data });
}

function* createFlightWATCHER() {
  yield takeLatest('CREATE_FLIGHT', createFlightSAGA)
}

export default function* rootSaga() {
  yield all([ getFlightsWATCHER(), createFlightWATCHER() ]);
}
