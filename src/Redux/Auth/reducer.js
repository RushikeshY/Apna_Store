
import { LOGOUT_SUCCESS, LOGIN_SUCCESS, REGISTER_SUCCESS} from './actions'



const initState = {
    isAuth: false,
    registerAuth: false,
    token: null
}

export const AuthReducer = (state=initState,action)=>{

    switch(action.type) {

        case LOGIN_SUCCESS : {
            return {
                ...state,
                isAuth: true,
                registerAuth: false,
                token: action.payload
            }
        }
    
        case LOGOUT_SUCCESS : {
            return {
                ...state,
                isAuth: false,
                registerAuth: false,
                token: action.payload
            } 
        }

        case REGISTER_SUCCESS : {
            return {
                ...state,
                isAuth: false,
                registerAuth: true,
                token: action.payload
            } 
        }

        default : 
        return {
            state
        }
  }
}
export default AuthReducer