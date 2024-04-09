import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_USER, setUser } from "../store/customerReducer";

const fetchCustomersFromApi = () =>
  fetch("https://jsonplaceholder.typicode.com/users?_limit=1");

function* fetchCustomerWorker() {
  const data = yield call(fetchCustomersFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  console.log(json);
  yield put(setUser(json));
}

export function* customerWatcher() {
  yield takeEvery(FETCH_USER, fetchCustomerWorker);
}
