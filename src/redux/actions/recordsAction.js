import typeGenerator from './typeGenerator';
import makeRequest from '../../utils/request';
import exceptionHandler from '../../utils/exceptionHandler';
import { commonLoading, commonFailure } from './commonAction';

export const fetchUserRecordsType = typeGenerator('FETCH_USER_RECORDS');
export const fetchRecordsType = typeGenerator('FETCH_RECORDS');

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
 * Action creator that is dispatched upon successfully fetching records
 *
 * @param {Array} payload - The list of records
 * @returns {object} - Returns an action object
 */
export const fetchRecordsSuccess = payload => ({
  type: fetchRecordsType.success,
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

/**
 * Fetches the given user records
 *
 * @export
 * @param {boolean} published - The published state
 * @returns {void}
 */
export const fetchRecordsAction = published => async (dispatch) => {
  dispatch(commonLoading(true));
  const query = published ? '?published=true&order=desc' : '?order=desc';
  try {
    const response = await makeRequest(`/api/v1/records${query}`);
    const payload = response.data.data;
    dispatch(commonLoading(false));
    if (published) dispatch(fetchRecordsSuccess(payload));
    else dispatch(fetchUserRecordsSuccess(payload));
  } catch (error) {
    const errorResponse = exceptionHandler(error);
    dispatch(commonFailure(errorResponse));
  }
};
