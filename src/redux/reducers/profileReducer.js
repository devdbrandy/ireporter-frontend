import initialState from '../store/initialState';
import { profileUpdateType } from '../actions/profileAction';

const { auth } = initialState;

export default (state = auth, { type, payload }) => {
  switch (type) {
    case profileUpdateType.loading:
      return {
        ...state,
        isLoading: payload
      };
    case profileUpdateType.success:
      return {
        ...state,
        user: { ...payload.user },
        token: payload.token,
        isLoading: false,
      };
    case profileUpdateType.failure:
      return {
        ...state,
        errors: [payload],
        isLoading: false,
      };
    default:
      return state;
  }
};
