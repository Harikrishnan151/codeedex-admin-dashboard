import React from 'react'
import './Work.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
function Work() {
    return (
        <div className="container">
            <div className='row workRow1'>
                <div className="col-6">
                    <h3 style={{color:'black'}} className='mainHeading mx-4 mt-4 '>Works</h3>
                    <p className='mainHeading mx-4' style={{ color: '#4F4F4F' }}>Manage / <span style={{ color: 'black', }}>Work</span></p>

                </div>
                <div className="col-6 addBtn">
                    <Link to={'/addWorks'}>
                        <MDBBtn color='dark'>
                            Add Work
                        </MDBBtn></Link>
                </div>

            </div>

            <div className="row row1 mx-2 my-2">
                <div className="col-12 my-3 headingRow2">
                    <h5 className='mainHeading' style={{ fontWeight: "bold",color:"black" }}>Current Works</h5>
                    <div>
                        <MDBInput label="Search" id="form1" type="text" />
                    </div>
                </div>
                <div className="col-12 my-2">
                    <MDBTable responsive>
                        <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                            <tr>
                                <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Work Name</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Department</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Period</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Assigned Admin</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Action</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <th scope='row'>1</th>
                                <td>Mark</td>
                                <td>Python</td>
                                <td>mark@gmail.com</td>
                                <td>@mdo</td>
                                <td><button className='btns' ><BorderColorIcon /></button>
                                    <button className='btns' style={{ color: 'red' }}> < DeleteIcon /></button>
                                </td>

                            </tr>
                            <tr>
                                <th scope='row'>2</th>
                                <td>Jacob</td>
                                <td>MERN</td>
                                <td>jacob@gmail.com</td>
                                <td>@fat</td>
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

export default Work