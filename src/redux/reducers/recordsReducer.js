import initialState from '../store/initialState';
import { fetchUserRecordsType, fetchRecordsType } from '../actions/recordsAction';
import { deleteRecordAction } from '../actions/recordAction';

const { records } = initialState;

export default (state = records, { type, payload }) => {
  switch (type) {
    case fetchUserRecordsType.success:
      return {
        ...state,
        records: payload
      };
    case fetchRecordsType.success:
      return {
        ...state,
        records: payload
      };
    case deleteRecordAction.success:
      return {
        ...state,
        records: state.userRecords.filter(record => record.id !== payload)
      };
    default:
      return state;
  }
};
