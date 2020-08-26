import { CHANGE_CURRENCY } from '../currency.types';
import { changeCurrency } from '../currency.actions';

describe('test action', () => {
  test('should return default payload', () => {
    expect(changeCurrency()).toEqual({
      type: CHANGE_CURRENCY,
      payload: 0
    });
  });
  test('should return payload = 1', () => {
    expect(changeCurrency(1)).toEqual({
      type: CHANGE_CURRENCY,
      payload: 1
    });
  });
});
