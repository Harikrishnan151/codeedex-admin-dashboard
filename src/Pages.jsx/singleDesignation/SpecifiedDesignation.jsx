import React, { useEffect, useState } from 'react'
import './SpecifiedDesignation.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editDesignation, viewDesignation } from '../../services/allApi';
import Swal from 'sweetalert2';

function SpecifiedDesignation() {

    const [formData,setFormData]=useState({
        title:"",
        description:""
    })

    const {id}=useParams()
    console.log(id);

    const navigation=useNavigate()

    //Api call to fetch specified designation
    const getSpecifiedDesignation = async () => {
        try {
            const response = await viewDesignation(id);
            console.log("Full API Response:", response.data);

            if (response.data && response.data.length > 0) {
                const designation = response.data[0];
                setFormData({
                    title: designation.title||"",
                    description: designation.description||""
                });
            } else {
                console.error("No designation data found.");
            }
        } catch (error) {
            console.error("Error fetching designation:", error);
        }
    };

    console.log(formData);
     
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    //Api call to edit designation
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const body=formData;
        console.log(body);
        const response=await editDesignation(id,body)
        console.log(response);
        if(response.status===200){
            Swal.fire({
                title: 'Success!',
                text: 'Designation edited sucessfully',
                icon: 'success', 
                confirmButtonText: 'OK',
              });
           setTimeout(()=>{
            navigation('/designation')
           },2000)
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Error in editing designation',
                icon: 'danger', 
                confirmButtonText: 'OK',
              });
            
        }   
        
    }

    useEffect(()=>{
        getSpecifiedDesignation()
    },[])
    
  return (
    <div className="conatiner">
        <h3  style={{ color: 'black' }} className='main-Heading mx-4 mt-4 '>Designation</h3>
        <p className='main-Heading mx-4' style={{ color: '#4F4F4F' }}>Manage / Designation / <span style={{ color: 'black', }}>Edit Designation</span></p>
        <div className="row main-Row">
            <div className="col-12">
            <MDBCard className='mx-5'>
                        <MDBCardBody>
                            <MDBCardTitle className='mainHeading' style={{ fontWeight: "bold",color:'black' }}>Edit Designation</MDBCardTitle>
                            <form onSubmit={handleSubmit}>
                            <MDBCardText>
                                <label className='formHeading my-2'>Title</label>
                                <MDBInput onChange={handleChange} id="form1" value={formData.title} name='title' type="text" />
                               
                                
                                <label className='formHeading my-2'>Description</label>
                                <MDBTextArea onChange={handleChange} value={formData.description} name='description' rows="{4}" />
                                <div className='my-3 '>
                                    <MDBBtn type='submit'  color='dark'>
                                       Submit
                                    </MDBBtn>
                               <Link to={'/designation'}><MDBBtn className='mx-3' style={{color:'white' ,backgroundColor:"#6C757D"}}>
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

export default SpecifiedDesignation