import { ADD_USER, CLEAR_DETAILS, Delete_USER, GET_ALL_USERS, GET_USER_BY_NAME, GET_USER_DETAILS } from "../ActionTypes";
import $ from "jquery"


// $.ajax({
//     url:"http://localhost:3000/getAllUsers",
//     type:"GET",  
// })
    


const UsersReducer = (state = {filtered:[],users:[]},action)=>{
    switch (action.type){
        case GET_USER_BY_NAME:
            return{
                    ...state,filtered:action.payload
                }
        case GET_ALL_USERS:
            return {
                ...state,users:action.payload
            }
        case GET_USER_DETAILS:
            return{
                ...state,CurrentUser:action.payload
            }
        case CLEAR_DETAILS:
            return {...state,CurrentUser:null}
        
        case ADD_USER:
            if(!state.users)
                state.users = [];
            var new_list = state.users;
            new_list.push(action.payload);
            console.log(new_list);
            return{...state,new_list}    
        case Delete_USER:
            return{
                ...state
            }
            default: return state;
    }
}

export default UsersReducer;