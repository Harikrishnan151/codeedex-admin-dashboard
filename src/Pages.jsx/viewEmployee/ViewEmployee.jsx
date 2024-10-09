import React, { useEffect, useState } from 'react'
import './ViewEmployee.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
import { editUser, viewUser } from '../../services/allApi';

function ViewEmployee() {

    const {id}=useParams()
    console.log(id);

    const [userData,setUserData]=useState({
        name:"",
        designation:"",
        email:"",
        username:"",
        

    })

    //api call to view user
    const fetchUserDetails=async()=>{
        const response=await viewUser(id)
        console.log(response);
        setUserData({
        name:response.data.name|| "",
        designation:response.data.designation.title|| "",
        email:response.data.email.toLowerCase()||"",
        username:response.data.username||"",

        })
    }
    console.log(userData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    //Api to edit user details
    const handleSubmit=async(e)=>{
       e.preventDefault()
       const body=userData
       console.log(body);
       const response=await editUser(id,body)
       console.log(response);
       
       
    }
    

    useEffect(()=>{
        fetchUserDetails()
    },[])
    
  return (
    <div className="container ">
           <h3 style={{color:'black'}} className='mainHeading mt-4 mx-4 '>Employee</h3>
           <p className='mainHeading mx-4' style={{ color: '#4F4F4F' }}>Manage / Employee / <span style={{ color: 'black', }}>Edit Employee</span></p>
           <div className="row employeeRow">
            <div className="col-12">
            <MDBCard className='mx-5'>
                <MDBCardBody>
                    <MDBCardTitle className='Headings' style={{ fontWeight: "bold",color:'black' }}>Edit Employee</MDBCardTitle>
                    <form onSubmit={handleSubmit}>
                    <MDBCardText>
                        <label className='formHeading my-2'>Employee Name</label>
                        <MDBInput onChange={handleChange} value={userData.name} name='name'  id="form1" type="text" />
                        <label className='formHeading my-2'>Designation</label>
                        <MDBInput onChange={handleChange} value={userData.designation} name='designation' id="form1" type="text" />
                        <label className='formHeading my-2'>Email</label>
                        <MDBInput onChange={handleChange} value={userData.email} id="form1" name='email' type="text" />
         
                        <label className='formHeading my-2'>User Name</label>
                        <MDBInput onChange={handleChange} value={userData.username} name='username' id="form1" type="text" />
                       
                        <div className='my-3 '>
                            <MDBBtn type='submit'  color='dark'>
                                Submit
                            </MDBBtn>
                            <MDBBtn className='mx-3' style={{color:'white' ,backgroundColor:"#6C757D"}}>
                                Reset
                            </MDBBtn>
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

export default ViewEmployee