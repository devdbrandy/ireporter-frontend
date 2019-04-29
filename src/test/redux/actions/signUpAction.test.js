import * as actions from '../../../redux/actions/signUpAction';
import { createMockStore } from '../../support/setup';
import request from '../../../utils/request';

const mockStore = createMockStore();

jest.mock('../../../utils/request.js');

const { signUpType } = actions;
const payload = {
  token: '',
  user: {},
};

describe('Action creators', () => {
  it('should dispatch loading action', () => {
    const expected = {
      type: signUpType.loading,
      payload: true,
    };
    expect(actions.signUpLoading(true)).toEqual(expected);
  });
  it('should dispatch success action upon successful signup', () => {
    const expected = {
      type: signUpType.success,
      payload,
    };
    expect(actions.signUpSuccess(payload)).toEqual(expected);
  });
  it('should dispatch failure action upon signup failure', () => {
    const expected = {
      type: signUpType.failure,
      payload: [{ error: 'some error' }],
    };
    expect(actions.signUpFailure([{ error: 'some error' }])).toEqual(expected);
  });
  it('signUpUser() should dispatch laoding and success', () => {
    request.mockResolvedValue({
      data: {
        data: [{ token: '', user: {} }]
      }
    });
    const expectedAction = [
      {
        type: signUpType.loading,
        payload: true,
      },
      {
        type: signUpType.success,
        payload: {
          token: '',
          user: {}
        },
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.signUpUser({})).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('signUpUser() should dispatch failure with error payload', () => {
    const response = {
      data: {
        error: 'error message'
      }
    };
    request.mockRejectedValue({ response });

    const expectedAction = [
      {
        type: signUpType.loading,
        payload: true,
      },
      {
        type: signUpType.failure,
        payload: 'error message',
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.signUpUser({})).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
