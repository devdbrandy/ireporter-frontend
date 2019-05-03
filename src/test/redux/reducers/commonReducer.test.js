import commonReducer from '../../../redux/reducers/commonReducer';
import { commonType } from '../../../redux/actions/commonAction';
import { mockState } from '../../support/setup';

const initialState = mockState.common;

describe('Profile Reducer', () => {
  it('should return the initial state', () => {
    expect(commonReducer(mockState, {})).toEqual(mockState);
  });
  it('should handle loading state', () => {
    const action = {
      type: commonType.loading,
      payload: true
    };
    const result = commonReducer(initialState, action);
    const expected = {
      ...initialState,
      isLoading: true,
    };
    expect(result).toEqual(expected);
  });
  it('should handle loading failure', () => {
    const action = {
      type: commonType.failure,
      payload: ['some error']
    };
    const result = commonReducer(initialState, action);
    const expected = {
      ...initialState,
      isLoading: false,
      errors: [...action.payload]
    };
    expect(result).toEqual(expected);
  });
});
