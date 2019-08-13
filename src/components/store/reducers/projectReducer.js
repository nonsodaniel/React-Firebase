const initState = {
    status: null,
    projectMessage: null,
    projectData: null,
    taskMessage: null,
    taskData: null
}

export const projectReducer = (state = initState, action) => {
    switch (action.type) {

        case "CREATE_PROJECT":
            console.log("Create project success", action.project);

        case "CREATE_PROJECT_ERROR":
            console.log("Create project error", action.error);
            return state;










        case "CREATE_CATEGORY_SUCCESS":
            return {
                ...state,
                projectData: action.response.data,
                projectMessage: action.response.message,
                status: action.response.status
            }

        case "CREATE_TASK_SUCCESS":
            return {
                ...state,
                taskData: action.response.data,
                taskMessage: action.response.message,
                status: action.response.status
            }


        case "CREATE_NEWS_SUCCESS":
            return {
                ...state,
                projectData: action.response.data,
                projectMessage: action.response.message,
                status: action.response.status
            }

        case "CREATE_NEWS_ERROR":
            return {
                ...state,
                projectData: action.response.data,
                projectMessage: action.response.message,
                status: action.response.status
            }

        case "CREATE_TASK_ERROR":
            return {
                ...state,
                taskData: action.response.data,
                taskMessage: action.response.message,
                status: action.response.status
            }
        case "CREATE_CATEGORY_ERROR":
            return {
                ...state,
                projectData: action.response.data,
                projectMessage: action.response.message,
                status: action.response.status
            }

        case "FETCH_NEWS_RESPONSE":
            return {
                ...state,
                projectData: action.response.data,
                projectMessage: action.response.message,
                status: action.response.status
            }

        default:
            return state;
    }
}


export default projectReducer