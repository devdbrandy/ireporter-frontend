import * as actions from '../../../redux/actions/recordsAction';
import {
  commonType,
} from '../../../redux/actions/commonAction';
import { createMockStore } from '../../support/setup';
import request from '../../../utils/request';

const mockStore = createMockStore();

jest.mock('../../../utils/request.js');

const { fetchRecordsType, fetchUserRecordsType } = actions;

describe('Action creators', () => {
  it('should dispatch success action upon successful profile update', () => {
    const expected = {
      type: fetchUserRecordsType.success,
      payload: [],
    };
    expect(actions.fetchUserRecordsSuccess([])).toEqual(expected);
  });
  it('should dispatch failure action upon login failure', () => {
    const expected = {
      type: fetchRecordsType.success,
      payload: [],
    };
    expect(actions.fetchRecordsSuccess([])).toEqual(expected);
  });
  it('fetchUserRecords() should dispatch lodding and success', () => {
    request.mockResolvedValue({
      data: {
        data: []
      }
    });
    const expectedAction = [
      {
        type: commonType.loading,
        payload: true,
      },
      {
        type: commonType.loading,
        payload: false,
      },
      {
        type: fetchUserRecordsType.success,
        payload: [],
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.fetchUserRecords(1)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('fetchUserRecords() should dispatch failure with error payload', () => {
    const response = {
      data: {
        error: 'error message'
      }
    };
    request.mockRejectedValue({ response });

    const expectedAction = [
      {
        type: commonType.loading,
        payload: true,
      },
      {
        type: commonType.failure,
        payload: 'error message',
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.fetchUserRecords({})).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('fetchRecordsAction(true) should dispatch loading and success', () => {
    request.mockResolvedValue({
      data: {
        data: []
      }
    });
    const expectedAction = [
      {
        type: commonType.loading,
        payload: true,
      },
      {
        type: commonType.loading,
        payload: false,
      },
      {
        type: fetchRecordsType.success,
        payload: [],
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.fetchRecordsAction(true)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('fetchRecordsAction() should dispatch loading and success', () => {
    request.mockResolvedValue({
      data: {
        data: []
      }
    });
    const expectedAction = [
      {
        type: commonType.loading,
        payload: true,
      },
      {
        type: commonType.loading,
        payload: false,
      },
      {
        type: fetchUserRecordsType.success,
        payload: [],
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.fetchRecordsAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('fetchRecordsAction() should dispatch failure with error payload', () => {
    const response = {
      data: {
        error: 'error message'
      }
    };
    request.mockRejectedValue({ response });

    const expectedAction = [
      {
        type: commonType.loading,
        payload: true,
      },
      {
        type: commonType.failure,
        payload: 'error message',
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.fetchRecordsAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
