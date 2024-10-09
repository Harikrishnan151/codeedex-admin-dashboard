import React, { useEffect, useState } from 'react'
import './AddDesignation.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';
import { addDesignation } from '../../services/allApi';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AddDesignation() {

    const [title,setTitle]=useState([])
    const [description,setDescription]=useState([])
    const navigate=useNavigate()

    //Api call to add designation
    const habdleSubmit=async(e)=>{
        e.preventDefault()
        const body={title,description}
        if(!title||!description){
            alert('All feilds required')
        }else{
            const response=await addDesignation(body)
            console.log(response.data);
            if(response.status===201){
                Swal.fire({
                    title: 'Success!',
                    text: 'Designation added sucessfully',
                    icon: 'success', 
                    confirmButtonText: 'OK',
                  });
                setTimeout(()=>{
                    navigate('/designation')
                },2000)
            }
            
        }
    }
    

  return (
    <div className="container">
                    <h3 style={{color:'black'}} className='mainHeading mx-4 mt-4 '>Designation</h3>
                    <p className='mainHeading mx-4' style={{ color: '#4F4F4F' }}>Manage / Designation / <span style={{ color: 'black', }}>Add Designation</span></p>
                    <div className="row main-row mx-4">
                        <div className="col-12">
                        <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle className='mainHeading' style={{ fontWeight: "bold",color:'black' }}>Add Designation</MDBCardTitle>
                            <form onSubmit={habdleSubmit}>
                            <MDBCardText>
                                <label className='formHeading my-2'>Title</label>
                                <MDBInput onChange={(e)=>setTitle(e.target.value)} id="form1" type="text" />
                               
                                
                                <label className='formHeading my-2'>Description</label>
                                <MDBTextArea onChange={(e)=>setDescription(e.target.value)}  rows="{4}" />
                                <div className='my-3 '>
                                    <MDBBtn  type='submit'  color='dark'>
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

export default AddDesignation