import { get, post } from '../../../config/apiRequest';

export const createRole = (credentials, cb) => {
  return (dispatch, getState) => {
    post(`/roles`, credentials).then(response => {
      console.log('Create role reponse ()=>', response);
      if (response.status === 201) {
        dispatch({ type: 'CREATE_ROLE_SUCCESS', response });
        if (typeof cb === 'function')
          cb({ type: 'CREATE_ROLE_SUCCESS', response });
        localStorage.setItem('roles', JSON.stringify(response.data));
      } else {
        dispatch({ type: 'CREATE_ROLE_ERROR', response });
        if (typeof cb === 'function') cb();
      }
    });
  };
};

export const viewRoles = cb => {
  return dispatch => {
    get('/news').then(response => {
      console.log('MY new role is here', response);
      if (response.statuscode === 200) {
        dispatch({ type: 'FETCH_ROLE_RESPONSE', response });
        if (typeof cb === 'function')
          cb({ type: 'FETCH_ROLE_RESPONSE', response });
      } else {
        dispatch({ type: 'FETCH_ROLE_RESPONSE', response });
        if (typeof cb === 'function') cb();
      }
    });
  };
};

// export const createCategory = (credentials, cb) => {
//   return (dispatch, getState) => {
//     post(`/category`, credentials).then(response => {
//       console.log('Create category reponse ()=>', response);
//       if (response.status === 'Success') {
//         dispatch({ type: 'CREATE_CATEGORY_SUCCESS', response });
//         if (typeof cb === 'function')
//           cb({ type: 'CREATE_CATEGORY_SUCCESS', response });
//         localStorage.setItem('category', JSON.stringify(response.data));
//       } else {
//         dispatch({ type: 'CREATE_CATEGORY_ERROR', response });
//         if (typeof cb === 'function') cb();
//       }
//     });
//   };
// };
