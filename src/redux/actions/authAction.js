import { toast } from 'react-toastify';
import typeGenerator from './typeGenerator';
import makeRequest from '../../utils/request';

export const loginType = typeGenerator('LOGIN');

/**
 * Action creator that is dispatched upon making login request
 *
 * @param {object} payload - The user payload state
 * @returns {object} - Returns an action object
 */
export const loginLoading = payload => ({
  type: loginType.loading,
  payload,
});

/**
 * Action creator that is dispatched upon successful login
 *
 * @param {object} payload - The user payload state
 * @returns {object} - Returns an action object
 */
export const loginSuccess = payload => ({
  type: loginType.success,
  payload,
});

/**
 * Action creator that is dispatched if there's login failure
 *
 * @param {object} payload - The user payload state
 * @returns {object} - Returns an action object
 */
export const loginFailure = payload => ({
  type: loginType.failure,
  payload,
});

/**
 * Handles user login
 *
 * @export
 * @param {object} payload - The user payload
 * @returns {void}
 */
export const loginUser = payload => async (dispatch) => {
  dispatch(loginLoading(true));
  try {
    const response = await makeRequest('/auth/login', { method: 'POST', body: payload });
    dispatch(loginSuccess(response.data.data[0]));
  } catch (error) {
    const errorObject = JSON.parse(JSON.stringify(error));
    const { response } = errorObject;
    if (response) {
      const responseError = response.data.error;
      toast.error(responseError);
      dispatch(loginFailure(response.data.error));
    }
  }
};
