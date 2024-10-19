import React, { useEffect, useState } from 'react'
import './EditAdmin.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editAdmin, viewAdmin } from '../../services/allApi';
import Swal from 'sweetalert2';


function EditAdmin() {

    const {id}=useParams()
    console.log(id);

    const [formData,setFormData]=useState({
        fullName:"",
        username:"",
        adminCode:"",
        email:"",
        address:""
    })

    const navigate=useNavigate()

    //Api call to view admin
    const getAdminData=async()=>{
        const token=localStorage.getItem("token")
        const headers={
            Authorization: `Bearer ${token}`
        }
        const response=await viewAdmin(id,headers)
        console.log(response.data);
        setFormData({
            fullName:response.data.fullName||"",
            username:response.data.username||"",
            adminCode:response.data.adminCode||"",
            email:response.data.email||"",
            address:response.data.address||""

        })
        console.log(formData)
        
    }

    //function to change input value
    const handleChange=(e)=>{
       const {name,value}=e.target
       setFormData({
        ...formData,
        [name]: value
       })
    }
    
    //api call to edit admin details
    const hadleSubmit=async(e)=>{
        e.preventDefault()
        const body=formData
        console.log(body);
        try {
            const token=localStorage.getItem("token")
        const headers={
            Authorization: `Bearer ${token}`
        }
          const response=await editAdmin(id,body,headers) 
          console.log(response) 
          if(response.status===200){
            Swal.fire({
                title: 'Success!',
                text: 'Admin details edited sucessfully',
                icon: 'success', 
                confirmButtonText: 'OK',
              });
              setTimeout(()=>{
               navigate('/admin')
              },2000)
          }
        } catch (error) {
            Swal.fire({
                title: 'Faild!',
                text: 'Faild to edit admin details',
                icon: 'danger', 
                confirmButtonText: 'OK',
              });
            
        }

    }
    useEffect(()=>{
        getAdminData()
    },[])
    
  return (
    <div className="container">
        <div className="row mx-5">
        <h3 style={{ color: 'black' }} className='main-Headings mx-4 mt-4 '>Admin</h3>
        <p className='main-Headings mx-4' style={{ color: '#4F4F4F' }}>Manage / Admin / <span style={{ color: 'black', }}>Edit Admin</span></p>
        </div>
        <div className="row mx-5">
            <div className="col-12">
            <MDBCard className='editAdmin'>
                        <MDBCardBody>
                            <MDBCardTitle className='editAdminHeading' style={{ fontWeight: "bold",color:'black' }}>Edit Admin</MDBCardTitle>
                            <form onSubmit={hadleSubmit}>
                            <MDBCardText>
                                <label className='formHeading my-2'>Admin Name</label>
                                <MDBInput  id="form1" onChange={handleChange} value={formData.fullName}  name='fullName' type="text" />
                               
                                
                                <label className='formHeading my-2'>Address</label>
                                <MDBInput  id="form1" onChange={handleChange} value={formData.address} name='address' type="text" />

                                <label className='formHeading my-2'>Email</label>
                                <MDBInput  id="form1" onChange={handleChange} value={formData.email}  name='email' type="text" />

                                <label className='formHeading my-2'>User Name</label>
                                <MDBInput  id="form1" onChange={handleChange} value={formData.username}  name='username' type="text" />

                                <label className='formHeading my-2'>Admin Code</label>
                                <MDBInput  id="form1" onChange={handleChange} value={formData.adminCode}  name='adminCode' type="text" />
                                <div className='my-3 '>
                                    <MDBBtn type='submit'  color='dark'>
                                       Submit
                                    </MDBBtn>
                                  <Link to={'/admin'}>  <MDBBtn className='mx-3' style={{color:'white' ,backgroundColor:"#6C757D"}}>
                                        Cancel
                                    </MDBBtn></Link>
                                </div>
                            </MDBCardText>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
            </div>
        </div>
    </div>
  )
}

export default EditAdmin