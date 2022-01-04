
const initialState = {
    isAuthenticated: false,
    loggedInEmail: ""
}

const rootReducer = (state = initialState, action)=>{
    if(action.type === "CHANGE_IS_AUTHENTICATED"){
        console.log('changing auth status to ' + action.payload);
        return{
            ...state,
            isAuthenticated: action.payload
        }
    } else if(action.type === 'LOGIN' || action.type === 'REGISTER'){
        console.log('changing logged in email to ' + action.payload)
        return {
            ...state,
            loggedInEmail: action.payload
        }
    }
    return state
}

export default rootReducer