import initialState from '../store/initialState';
import { commonType } from '../actions/commonAction';

const { common } = initialState;

export default (state = common, { type, payload }) => {
  switch (type) {
    case commonType.loading:
      return {
        ...state,
        isLoading: payload
      };
    case commonType.failure:
      return {
        ...state,
        errors: [...payload],
        isLoading: false
      };
    default:
      return state;
  }
};
