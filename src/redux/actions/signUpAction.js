import { toast } from 'react-toastify';
import typeGenerator from './typeGenerator';
import makeRequest from '../../utils/request';

export const signUpType = typeGenerator('SIGNUP');

/**
 * Action generator that is dispatched upon making request
 *
 * @param {object} payload - The user payload state
 * @returns {object} - Returns an action object
 */
export const signUpLoading = payload => ({
  type: signUpType.success,
  payload,
});

/**
 * Action generator that is dispatched upon successfully clapping on article
 *
 * @param {object} payload - The user payload state
 * @returns {object} - Returns an action object
 */
export const signUpSuccess = payload => ({
  type: signUpType.success,
  payload,
});

/**
 * Action generator that is dispatched if there's failure clapping on article
 *
 * @param {object} payload - The user payload state
 * @returns {object} - Returns an action object
 */
export const signUpFailure = payload => ({
  type: signUpType.failure,
  payload,
});

/**
 * Handles user signup
 *
 * @export
 * @param {object} token - The user payload
 * @returns {object} - Returns an actions object
 */
export const signUpUser = payload => async (dispatch) => {
  dispatch(signUpLoading(true));
  try {
    const response = await makeRequest('/auth/signup', { method: 'POST', body: payload });
    dispatch(signUpSuccess(response.data.data[0]));
  } catch (error) {
    const errorObject = JSON.parse(JSON.stringify(error));
    const { response } = errorObject;
    if (response) {
      const responseError = response.data.error;
      toast.error(responseError);
      dispatch(signUpFailure(responseError));
    }
  }
};
