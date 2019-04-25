import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';

// Custom Reducers
import authReducer from './authReducer';
import signUpReducer from './signUpReducer';

const auth = reduceReducers(authReducer, signUpReducer);

export default combineReducers({
  auth,
});
