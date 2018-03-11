import reducer from '../reducer/auth';
require('jest');

describe('Auth Reducer', () => {
  it('should return the initial state on first call', () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  it('should handle TOKEN_SET', () => {
    let token = { token: '1234' };

    let state = reducer(null, {
      type: 'TOKEN_SET',
      payload: token,
    });

    expect(state).toMatchObject(token);

    let token2 = { token: '5678' };
    state = reducer(token, {
      type: 'TOKEN_SET',
      payload: token2,
    });

    expect(state).toMatchObject(token2);
  });

  it('should handle TOKEN_DELETE', () => {
    let state = { token: '1234 '};

    let newState = reducer(state, { type: 'TOKEN_DELETE' });

    expect(newState).toBe(null);
  });
});