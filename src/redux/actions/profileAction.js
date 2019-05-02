import { toast } from 'react-toastify';
import typeGenerator from './typeGenerator';
import makeRequest from '../../utils/request';

export const profileUpdateType = typeGenerator('PROFILE_UPDATE');

/**
 * Action creator that is dispatched upon loading request
 *
 * @param {boolean} payload - The loading control state
 * @returns {object} - Returns an action object
 */
export const profileUpdateLoading = payload => ({
  type: profileUpdateType.loading,
  payload,
});

/**
 * Action creator that is dispatched upon successful profile update
 *
 * @param {object} payload - The user profile payload
 * @returns {object} - Returns an action object
 */
export const profileUpdateSuccess = payload => ({
  type: profileUpdateType.success,
  payload,
});

/**
 * Action creator that is dispatched if there's profile update failure
 *
 * @param {object} payload - The error object
 * @returns {object} - Returns an action object
 */
export const profileUpdateFailure = payload => ({
  type: profileUpdateType.failure,
  payload,
});

/**
 * Handles user login
 *
 * @export
 * @param {number} userId - The user unique id
 * @param {object} body - The user profile payload
 * @returns {void}
 */
export const profileUpdateAction = (userId, body) => async (dispatch) => {
  dispatch(profileUpdateLoading(true));
  try {
    const response = await makeRequest(`/api/v1/users/${userId}`, {
      method: 'PUT',
      body,
    });
    const { message, payload } = response.data.data[0];
    toast.success(message);
    dispatch(profileUpdateSuccess(payload));
  } catch (error) {
    const errorObject = JSON.parse(JSON.stringify(error));
    const { response } = errorObject;
    if (response) {
      const responseError = response.data.error;
      toast.error(responseError);
      dispatch(profileUpdateFailure(responseError));
    }
  }
};
