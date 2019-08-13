import { get, post } from '../../../config/apiRequest'


export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('project').add({
            ...project,
            title: "Second project title",
            email: "My react email",
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })

    }
}

export const createNews = (credentials, cb) => {
    return (dispatch, getState) => {
        post(`/news`, credentials).then((response) => {
            console.log("Create news reponse ()=>", response);
            if (response.status === "Success") {
                dispatch({ type: "CREATE_NEWS_SUCCESS", response });
                if (typeof cb === "function") cb({ type: "CREATE_NEWS_SUCCESS", response });
                localStorage.setItem('news', JSON.stringify(response.data));
            } else {
                dispatch({ type: "CREATE_NEWS_ERROR", response });
                if (typeof cb === "function") cb();
            }
        })
    }
}

export const createTask = (credentials, cb) => {
    return (dispatch, getState) => {
        post(`/tasks`, credentials).then((response) => {
            console.log("Create Tasks reponse ()=>", response);
            if (response.status === "Success") {
                dispatch({ type: "CREATE_TASK_SUCCESS", response });
                if (typeof cb === "function") cb({ type: "CREATE_TASK_SUCCESS", response });
                localStorage.setItem('task', JSON.stringify(response.data));
            } else {
                dispatch({ type: "CREATE_TASK_ERROR", response });
                if (typeof cb === "function") cb();
            }
        })
    }
}


export const getNews = (cb) => {
    return (dispatch) => {
        get('/news').then(response => {
            console.log("MY new News is here", response);
            if (response.statuscode === 200) {
                dispatch({ type: "FETCH_NEWS_RESPONSE", response });
                if (typeof cb === "function") cb({ type: "FETCH_NEWS_RESPONSE", response });
            } else {
                dispatch({ type: "FETCH_NEWS_RESPONSE", response });
                if (typeof cb === "function") cb();
            }
        })
    }
}


export const createCategory = (credentials, cb) => {
    return (dispatch, getState) => {
        post(`/category`, credentials).then((response) => {
            console.log("Create category reponse ()=>", response);
            if (response.status === "Success") {
                dispatch({ type: "CREATE_CATEGORY_SUCCESS", response });
                if (typeof cb === "function") cb({ type: "CREATE_CATEGORY_SUCCESS", response });
                localStorage.setItem('category', JSON.stringify(response.data));
            } else {
                dispatch({ type: "CREATE_CATEGORY_ERROR", response });
                if (typeof cb === "function") cb();
            }
        })
    }
}

