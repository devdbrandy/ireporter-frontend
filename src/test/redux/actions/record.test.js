import * as actions from '../../../redux/actions/recordAction';
import {
  commonType,
} from '../../../redux/actions/commonAction';
import { createMockStore } from '../../support/setup';
import request from '../../../utils/request';

const mockStore = createMockStore();

jest.mock('../../../utils/request.js');

const { deleteRecordType } = actions;

describe('Action creators', () => {
  it('createRecordAction() should dispatch loading', () => {
    request.mockResolvedValue({
      data: {
        data: [{ message: 'success message' }]
      }
    });
    const props = {
      history: { push: jest.fn() }
    };
    const expectedAction = [
      {
        type: commonType.loading,
        payload: true,
      },
      {
        type: commonType.loading,
        payload: false,
      },
    ];
    const store = mockStore();
    return store.dispatch(actions.createRecordAction('red-flags', {}, props)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('createRecordAction() should dispatch failure', () => {
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
    return store.dispatch(actions.createRecordAction('red-flags', {})).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('updateRecordAction() should dispatch loading', () => {
    const props = {
      history: { push: jest.fn() }
    };
    request.mockResolvedValue({
      data: {
        data: [{ message: 'success message' }]
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
    ];
    const store = mockStore();
    return store.dispatch(actions.updateRecordAction('red-flags', 1, {}, props)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('updateRecordAction() should dispatch failure', () => {
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
    return store.dispatch(actions.updateRecordAction('red-flags', 1, {})).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('updateRecordStatusAction() should dispatch loading', () => {
    request.mockResolvedValue({
      data: {
        data: [{ message: 'success message' }]
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
    ];
    const store = mockStore();
    return store.dispatch(actions.updateRecordStatusAction({})).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('updateRecordStatusAction() should dispatch failure', () => {
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
    return store.dispatch(actions.updateRecordStatusAction({})).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('deleteRecordAction() should dispatch loading', () => {
    request.mockResolvedValue({
      data: {
        data: [{ message: 'success message', id: 1 }]
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
        type: deleteRecordType.success,
        payload: 1,
      },
    ];
    const store = mockStore();
    return store.dispatch(actions.deleteRecordAction('red-flags', 1)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('deleteRecordAction() should dispatch failure', () => {
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
    return store.dispatch(actions.deleteRecordAction('red-flags', 1)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
