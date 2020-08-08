import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setNews, setArticle, setLoading } from './news.actions';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';
import { GET_NEWS, GET_NEWS_ARTICLE } from './news.types';

export function* handleNewsLoad() {
  try {
    yield put(setLoading(true));
    const news = yield call(
      getItems,
      `query{
        getAllNews{
          _id
          title
          text
          images{
            primary{
              medium
            }
            additional{
              medium
            }
          }
          author{
            name
            image{
              small
            }
          }
          date
          show
        }
      }`
    );
    yield put(setNews(news.data.getAllNews));
    yield put(setLoading(false));
  } catch (e) {
    yield call(handleNewsError, e);
  }
}

export function* handleArticleLoad({ payload }) {
  try {
    yield put(setLoading(true));
    const article = yield call(
      getItems,
      `query{
        getNewsById(id:"${payload}"){
          ... on News{
           __typename
            _id
            title
            text
            images{
              primary{
                medium
              }
              additional{
                medium
              }
            }
            author{
              name
              image{
                small
              }
            }
            date
            show
          }
          ... on Error {
            message
            statusCode
          }
        }
      }`
    );
    yield put(setArticle(article.data.getNewsById));
    yield put(setLoading(false));
  } catch (e) {
    yield call(handleNewsError, e);
  }
}

export function* handleNewsError(e) {
  yield put(setLoading(false));
  yield put(setError({ e }));
  yield put(push('/error-page'));
}

export default function* newsSaga() {
  yield takeEvery(GET_NEWS, handleNewsLoad);
  yield takeEvery(GET_NEWS_ARTICLE, handleArticleLoad);
}
