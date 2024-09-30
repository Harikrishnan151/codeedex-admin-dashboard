import React from 'react'
import './Employees.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

function Employess() {
    return (
        <div className="container">
            <div className='row EmployeeRow1'>
                <div className="col-6">
                    <h3 style={{color:"black"}} className='mainHeading mx-4 mt-4 '>Employee</h3>
                    <p className='mainHeading mx-4' style={{ color: '#4F4F4F' }}>Manage / <span style={{ color: 'black', }}>Employee</span></p>

                </div>
                <div className="col-6 addBtn">
                    <Link to={'/addEmployee'}>
                        <MDBBtn color='dark'>
                            Add Employee
                        </MDBBtn></Link>
                </div>

            </div>

            <div className="row row1 mx-2 my-2">
                <div className="col-12 my-3 headingRow2">
                    <h5 className='mainHeading' style={{ fontWeight: "bold",color:"black" }}>Current Employee</h5>
                    <div>
                        <MDBInput label="Search" id="form1" type="text" />
                    </div>
                </div>
                <div className="col-12 my-2">
                    <MDBTable responsive>
                        <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                            <tr>
                                <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Employee Name</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Designation</th>
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
                                <td>TL</td>
                                <td>mark@gmail.com</td>
                                <td>markke</td>
                                <td>mark3</td>
                                <td><button className='btns' ><BorderColorIcon /></button>
                                    <button className='btns' style={{ color: 'red' }}> < DeleteIcon /></button>
                                </td>

                            </tr>
                            <tr>
                                <th scope='row'>2</th>
                                <td>Jacob</td>
                                <td>PM</td>
                                <td>jacon@gmmail</td>
                                <td>jacob</td>
                                <td>kacob2</td>
                                <td><button className='btns' ><BorderColorIcon /></button>
                                    <button className='btns' style={{ color: 'red' }}> < DeleteIcon /></button>
                                </td>
                            </tr>

                            <tr>
                                <th scope='row'>3</th>
                                <td>Jerin</td>
                                <td>Thornton</td>
                                <td>jerin@gmail</td>
                                <td>jerin</td>
                                <td>jer21</td>
                                <td><button className='btns' ><BorderColorIcon /></button>
                                    <button className='btns' style={{ color: 'red' }}> < DeleteIcon /></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope='row'>3</th>
                                <td>Edwin</td>
                                <td>TL</td>
                                <td>edwin@gmail</td>
                                <td>edwincr</td>
                                <td>edwin2</td>
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

export default Employess