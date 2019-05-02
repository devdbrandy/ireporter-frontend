import initialState from '../store/initialState';
import { fetchUserRecordsType } from '../actions/recordsAction';

const { records } = initialState;

export default (state = records, { type, payload }) => {
  switch (type) {
    case fetchUserRecordsType.success:
      return {
        ...state,
        userRecords: payload
      };
    default:
      return state;
  }
};
