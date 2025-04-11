import { combineReducers } from 'redux';
import { users } from './userMasterSlice';
import { menuReducer } from './menuReducer';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  users,
  menuReducer
  });

export default reducers;
