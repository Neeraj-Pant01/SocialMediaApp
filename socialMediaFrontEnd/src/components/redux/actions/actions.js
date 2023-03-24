import { actiontypes } from "../constants/actiontypes"

export const useractions = (user) =>{
    return{
        type:actiontypes.LOGIN,
        payload:user
    }
}