import { signUpType as types } from '../actions/signUpAction';
import initialState from '../store/initialState';

const { auth } = initialState;

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default (state = auth, { type, payload }) => {
  switch (type) {
    case types.loading:
      return {
        ...state,
        isLoading: payload,
      };
    case types.success:
      return {
        ...state,
        user: { ...payload.user },
        token: payload.token,
        isAuthenticated: !!payload.token
      };
    case types.failure:
      return {
        ...state,
        errors: [payload]
      };
    default:
      return state;
  }
};
