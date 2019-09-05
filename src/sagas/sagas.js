import { put, call, takeEvery } from 'redux-saga/effects';

import { requestArr, requestArrSuccess, requestArrError } from '../store/actions';

function* fetchArrAsync() {
  try {
    yield put(requestArr());
    const data = yield call(() => {
      return fetch('http://localhost:4000/array')
      .then(res => res.json())
    });
    yield put(requestArrSuccess(data));
  } catch (error) {
    yield put(requestArrError());
  }
}

export default function* watchFetchArr() {
  yield takeEvery('FETCHED_ARRAY', fetchArrAsync);
}