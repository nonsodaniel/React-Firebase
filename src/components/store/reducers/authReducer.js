const initState = {
    status: null,
    authMessage: null,
    registerData: null,
    loginData: null,
    adminProfile: null,
    adminProfileMessage: null,
    adminProfileStatus: null,
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {

        case 'FETCH_ADMIN_SUCCESS':
            return {
                ...state,
                adminProfile: action.response.data,
                adminProfileMessage: action.response.message,
                adminProfileStatus: action.response.status,
            }

        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                registerData: action.response.data,
                authMessage: action.response.message,
                status: action.response.status
            }

        case 'CREATE_USER_SUCCESS':
            return {
                ...state,
                registerData: action.response.data,
                authMessage: action.response.message,
                status: action.response.status
            }

        case "SIGNUP_ERROR":
            return {
                ...state,
                registerData: action.response.data,
                authMessage: action.response.message,
                status: action.response.status
            }

        case "CREATE_USER_ERROR":
            return {
                ...state,
                registerData: action.response.data,
                authMessage: action.response.message,
                status: action.response.status
            }

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authMessage: action.response.message,
                status: action.response.status,
                loginData: action.response.data[0],
            }

        case 'LOGIN_ERROR':
            return {
                ...state,
                authMessage: action.response.message,
                status: action.response.status
            }

        case 'SIGNOUT_SUCCESS':
            return state;

        default:
            return state
    }
}


export default authReducer

