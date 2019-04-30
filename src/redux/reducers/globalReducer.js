import initialState from '../store/initialState';
import { globalType } from '../actions/globalAction';

const { global } = initialState;

export default (state = global, { type, payload }) => {
  switch (type) {
    case globalType.loading:
      return {
        ...state,
        isLoading: payload
      };
    case globalType.failure:
      return {
        ...state,
        errors: [...payload],
        isLoading: false
      };
    default:
      return state;
  }
};
