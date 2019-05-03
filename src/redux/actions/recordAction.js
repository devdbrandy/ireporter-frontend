import { toast } from 'react-toastify';
import makeRequest from '../../utils/request';
import exceptionHandler from '../../utils/exceptionHandler';
import { commonLoading, commonFailure } from './commonAction';
import typeGenerator from './typeGenerator';

export const deleteRecordType = typeGenerator('DELETE_RECORD');

/**
 * Action creator that is dispatched upon successful record removal
 *
 * @param {number} payload - The id of the affected record
 * @returns {object} - Returns an action object
 */
export const deleteRecordSuccess = payload => ({
  type: deleteRecordType.success,
  payload,
});

/**
 * Handles record creation
 *
 * @export
 * @param {string} type - The record type
 * @param {object} body - The record payload
 * @returns {void}
 */
export const createRecordAction = (type, body) => async (dispatch) => {
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

/**
 * Handles record update
 *
 * @export
 * @param {string} type - The record type
 * @param {number} id - The record id
 * @param {object} body - The record payload
 * @returns {void}
 */
export const updateRecordAction = (type, id, body) => async (dispatch) => {
  dispatch(commonLoading(true));
  try {
    const response = await makeRequest(`/api/v1/${type}s/${id}`, {
      method: 'PUT',
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

/**
 * Handles record status update
 *
 * @export
 * @param {string} type - The record type
 * @param {number} id - The record id
 * @param {object} body - The record payload
 * @returns {void}
 */
export const updateRecordStatusAction = ({ type, id, status }) => async (dispatch) => {
  dispatch(commonLoading(true));
  try {
    const response = await makeRequest(`/api/v1/${type}s/${id}/status`, {
      method: 'PATCH',
      body: { status }
    });
    const { message } = response.data.data[0];
    toast.success(message);
    dispatch(commonLoading(false));
  } catch (error) {
    const errorResponse = exceptionHandler(error);
    toast.error(errorResponse);
    dispatch(commonFailure(errorResponse));
  }
};

/**
 * Handles record delete
 *
 * @export
 * @param {string} type - The record type
 * @param {number} id - The record id
 * @returns {void}
 */
export const deleteRecordAction = (type, id) => async (dispatch) => {
  dispatch(commonLoading(true));
  try {
    const response = await makeRequest(`/api/v1/${type}s/${id}`, {
      method: 'DELETE',
    });
    const { message, id: recordId } = response.data.data[0];
    toast.success(message);
    dispatch(commonLoading(false));
    dispatch(deleteRecordSuccess(recordId));
  } catch (error) {
    const errorResponse = exceptionHandler(error);
    dispatch(commonFailure(errorResponse));
  }
};
