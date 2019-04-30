import typeGenerator from './typeGenerator';

export const globalType = typeGenerator('GLOBAL');

/**
 * Action creator that is dispatched when there's a loading state
 *
 * @param {boolean} payload - The loading controle state
 * @returns {object} - Returns an action object
 */
export const globalLoading = payload => ({
  type: globalType.loading,
  payload,
});

/**
 * Action creator that is dispatched when there's an error
 *
 * @param {object|Array} payload - The error object
 * @returns {object} - Returns an action object
 */
export const globalFailure = payload => ({
  type: globalType.failure,
  payload,
});
