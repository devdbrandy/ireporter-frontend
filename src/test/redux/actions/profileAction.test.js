import * as actions from '../../../redux/actions/profileAction';
import { createMockStore } from '../../support/setup';
import request from '../../../utils/request';

const mockStore = createMockStore();

jest.mock('../../../utils/request.js');

const { profileUpdateType } = actions;
const payload = {
  firstname: 'john',
  lastname: 'doe',
  avatar: 'image.png',
  email: 'email@email.com',
  username: 'johndoe',
  phoneNumber: 'john',
};

describe('Action creators', () => {
  it('should dispatch loading action', () => {
    const expected = {
      type: profileUpdateType.loading,
      payload: true,
    };
    expect(actions.profileUpdateLoading(true)).toEqual(expected);
  });
  it('should dispatch success action upon successful profile update', () => {
    const expected = {
      type: profileUpdateType.success,
      payload,
    };
    expect(actions.profileUpdateSuccess(payload)).toEqual(expected);
  });
  it('should dispatch failure action upon login failure', () => {
    const expected = {
      type: profileUpdateType.failure,
      payload: [{ error: 'some error' }],
    };
    expect(actions.profileUpdateFailure([{ error: 'some error' }])).toEqual(expected);
  });
  it('profileUpdateAction() should dispatch lodding and success', () => {
    request.mockResolvedValue({
      data: {
        data: [{ message: 'some msg', payload }]
      }
    });
    const expectedAction = [
      {
        type: profileUpdateType.loading,
        payload: true,
      },
      {
        type: profileUpdateType.success,
        payload,
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.profileUpdateAction(1, payload)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('profileUpdateAction() should dispatch failure with error payload', () => {
    const response = {
      data: {
        error: 'error message'
      }
    };
    request.mockRejectedValue({ response });

    const expectedAction = [
      {
        type: profileUpdateType.loading,
        payload: true,
      },
      {
        type: profileUpdateType.failure,
        payload: 'error message',
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.profileUpdateAction({})).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
