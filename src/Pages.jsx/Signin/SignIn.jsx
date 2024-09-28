import React from 'react'
import './SignIn.css'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import logo from '../images/codeedex-removebg-preview.png'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

import {
    MDBCard,
    MDBCardBody,
} from 'mdb-react-ui-kit';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function SignIn() {
    return (
        <div >
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand tag="span" style={{fontWeight:"bold", fontSize:'large'}}  className='mb-0 h1 mx-4'>Codeedex Technologies</MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
            <div className="container">
                <div className="row my-3">
                    <div className="col-md-6 col-12 my-3">
                        <img className='logo' src={logo} />
                    </div>
                    <div className="col-md-6 col-12 my-3">
                        <MDBCard >
                            <MDBCardBody className='signInform'>
                                <form action="">
                                    {/* <div className='card' > */}
                                    <label className='formHeading my-2'>Username</label>
                                    <MDBInput id="form1" type="text" />
                                    <label className='formHeading my-2'>Password</label>
                                    <MDBInput id="form1" type="password" />
                                    <div className='my-3'>
                                        <MDBCheckbox color='black' name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                    </div>
                                    <div>
                                        <Link to={'/home'}>
                                        <MDBBtn size='sm' color='dark'>
                                            Sign In
                                        </MDBBtn></Link>
                                    </div>

                                    {/* </div> */}

                                </form>

                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn