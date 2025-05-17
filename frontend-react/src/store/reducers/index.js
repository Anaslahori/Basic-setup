// third-party
import { combineReducers } from 'redux';
import menu from './menu';
import { users, usersByPermission, usersSecond, usersWithForms, usersHistory, supervisorUsers } from './userMasterSlice';



// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  menu,
  users
});

export default reducers;
