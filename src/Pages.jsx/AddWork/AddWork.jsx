import React from 'react'
import './AddWork.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
function AddWork() {
  return (
    <div className="container">
    <h3 style={{color:'black'}} className='mx-4 mt-4 '>Work</h3>
    <p className='mx-4' style={{ color: '#4F4F4F' }}>Manage / Work / <span style={{ color: 'black', }}>Add Work</span></p>
    <div className="row WorkRow mx-4">
        <div className="col-12">
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle style={{ fontWeight: "bold",color:'black' }}>Add a Work</MDBCardTitle>
                    <MDBCardText>
                        <label className='formHeading my-2'>Work Name</label>
                        <MDBInput id="form1" type="text" />
                        <label className='formHeading my-2'>Employee Code</label>
                        <MDBInput id="form1" type="text" />
         
                        <label className='formHeading my-2'>Deadline</label>
                        <MDBInput id="form1" type="text" />
                        <label className='formHeading my-2'>Admin</label>
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

export default AddWork