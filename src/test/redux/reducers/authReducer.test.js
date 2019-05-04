import authReducer from '../../../redux/reducers/authReducer';
import { loginType, logoutType } from '../../../redux/actions/authAction';
import { mockState } from '../../support/setup';

const initialState = mockState.auth;

describe('Profile Reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(mockState, {})).toEqual(mockState);
  });
  it('should handle loading state', () => {
    const action = {
      type: loginType.loading,
      payload: true
    };
    const result = authReducer(initialState, action);
    const expected = {
      ...initialState,
      isLoading: true,
    };
    expect(result).toEqual(expected);
  });
  it('should handle user login success', () => {
    const userPayload = {
      token: 'usertoken',
      user: {
        username: 'johndoe',
        email: 'johndoe@email.com'
      }
    };
    const action = {
      type: loginType.success,
      payload: userPayload
    };
    const result = authReducer(initialState, action);
    const expected = {
      ...initialState,
      ...userPayload,
      isAuthenticated: true,
    };
    expect(result).toEqual(expected);
  });
  it('should handle user login failure', () => {
    const error = 'some error';
    const action = {
      type: loginType.failure,
      payload: error
    };
    const result = authReducer(initialState, action);
    const expected = {
      ...initialState,
      errors: [error],
    };
    expect(result).toEqual(expected);
  });
  it('should handle user logout', () => {
    const action = { type: logoutType.success };
    const result = authReducer(initialState, action);
    const expected = {
      ...initialState,
      isAuthenticated: false,
      token: '',
      user: {},
    };
    expect(result).toEqual(expected);
  });
});
