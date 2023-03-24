import { actiontypes } from "../constants/actiontypes"

const initialState = {
    user:{}
}

export const userReducer = (state=initialState,action) =>{
    switch(action.type){
        case actiontypes.LOGIN:
            return{
               payload : action.payload
            }
            default :
            return state
    }
}