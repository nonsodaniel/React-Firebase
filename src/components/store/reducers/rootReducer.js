import authReducer from './authReducer';
import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import itemsReducer from './itemsReducer';
import employeeReducer from './employeeReducer';
import roleReducer from './roleReducers';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  auth: authReducer,
  project: projectReducer,
  item: itemsReducer,
  employee: employeeReducer,
  role: roleReducer,

});

export default rootReducer;
