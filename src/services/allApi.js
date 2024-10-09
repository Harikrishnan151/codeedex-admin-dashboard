import BaseUrl from './baseUrl';
import {commonRequest} from './commonReq'


//Api call to fetch all designations
export const fetchDesignations=async()=>{
    return commonRequest("GET",`${BaseUrl}designation/`)
}

//Api call to view Specified designation
export const viewDesignation=async(id)=>{
    return commonRequest("Get",`${BaseUrl}designation/${id}`)
}

//Api call to edit designation
export const editDesignation=async(id,body)=>{
    return commonRequest("PUT",`${BaseUrl}designation/${id}`,body)
}

//Api call to delete designation
export const deleteDesignation=async(id)=>{
   return commonRequest("DELETE",`${BaseUrl}designation/${id}`)
}

//Api to add designation
export const addDesignation=async(body)=>{
    return commonRequest('POST',`${BaseUrl}designation/`,body)
}

//Api call to get all users
export const allUsers=async()=>{
    return commonRequest("GET",`${BaseUrl}users/`)
}

//Api call to view specified user
export const viewUser=async(id)=>{
    return commonRequest("GET",`${BaseUrl}users/${id}`)
}

//Api call to edit user details
export const editUser=async(id,body)=>{
   return commonRequest("PUT",`${BaseUrl}users/${id}`,body)
}

//Api to delete user details
export const deleteUser=async(id)=>{
    return commonRequest("DELETE",`${BaseUrl}users/${id}`)
}

//Api to add user
export const addUser=async(body)=>{
    return commonRequest("POST",`${BaseUrl}users/`,body)
}