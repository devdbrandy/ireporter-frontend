import initialState from '../store/initialState';
import { fetchUserRecordsType } from '../actions/recordsAction';
import { deleteRecordAction } from '../actions/recordAction';

const { records } = initialState;

export default (state = records, { type, payload }) => {
  switch (type) {
    case fetchUserRecordsType.success:
      return {
        ...state,
        userRecords: payload
      };
    case deleteRecordAction.success:
      return {
        ...state,
        userRecords: state.userRecords.filter(record => record.id !== payload)
      };
    default:
      return state;
  }
};
