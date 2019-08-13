const initState = {
  status: null,
  roleMessage: null,
  roleData: null
};

export const roleReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_ROLE_SUCCESS':
      return {
        ...state,
        roleData: action.response.data,
        roleMessage: action.response.message,
        status: action.response.status
      };

    case 'CREATE_ROLE_ERROR':
      return {
        ...state,
        roleData: action.response.data,
        roleMessage: action.response.message,
        status: action.response.status
      };

    default:
      return state;
  }
};

export default roleReducer;
