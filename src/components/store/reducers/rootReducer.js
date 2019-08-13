import authReducer from './authReducer';
import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import itemsReducer from './itemsReducer';
import employeeReducer from './employeeReducer';
import roleReducer from './roleReducers';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  item: itemsReducer,
  employee: employeeReducer,
  role: roleReducer
});

export default rootReducer;
