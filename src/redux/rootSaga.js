import { all } from 'redux-saga/effects';
import newsSaga from './news/news.sagas';
import userSaga from './user/user.sagas';
import categoriesSaga from './categories/categories.sagas';
import newsDetailSaga from './news-detail/news-detail.sagas';
import languageSaga from './language/language.sagas';

export default function* rootSaga() {
  yield all([
    newsSaga(),
    categoriesSaga(),
    userSaga(),
    newsDetailSaga(),
    languageSaga()
  ]);
}
