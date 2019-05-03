import initialState from '../store/initialState';
import { loginType, logoutType } from '../actions/authAction';

const { auth } = initialState;

export default (state = auth, { type, payload }) => {
  switch (type) {
    case loginType.loading:
      return {
        ...state,
        isLoading: payload
      };
    case loginType.success:
      return {
        ...state,
        user: { ...payload.user },
        token: payload.token,
        isAuthenticated: !!payload.token
      };
    case loginType.failure:
      return {
        ...state,
        errors: [payload]
      };
    case logoutType.success:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
        token: '',
      };
    default:
      return state;
  }
};
