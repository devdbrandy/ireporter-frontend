import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';

// Custom Reducers
import authReducer from './authReducer';
import signUpReducer from './signUpReducer';
import profileReducer from './profileReducer';

const auth = reduceReducers(authReducer, signUpReducer, profileReducer);

export default combineReducers({
  auth,
});
