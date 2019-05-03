import initialState from '../store/initialState';
import { fetchUserRecordsType, fetchRecordsType } from '../actions/recordsAction';
import { fetchSingleRecordType, deleteRecordType } from '../actions/recordAction';

const { records } = initialState;

export default (state = records, { type, payload }) => {
  switch (type) {
    case fetchUserRecordsType.success:
      return {
        ...state,
        userRecords: payload
      };
    case fetchRecordsType.success:
      return {
        ...state,
        records: payload
      };
    case deleteRecordType.success:
      return {
        ...state,
        userRecords: state.userRecords.filter(record => record.id !== payload)
      };
    default:
      return state;
  }
};
