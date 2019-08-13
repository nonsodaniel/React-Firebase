const initState = {
    authStatus: null,
    authMessage: null,
    authCode: null
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authMessage: "Login successful",
                authStatus: "Success",
                authCode: 200
            }

        case 'LOGIN_ERROR':
            return {
                ...state,
                authMessage: "Login Failed",
                authStatus: "error",
                authCode: 501
            }


        case 'SIGNOUT_SUCCESS':
            return {
                ...state,
                authMessage: "Logout Successful",
                authStatus: "success",
                authCode: 200
            }

        case 'SIGNOUT_ERROR':
            return {
                ...state,
                authMessage: "Logout Failed",
                authStatus: "error",
                authCode: 501
            }

        default:
            return state
    }
}


export default authReducer

