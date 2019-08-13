import { post, get } from '../../../config/apiRequest'


export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((response) => {
            dispatch({ type: 'LOGIN_SUCCESS', response })
        }).catch(err => dispatch({ type: 'LOGIN_ERROR', err }))

    }
}

export const getAdminProfile = (cb) => {
    return (dispatch, getState) => {
        get(`/admin`).then((response) => {
            console.log("Admin reponse ()=>", response);
            if (response.status === "Success") {
                dispatch({ type: "FETCH_ADMIN_SUCCESS", response });
                if (typeof cb === "function") cb({ type: "FETCH_ADMIN_SUCCESS", response });
                localStorage.setItem('fetchAdmin', JSON.stringify(response.data));
            } else {
                dispatch({ type: "FETCH_ADMIN_ERROR", response });
                if (typeof cb === "function") cb();
            }
        })
    }
}



export const signUp = (credentials, cb) => {
    return (dispatch, getState) => {
        post(`/admin/`, credentials).then((response) => {
            console.log("signUp response ()=>", response);
            if (response.status === 'Success') {
                dispatch({ type: 'SIGNUP_SUCCESS', response });
                if (typeof cb === "function") cb({ type: "SIGNUP_SUCCESS", response });
                localStorage.setItem('admin', JSON.stringify(response.data));
            } else {
                dispatch({ type: 'SIGNUP_ERROR', response });
                if (typeof cb === "function") cb();
            }

        })
    }
}

export const forgotPassword = (credentials, cb) => {
    return (dispatch, getState) => {
        post(`/admin/forgot-password`, credentials).then(response => {
            console.log("ForgotPassword response", response);
        })
    }
}

export const createUsers = (credentials, cb) => {
    return (dispatch, getState) => {
        post('/user/register', credentials).then((response) => {
            console.log("Create user response ()=>", response);
            if (response.status === "Success") {
                dispatch({ type: "CREATE_USER_SUCCESS", response });
                if (typeof cb === "function") cb({ type: "CREATE_USER_SUCCESS", response });

            } else {
                dispatch({ type: "CREATE_USER_ERROR", response });
                if (typeof cb === "function") cb();
            }
        })
    }
}


export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: "SIGNOUT_SUCCESS" })
        }).catch(err => dispatch({ type: "SIGNOUT_ERROR", err }))
    }
}

