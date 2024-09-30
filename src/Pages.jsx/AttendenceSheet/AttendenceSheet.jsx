import React from 'react'
import './AttendenceSheet.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function AttendenceSheet() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className="container">
            <h3 style={{color:'black'}} className='mainHeading mx-4 mt-4 '>Attendence</h3>
            <p className=' mainHeading mx-4' style={{ color: '#4F4F4F' }}>Track / Attendence / <span style={{ color: 'black', }}>Attendence Sheet</span></p>
            <div className="row boxRows mx-3">
                <div className="col-2">
                    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                        <InputLabel id="demo-select-small-label">Designation</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={age}
                            label="Designation"
                            onChange={handleChange}
                            sx={{ width: '150px' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>TL</MenuItem>
                            <MenuItem value={20}>Developer</MenuItem>
                            <MenuItem value={30}>Tester</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="col-2">
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
                <div className="col-2">
                    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
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
                            <MenuItem value={10}>A</MenuItem>
                            <MenuItem value={20}>B</MenuItem>
                            <MenuItem value={30}>C</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="col-2">
                    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                        <InputLabel id="demo-select-small-label">Month</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={age}
                            label="Month"
                            onChange={handleChange}
                            sx={{ width: '150px' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>JAN</MenuItem>
                            <MenuItem value={20}>FEB</MenuItem>
                            <MenuItem value={30}>MAR</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="col-2">
                    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                        <InputLabel id="demo-select-small-label">Year</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={age}
                            label="Year"
                            onChange={handleChange}
                            sx={{ width: '150px' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>2023</MenuItem>
                            <MenuItem value={20}>2024</MenuItem>
                            <MenuItem value={30}>2025</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="col-2">
                    <Link >
                        <MDBBtn color='dark'>
                            Generate Report
                        </MDBBtn></Link>
                </div>
            </div>
        </div>
    )
}

export default AttendenceSheet