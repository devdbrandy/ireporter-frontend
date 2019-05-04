import initialState from '../store/initialState';
import { fetchUserRecordsType, fetchRecordsType } from '../actions/recordsAction';
import { deleteRecordType } from '../actions/recordAction';
import { generateOverview } from '../../utils/helper';

const { records } = initialState;

export default (state = records, { type, payload }) => {
  switch (type) {
    case fetchUserRecordsType.success:
      return {
        ...state,
        userRecords: payload,
        overview: { ...generateOverview(payload) },
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
