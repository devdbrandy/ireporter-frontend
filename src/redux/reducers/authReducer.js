import initialState from '../store/initialState';
import { loginType } from '../actions/authAction';

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
        isAuth: !!payload.user,
        user: payload.user
      };
    case loginType.failure:
      return {
        ...state,
        errors: [...payload]
      };
    default:
      return state;
  }
};
