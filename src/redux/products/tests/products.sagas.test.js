import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';

import { handleProductLoading, handleAddComment } from '../products.sagas';
import { addComment, getComments, getProduct } from '../products.operations';

import { SET_ERROR } from '../../error/error.types';
import {
  SET_PRODUCTS_LOADING,
  SET_PRODUCT,
  SET_COMMENTS_LOADING,
  SET_COMMENT
} from '../products.types';

const productId = 'c3a84a5b9866c30390366168';

describe('Products saga', () => {
  it('fetches product', () => {
    const fakeProduct = {
      data: {
        getProductById: {
          name: {
            lang: 'en',
            value: 'Rolltop Pink'
          },
          basePrice: 1450
        }
      }
    };

    return expectSaga(handleProductLoading, productId)
      .provide([[matchers.call.fn(getProduct), fakeProduct]])
      .put({ type: SET_PRODUCTS_LOADING, payload: true })
      .put({ type: SET_PRODUCT, payload: fakeProduct.data.getProductById })
      .put({ type: SET_PRODUCTS_LOADING, payload: false })
      .run();
  });

  it('handles product fetching error', () => {
    const e = new Error('product not found');

    return expectSaga(handleProductLoading, productId)
      .provide([[matchers.call.fn(getProduct), throwError(e)]])
      .put({ type: SET_PRODUCTS_LOADING, payload: true })
      .put({ type: SET_PRODUCTS_LOADING, payload: false })
      .put({ type: SET_ERROR, payload: { e } })
      .run();
  });
});

describe('Add comments saga', () => {
  it('should add comment', () => {
    const args = {
      payload: {
        rate: 0,
        product: productId
      }
    };
    const addedComment = {
      data: {
        addComment: {
          text: 'nice'
        }
      }
    };
    const fakeComments = {
      data: {
        getAllCommentsByProduct: {
          text: 'nice'
        }
      }
    };

    return expectSaga(handleAddComment, args)
      .provide([
        [matchers.call.fn(addComment), addedComment],
        [matchers.call.fn(getComments), fakeComments]
      ])
      .put({ type: SET_COMMENTS_LOADING, payload: true })
      .put({
        type: SET_COMMENT,
        payload: fakeComments.data.getAllCommentsByProduct
      })
      .put({ type: SET_COMMENTS_LOADING, payload: false })
      .run();
  });
  it('should throw an error', () => {
    const args = {
      payload: {
        rate: 0,
        product: productId
      }
    };
    const e = new Error('Comment adding fails');

    return expectSaga(handleAddComment, args)
      .provide([[matchers.call.fn(addComment), throwError(e)]])
      .put({ type: SET_COMMENTS_LOADING, payload: true })
      .put({ type: SET_COMMENTS_LOADING, payload: false })
      .put({ type: SET_ERROR, payload: { e } })
      .run();
  });
});
