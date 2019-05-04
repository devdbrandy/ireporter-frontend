import * as actions from '../../../redux/actions/authAction';
import { createMockStore } from '../../support/setup';
import request from '../../../utils/request';

const mockStore = createMockStore();

jest.mock('../../../utils/request.js');

const { loginType } = actions;
const payload = {
  token: '',
  user: {},
};

describe('Action creators', () => {
  it('should dispatch loading action', () => {
    const expected = {
      type: loginType.loading,
      payload: true,
    };
    expect(actions.loginLoading(true)).toEqual(expected);
  });
  it('should dispatch success action upon successful login', () => {
    const expected = {
      type: loginType.success,
      payload,
    };
    expect(actions.loginSuccess(payload)).toEqual(expected);
  });
  it('should dispatch failure action upon login failure', () => {
    const expected = {
      type: loginType.failure,
      payload: [{ error: 'some error' }],
    };
    expect(actions.loginFailure([{ error: 'some error' }])).toEqual(expected);
  });
  it('loginUser() should dispatch laoding and success', () => {
    request.mockResolvedValue({
      data: {
        data: [{ token: '', user: {} }]
      }
    });
    const expectedAction = [
      {
        type: loginType.loading,
        payload: true,
      },
      {
        type: loginType.success,
        payload: {
          token: '',
          user: {}
        },
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.loginUser({})).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('loginUser() should dispatch failure with error payload', () => {
    const response = {
      data: {
        error: 'error message'
      }
    };
    request.mockRejectedValue({ response });

    const expectedAction = [
      {
        type: loginType.loading,
        payload: true,
      },
      {
        type: loginType.failure,
        payload: 'error message',
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.loginUser({})).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
