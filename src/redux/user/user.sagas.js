import { call, put, takeEvery } from 'redux-saga/effects';
import { setUser, setError, userLoading } from './user.actions';
import { LOGIN_USER } from './user.types';
import { setItems } from '../../utils/client';

const loginUser = (user) => {
  const { email, password } = user;
  const query = ` 
  mutation {
  loginUser(
    user: {
      email: "${email}"
      password: "${password}"
    }
  ) {
    purchasedProducts
    orders
    cart
    token
    id
  }
}
  `;
  return setItems(query);
};

function* handleUserLoad({ payload }) {
  try {
    yield put(userLoading());
    const user = yield call(loginUser, payload);
    yield put(setUser(user.data.loginUser));
  } catch (error) {
    console.log(error);
    yield put(setError(true));
  }
}

export default function* userSaga() {
  yield takeEvery(LOGIN_USER, handleUserLoad);
}
