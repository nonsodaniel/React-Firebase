const initState = {
  status: null,
  employeeMessage: null,
  employeeData: null
};

export const employeeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_EMPLOYEE_SUCCESS':
      return {
        ...state,
        employeeData: action.response.data,
        employeeMessage: action.response.message,
        status: action.response.status
      };

    case 'CREATE_EMPLOYEE_ERROR':
      return {
        ...state,
        employeeData: action.response.data,
        employeeMessage: action.response.message,
        status: action.response.status
      };

    default:
      return state;
  }
};

export default employeeReducer;
