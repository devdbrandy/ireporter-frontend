import signUpReducer from '../../../redux/reducers/signUpReducer';
import { signUpType } from '../../../redux/actions/signUpAction';
import { mockState } from '../../support/setup';

const initialState = mockState.auth;

describe('Profile Reducer', () => {
  it('should return the initial state', () => {
    expect(signUpReducer(mockState, {})).toEqual(mockState);
  });
  it('should handle loading state', () => {
    const action = {
      type: signUpType.loading,
      payload: true
    };
    const result = signUpReducer(initialState, action);
    const expected = {
      ...initialState,
      isLoading: true,
    };
    expect(result).toEqual(expected);
  });
  it('should handle user signup success', () => {
    const userPayload = {
      token: 'usertoken',
      user: {
        username: 'johndoe',
        email: 'johndoe@email.com',
        firstname: 'john',
        lastname: 'doe',
      }
    };
    const action = {
      type: signUpType.success,
      payload: userPayload
    };
    const result = signUpReducer(initialState, action);
    const expected = {
      ...initialState,
      ...userPayload,
      isAuthenticated: true,
    };
    expect(result).toEqual(expected);
  });
  it('should handle user signup failure', () => {
    const error = 'some error';
    const action = {
      type: signUpType.failure,
      payload: error
    };
    const result = signUpReducer(initialState, action);
    const expected = {
      ...initialState,
      errors: [error],
    };
    expect(result).toEqual(expected);
  });
});
