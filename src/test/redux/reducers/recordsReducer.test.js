import recordsReducer from '../../../redux/reducers/recordsReducer';
import { fetchUserRecordsType, fetchRecordsType } from '../../../redux/actions/recordsAction';
import { deleteRecordType } from '../../../redux/actions/recordAction';
import { mockState } from '../../support/setup';

const initialState = mockState.records;

describe('Records Reducer', () => {
  it('should handle fetch record success', () => {
    const action = {
      type: fetchUserRecordsType.success,
      payload: [],
    };
    const result = recordsReducer(initialState, action);
    const expected = {
      ...initialState,
      userRecords: [],
      overview: {
        draft: 0,
        published: 0,
        rejected: 0,
        resolved: 0,
        total: 0,
        'under-investigation': 0,
      },
    };
    expect(result).toEqual(expected);
  });
  it('should handle fetch record success', () => {
    const action = {
      type: fetchRecordsType.success,
      payload: []
    };
    const result = recordsReducer(initialState, action);
    const expected = {
      ...initialState,
      records: [],
    };
    expect(result).toEqual(expected);
  });
  it('should handle delete record success', () => {
    const action = {
      type: deleteRecordType.success,
      payload: []
    };
    const result = recordsReducer(initialState, action);
    const expected = {
      ...initialState,
      userRecords: [],
    };
    expect(result).toEqual(expected);
  });
});
