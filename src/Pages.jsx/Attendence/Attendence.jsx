import React from 'react'
import './Attendence.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function Attendence() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="container">
            <h3 style={{color:'black'}} className='mx-4 mt-4 '>Attendence</h3>
            <p className='mx-4' style={{ color: '#4F4F4F' }}>Track / Attendence / <span style={{ color: 'black', }}>Attendence Sheet</span></p>

            <div className="row attendencerow1 mx-4 my-3">
                <div className="col-3">
                    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                        <InputLabel id="demo-select-small-label">Department</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={age}
                            label="Department"
                            onChange={handleChange}
                            sx={{ width: '150px' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Python</MenuItem>
                            <MenuItem value={20}>MERN</MenuItem>
                            <MenuItem value={30}>Flutter</MenuItem>
                        </Select>
                    </FormControl>

                </div>
                <div className="col-3">
                    <FormControl sx={{ m: 2, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Section</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={age}
                            label="Section"
                            onChange={handleChange}
                            sx={{ width: '150px' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Onsite</MenuItem>
                            <MenuItem value={20}>WFH</MenuItem>
                            <MenuItem value={30}>Hybrid</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="col-3 ">
                    <input className='mx-3' style={{ width: '150px', height: '36px', borderRadius: "4px" }} type="date" />
                </div>
                <div className="col-3">
                    <Link to={'/attendanceSheet'}>
                        <MDBBtn color='dark'>
                            Generate Sheet
                        </MDBBtn></Link>
                </div>


            </div>

            <div className="row attendencerow1 mx-4 ">
                <di className=" col-12 ">
                    <h5 className='my-3' style={{ fontWeight: "bold" }}>Attendance Report</h5>
                    <MDBTable responsive>
                        <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                            <tr>
                                <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Employee Name</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Semester</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Total Present Day</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Total Abscence Day</th>

                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <th scope='row'>1</th>
                                <td>Mark</td>
                                <td>First</td>
                                <td>10</td>
                                <td>2</td>


                            </tr>
                            <tr>
                                <th scope='row'>2</th>
                                <td>Jacob</td>
                                <td>First</td>
                                <td>1</td>
                                <td>10</td>


                            </tr>

                        </MDBTableBody>
                    </MDBTable>
                </di>
            </div>
        </div>
    )
}

export default Attendence