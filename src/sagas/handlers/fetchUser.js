import { call, put,takeEvery } from "redux-saga/effects";

import fetchGetUser from "../requests/fetchUser";

function* handleGetUser() {
  try {
    const users = yield call(fetchGetUser);
    yield put({ type: "GET_USER_SUCCESS", users: users });
  } catch (error) {
    yield put({ type: "GET_USER_FAILED", message: error.message });
  }
}

function* watcherUserSaga(){
    yield takeEvery ("GET_USER_REQUESTED",handleGetUser)
}

export default watcherUserSaga;
