const initState = {
    authStatus: null,
    authMessage: null,
    authCode: null
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {

        case 'LOGIN_SUCCESS':
            console.log("Login Success")
            return {
                ...state,
                authMessage: "Login successful",
                authCode: 200
            }

        case 'LOGIN_ERROR':
            console.log("Login Error")
            return {
                ...state,
                authMessage: "Login Failed",
                authCode: 501
            }


        case 'SIGNOUT_SUCCESS':
            return state;

        default:
            return state
    }
}


export default authReducer

