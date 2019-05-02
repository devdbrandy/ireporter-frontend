import typeGenerator from './typeGenerator';
import makeRequest from '../../utils/request';
import exceptionHandler from '../../utils/exceptionHandler';
import { commonLoading, commonFailure } from './commonAction';

export const fetchUserRecordsType = typeGenerator('FETCH_RECORDS');

/**
 * Action creator that is dispatched upon successfully fetching records
 *
 * @param {Array} payload - The list of records
 * @returns {object} - Returns an action object
 */
export const fetchUserRecordsSuccess = payload => ({
  type: fetchUserRecordsType.success,
  payload,
});

/**
 * Fetches the given user records
 *
 * @export
 * @param {number} userId - The user unique id
 * @returns {void}
 */
export const fetchUserRecords = userId => async (dispatch) => {
  dispatch(commonLoading(true));
  try {
    const response = await makeRequest(`/api/v1/records?user=${userId}&order=desc`);
    const payload = response.data.data;
    dispatch(commonLoading(false));
    dispatch(fetchUserRecordsSuccess(payload));
  } catch (error) {
    const errorResponse = exceptionHandler(error);
    dispatch(commonFailure(errorResponse));
  }
};
