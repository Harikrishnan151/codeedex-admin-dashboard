import React from 'react'
import './Admin.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
function Admin() {
    return (
        <div className="container">
            <div className='row headingrow'>
                <div className="col-6">
                    <h3 style={{color:'black'}} className='mainHeading mx-4 mt-4 '>Admin</h3>
                    <p className='mainHeading mx-4' style={{ color: '#4F4F4F' }}>Manage / <span style={{ color: 'black', }}>Admins</span></p>

                </div>
                <div className="col-6 addBtn">
                    <Link to={'/addAdmin'}>
                    <MDBBtn color='dark'>
                        Add admin
                    </MDBBtn></Link>
                </div>

            </div>

            <div className="row row1 mx-2 my-2">
                <div className="col-12 my-3 headingRow2">
                    <h5 className='mainHeading' style={{ fontWeight: "bold",color:'black' }}>Current Admins</h5>
                    <div>
                        <MDBInput label="Search" id="form1" type="text" />
                    </div>
                </div>
                <div className="col-12 my-2">
                    <MDBTable responsive>
                        <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                            <tr>
                                <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Admin Name</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Address</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Email</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Username</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Password</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Action</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <th scope='row'>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>mark@gmail</td>
                                <td>mark.1</td>
                                <td>@mdo</td>
                                <td><button className='btns' ><BorderColorIcon /></button>
                                    <button className='btns' style={{ color: 'red' }}> < DeleteIcon /></button>
                                </td>

                            </tr>
                            <tr>
                                <th scope='row'>2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>jacobps</td>
                                <td>@fat</td>
                                <td><button className='btns' ><BorderColorIcon /></button>
                                    <button className='btns' style={{ color: 'red' }}> < DeleteIcon /></button>
                                </td>
                            </tr>

                            <tr>
                                <th scope='row'>3</th>
                                <td>Jerin</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>jerinjosh</td>
                                <td>@jer</td>
                                <td><button className='btns' ><BorderColorIcon /></button>
                                    <button className='btns' style={{ color: 'red' }}> < DeleteIcon /></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope='row'>4</th>
                                <td>Edwin</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>edwincr</td>
                                <td>@edu</td>
                                <td><button className='btns' ><BorderColorIcon /></button>
                                    <button className='btns' style={{ color: 'red' }}> < DeleteIcon /></button>
                                </td>
                            </tr>
                            

                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>
        </div>

    )
}

export default Admin