import BaseUrl from './baseUrl';
import {commonRequest} from './commonReq'


//Api call to fetch all designations
export const fetchDesignations=async(headers)=>{
    return commonRequest("GET",`${BaseUrl}designation/`,"",headers)
}

//Api call to view Specified designation
export const viewDesignation=async(id,headers)=>{
    return commonRequest("Get",`${BaseUrl}designation/${id}`,"",headers)
}

//Api call to edit designation
export const editDesignation=async(id,body,headers)=>{
    return commonRequest("PUT",`${BaseUrl}designation/${id}`,body,headers)
}

//Api call to delete designation
export const deleteDesignation=async(id,headers)=>{
   return commonRequest("DELETE",`${BaseUrl}designation/${id}`,"",headers)
}

//Api to add designation
export const addDesignation=async(body,headers)=>{
    return commonRequest('POST',`${BaseUrl}designation/`,body,headers)
}

//Api call to get all users
export const allUsers=async(headers)=>{
    return commonRequest("GET",`${BaseUrl}users/`,"",headers)
}

//Api call to view specified user
export const viewUser=async(id,headers)=>{
    return commonRequest("GET",`${BaseUrl}users/${id}`,"",headers)
}

//Api call to edit user details
export const editUser=async(id,body,headers)=>{
   return commonRequest("PUT",`${BaseUrl}users/${id}`,body,headers)
}

//Api to delete user details
export const deleteUser=async(id,headers)=>{
    return commonRequest("DELETE",`${BaseUrl}users/${id}`,"",headers)
}

//Api to add user
export const addUser=async(body,headers)=>{
    return commonRequest("POST",`${BaseUrl}users/`,body,headers)
}

//Api to get all admin
export const allAdmins=async(headers)=>{
  return commonRequest("GET",`${BaseUrl}admin/`,"",headers)
}

//Api call to add admin
export const addAdmin=async(body,headers)=>{
    return commonRequest("POST",`${BaseUrl}admin/`,body,headers)
}

//Api call to delete admin
export const deleteAdmin=async(id,headers)=>{
    return commonRequest("DELETE",`${BaseUrl}admin/${id}`,"",headers)
}

//Api call to view admin
export const viewAdmin=async(id,headers)=>{
    return commonRequest("GET",`${BaseUrl}admin/${id}`,"",headers)
}

//Api call to edit admin details
export const editAdmin=async(id,body,headers)=>{
    return commonRequest("PUT",`${BaseUrl}admin/${id}`,body,headers)
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

//Api call to get list of attendence request
export const attendenceList=async(header)=>{
    return commonRequest("GET",`${BaseUrl}admin-attendance/requests/list`,"",header)
}

//Api call to view attendence request from list
export const viewAttendenceReq=async(body,header)=>{
    return commonRequest("Post",`${BaseUrl}admin-attendance/request/details`,body,header)
}

//Api call to approve/reject attendence request from list
export const editAttendenceReq=async(body,header)=>{
    return commonRequest("PUT",`${BaseUrl}admin-attendance/update`,body,header)
}

//Api call to view accepted request
export const viewApprovedReq=async(header)=>{
    return commonRequest("GET",`${BaseUrl}admin-attendance/proceed-list`,"",header)
}

//Api call to view rejected request
export const viewRejectedReq=async(header)=>{
    return commonRequest("GET",`${BaseUrl}admin-attendance/rejected-list`,"",header)
}

//Api call to get this month attendence list
export const attendanceThisMonth=async(header)=>{
    return commonRequest("GET",`${BaseUrl}admin-attendance/month`,"",header)
}

//Api call to get today attendence
export const todayAttendence=async(header)=>{
    return commonRequest("GET",`${BaseUrl}admin-attendance/list-today`,"",header)
}