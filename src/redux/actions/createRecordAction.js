import { toast } from 'react-toastify';
import makeRequest from '../../utils/request';
import exceptionHandler from '../../utils/exceptionHandler';
import { commonLoading, commonFailure } from './commonAction';

/**
 * Handles record creation
 *
 * @export
 * @param {number} type - The record type
 * @param {object} body - The record payload
 * @returns {void}
 */
const createRecordAction = (type, body) => async (dispatch) => {
  dispatch(commonLoading(true));
  try {
    const response = await makeRequest(`/api/v1/${type}`, {
      method: 'POST',
      body,
    });
    const { message } = response.data.data[0];
    toast.success(message);
    dispatch(commonLoading(false));
  } catch (error) {
    const errorResponse = exceptionHandler(error);
    dispatch(commonFailure(errorResponse));
  }
};

export default createRecordAction;
