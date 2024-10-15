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

//Api to get all admin
export const allAdmins=async()=>{
  return commonRequest("GET",`${BaseUrl}admin/`)
}

//Api call to add admin
export const addAdmin=async(body)=>{
    return commonRequest("POST",`${BaseUrl}admin/`,body)
}

//Api call to delete admin
export const deleteAdmin=async(id)=>{
    return commonRequest("DELETE",`${BaseUrl}admin/${id}`)
}

//Api call to view admin
export const viewAdmin=async(id)=>{
    return commonRequest("GET",`${BaseUrl}admin/${id}`)
}

//Api call to edit admin details
export const editAdmin=async(id,body)=>{
    return commonRequest("PUT",`${BaseUrl}admin/${id}`,body)
}

//Api call for admin login
export const adminLogin=async(body)=>{
    return commonRequest("POST",`${BaseUrl}auth/admin/login`,body)
}

//Api call to get all works
export const allWorks=async(header)=>{
    return commonRequest("GET",`${BaseUrl}admin-works/`,"",header)
}

//Api call to view works
export const viewWorks=async(id,headers)=>{
    return commonRequest("GET",`${BaseUrl}admin-works/${id}`,"",headers)
}

//Api call to delete works
export const deleteWorks=async(id,headers)=>{
    return commonRequest("DELETE",`${BaseUrl}admin-works/delete/${id}`,"",headers)
}

//Api call to add work
export const addWork=async(body,header)=>{
    return commonRequest("POST",`${BaseUrl}admin-works/create`,body,header)
}

//Api call to edit works
export const editWorks=async(id,body,headers)=>{
    return commonRequest("PUT",`${BaseUrl}admin-works/edit/${id}`,body,headers)
}