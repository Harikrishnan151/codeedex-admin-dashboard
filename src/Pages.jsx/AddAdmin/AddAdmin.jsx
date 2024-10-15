import React, { useState } from 'react'
import './AddAdmin.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { addAdmin } from '../../services/allApi';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


function AddAdmin() {

    const [fullName,setFullName]=useState([]);
    const [username,setUserName]=useState([])
    const [email,setEmail]=useState([]);
    const [password,setPassword]=useState([]);
    const [address,setAddress]=useState([]);

    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
      e.preventDefault()
      const body={fullName,username,email,password,address}
      if(!fullName||!username||!email||!password||!address){
        alert('All feilds required')
      }else{
        const response=await addAdmin(body)
        console.log(response);
        if(response.status===201){
            Swal.fire({
                title: 'Success!',
                text: 'Admin added sucessfully',
                icon: 'success', 
                confirmButtonText: 'OK',
              });
              setTimeout(()=>{
                navigate('/admin')
              },2000)
        }

        
      }
    }

    return (
        <div className="container">
            <h3 style={{color:'black'}} className='mainHeading mt-4 '>Admin</h3>
            <p className='mainHeading mx-4' style={{ color: '#4F4F4F' }}>Manage / Admin / <span style={{ color: 'black', }}>Add Admin</span></p>
            <div className="row mainRow mx-4">
                <div className="col-12">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle className='adminBoxHeading' style={{ fontWeight: "bold",color:'black' }}>Add a admin</MDBCardTitle>
                            <MDBCardText>
                                <form onSubmit={handleSubmit}>
                                <label className='formHeading my-2'>Full Name</label>
                                <MDBInput onChange={(e)=>setFullName(e.target.value)} id="form1" type="text" />
                                <div className='inputBox'>
                                    <div>
                                        <label className='formHeading my-2'>Username</label>
                                        <MDBInput onChange={(e)=>setUserName(e.target.value)} id="form1" type="text" />
                                    </div>
                                    <div>
                                        <label className='formHeading my-2'>Password</label>
                                        <MDBInput onChange={(e)=>setPassword(e.target.value)} id="form1" type="text" />
                                    </div>
                                </div>
                                <label className='formHeading my-2'>Email</label>
                                <MDBInput onChange={(e)=>setEmail(e.target.value)} id="form1" type="text" />
                                <label className='formHeading my-2'>Address</label>
                                <MDBInput onChange={(e)=>setAddress(e.target.value)} id="form1" type="text" />
                                <div className='my-3 '>
                                    <MDBBtn type='submit' color='dark'>
                                        Submit
                                    </MDBBtn>
                                    <MDBBtn className='mx-3' style={{color:'white' ,backgroundColor:"#6C757D"}}>
                                        Reset
                                    </MDBBtn>
                                </div>
                                </form>
                            </MDBCardText>

                        </MDBCardBody>
                    </MDBCard>
                </div>

            </div>
        </div>
    )
}

export default AddAdmin