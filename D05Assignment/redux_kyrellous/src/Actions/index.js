import { ADD_USER, Delete_USER, GET_USER_BY_NAME } from "../ActionTypes"
import {CLEAR_DETAILS} from "../ActionTypes"
import {GET_USER_DETAILS} from "../ActionTypes"
import {GET_ALL_USERS} from "../ActionTypes"
import axios from "axios"
const baseUrl = "http://localhost:3000/";

export const  getUserByName = async(name = "")=>{
    
    //fetch  Axios
    var filtered = await axios.get(`${baseUrl}getAllUsers/${name}`);   
     return{
        type: GET_USER_BY_NAME,
        payload:filtered.data
    }
}
export const deleteUser =async (id)=>{
    var res = await axios.delete(`${baseUrl}deleteUser/${id}`)
    return{
        type: Delete_USER,
        payload: res?.status
    }
}
export const clearDetails = ()=>{
    return{
        type:CLEAR_DETAILS,
        payload:null
    }
}

export const getDetails =async (id)=>{
    var user = null;
    try{
        user = await axios.get(`${baseUrl}SearchById/${id}`)
    }catch(e){
        console.log(e);
    }
    return {
        type:GET_USER_DETAILS,
        payload:user.data
    }
}

export  const getAllUsers =async ()=>{
    var users  = await axios.get(`${baseUrl}getAllUsers`);
    
    return { 
        type:GET_ALL_USERS,
        payload:users.data
    }
}

export const addUser = (user)=>{
    return {
        type:ADD_USER,
        payload:user
    }
}