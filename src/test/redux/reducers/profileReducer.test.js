import profileReducer from '../../../redux/reducers/profileReducer';
import { profileUpdateType } from '../../../redux/actions/profileAction';
import { mockState } from '../../support/setup';

const initialState = mockState.auth;

describe('Profile Reducer', () => {
  it('should return the initial state', () => {
    expect(profileReducer(mockState, {})).toEqual(mockState);
  });
  it('should handle loading state', () => {
    const action = {
      type: profileUpdateType.loading,
      payload: true
    };
    const result = profileReducer(initialState, action);
    const expected = {
      ...initialState,
      isLoading: true,
    };
    expect(result).toEqual(expected);
  });
  it('should handle profile update success', () => {
    const payload = {
      token: 'usertoken',
      user: {
        username: 'johndoe',
        email: 'johndoe@email.com',
        firstname: 'john',
        lastname: 'doe',
        phoneNumber: '08012345678'
      }
    };
    const action = {
      type: profileUpdateType.success,
      payload,
    };
    const result = profileReducer(initialState, action);
    const expected = {
      ...initialState,
      ...payload,
    };
    expect(result).toEqual(expected);
  });
  it('should handle profile update failure', () => {
    const error = 'some error';
    const action = {
      type: profileUpdateType.failure,
      payload: error
    };
    const result = profileReducer(initialState, action);
    const expected = {
      ...initialState,
      errors: [error],
    };
    expect(result).toEqual(expected);
  });
});
