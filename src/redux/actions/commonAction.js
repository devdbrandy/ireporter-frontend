import typeGenerator from './typeGenerator';

export const commonType = typeGenerator('COMMON');

/**
 * Action creator that is dispatched when there's a loading state
 *
 * @param {boolean} payload - The loading controle state
 * @returns {object} - Returns an action object
 */
export const commonLoading = payload => ({
  type: commonType.loading,
  payload,
});

/**
 * Action creator that is dispatched when there's an error
 *
 * @param {object|Array} payload - The error object
 * @returns {object} - Returns an action object
 */
export const commonFailure = payload => ({
  type: commonType.failure,
  payload,
});
