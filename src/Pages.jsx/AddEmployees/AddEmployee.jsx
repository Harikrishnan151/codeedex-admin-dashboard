import React from 'react'
import './AddEmployee.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

function AddEmployee() {
  return (
    <div className="container">
    <h3 style={{color:'black'}} className='mainHeading mx-4 mt-4 '>Employee</h3>
    <p className='mainHeading mx-4' style={{ color: '#4F4F4F' }}>Manage / Employee / <span style={{ color: 'black', }}>Add Employee</span></p>
    <div className="row employeeRow mx-4 my-3">
        <div className="col-12">
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle className='mainHeading' style={{ fontWeight: "bold",color:'black' }}>Add a Employee</MDBCardTitle>
                    <MDBCardText>
                        <label className='formHeading my-2'>Employee Name</label>
                        <MDBInput  id="form1" type="text" />
                        <label className='formHeading my-2'>Password</label>
                        <MDBInput id="form1" type="text" />
                        <label className='formHeading my-2'>Employee Code</label>
                        <MDBInput id="form1" type="text" />
         
                        <label className='formHeading my-2'>Designation</label>
                        <MDBInput id="form1" type="text" />
                        <label className='formHeading my-2'>Username</label>
                        <MDBInput id="form1" type="text" />
                        <label className='formHeading my-2'>Senior</label>
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

export default AddEmployee