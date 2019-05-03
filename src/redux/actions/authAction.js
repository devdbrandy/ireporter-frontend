import { toast } from 'react-toastify';
import typeGenerator from './typeGenerator';
import makeRequest from '../../utils/request';

export const loginType = typeGenerator('LOGIN');
export const logoutType = typeGenerator('LOGOUT');

/**
 * Action creator that is dispatched upon loading login request
 *
 * @param {boolean} payload - The loading control state
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
 * @param {object} payload - The error object
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
 * @param {object} payload - The user creadentials
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
      let message = responseError;
      if (Array.isArray(responseError)) {
        message = responseError[0].msg;
      }
      toast.error(message);
      dispatch(loginFailure(responseError));
    }
  }
};

/**
 * Action creator that logs out user
 *
 * @returns {object} - Returns an action object
 */
export const logoutUser = () => dispatch => dispatch({ type: logoutType.success });
