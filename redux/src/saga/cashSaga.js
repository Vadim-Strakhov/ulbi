import { put, takeEvery } from "redux-saga/effects";
import {
  ASYNC_DECREMENT_CASH,
  ASYNC_INCREMENT_CASH,
  decrementCash,
  incrementCash,
} from "../store/cashReducer";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* addCashWorker() {
  yield delay(1000);
  yield put(incrementCash());
}
function* getCashWorker() {
  yield delay(1000);
  yield put(decrementCash());
}

export function* cashWatcher() {
  yield takeEvery(ASYNC_INCREMENT_CASH, addCashWorker);
  yield takeEvery(ASYNC_DECREMENT_CASH, getCashWorker);
}
