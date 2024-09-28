import React from 'react'
import './AddAdmin.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';


function AddAdmin() {
    return (
        <div className="container">
            <h3 style={{color:'black'}} className='mx-4 mt-4 '>Admin</h3>
            <p className='mx-4' style={{ color: '#4F4F4F' }}>Manage / Admin / <span style={{ color: 'black', }}>Add Admin</span></p>
            <div className="row mainRow mx-4">
                <div className="col-12">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle style={{ fontWeight: "bold",color:'black' }}>Add a admin</MDBCardTitle>
                            <MDBCardText>
                                <label className='formHeading my-2'>Full Name</label>
                                <MDBInput id="form1" type="text" />
                                <div className='inputBox'>
                                    <div>
                                        <label className='formHeading my-2'>Username</label>
                                        <MDBInput id="form1" type="text" />
                                    </div>
                                    <div>
                                        <label className='formHeading my-2'>Password</label>
                                        <MDBInput id="form1" type="text" />
                                    </div>
                                </div>
                                <label className='formHeading my-2'>Email</label>
                                <MDBInput id="form1" type="text" />
                                <label className='formHeading my-2'>Address</label>
                                <MDBInput id="form1" type="text" />
                                <div className='my-3 '>
                                    <MDBBtn  color='dark'>
                                        Submit
                                    </MDBBtn>
                                    <MDBBtn className='mx-3' style={{color:'white' ,backgroundColor:"#6C757D"}}>
                                        Reset
                                    </MDBBtn>
                                </div>
                            </MDBCardText>

                        </MDBCardBody>
                    </MDBCard>
                </div>

            </div>
        </div>
    )
}

export default AddAdmin