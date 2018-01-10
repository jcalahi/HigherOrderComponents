import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authenticateReducer from './auth-reducer';

const rootReducer = combineReducers({
  authenticated: authenticateReducer
});

export default rootReducer;
