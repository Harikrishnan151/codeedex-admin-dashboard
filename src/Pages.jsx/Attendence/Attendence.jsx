import React, { useEffect, useState } from 'react'
import './Attendence.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { allUsers, attendanceThisMonth, fetchDesignations, todayAttendence } from '../../services/allApi';

function Attendence() {
    const [workMode, setWorkMode] = useState('');
    const [showData, setShowData] = useState(true);

    const [Date, setDate] = useState('')
    const [month, setMonth] = useState('')

    const handleMonthChange = (event) => {
        setMonth(event.target.value)

    }

    // state to show current month attendence & filtered attendence
    const [attendence, setAttendence] = useState([]);
    const [filteredAttendence, setFilteredAttendence] = useState([]);

    //To get value from the month selection tag
    const handleChange = (event) => {
        setMonth(event.target.value);
        console.log('Selected Month:', event.target.value);
        setDate('') //reseted date to empty for disabling date input when user selects the month
    };

    // Handle change for date selection
    const handleDateChange = (event) => {
        setDate(event.target.value);
        console.log('Selected date:', event.target.value);
        setMonth(''); // Reseted month to empty for disabling date input when user selects the date
    };

    const handleSubmit = async () => {
        // Fetch data based on selection (age, department, etc.)
        setShowData(false);  // This hides the first data
        // Assume here you would call an API to fetch the filtered data
        setFilteredAttendence([/* some filtered data */]);
    }

    //Api call to fetch designation
    const [designation, setDesignation] = useState('')
    const [designationArr, setDesignationArr] = useState([])
    const getDesignation = async () => {
        const token = localStorage.getItem("token")
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response = await fetchDesignations(headers)
        console.log(response.data);
        setDesignationArr(response.data)
    }
    console.log(designationArr);
    //To get value from selection tag
    const handledesignation = (event) => {
        setDesignation(event.target.value);
        console.log('Selected _id:', event.target.value);
    };

    //Api call to get all users
    const [employeeArr, setEmployeeArr] = useState([]);
    const [assignedTo, setAssignedTo] = useState('')
    const fetchEmployees = async () => {
        const token = localStorage.getItem("token")
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response = await allUsers(headers)
        console.log(response.data);
        setEmployeeArr(response.data)

    }
    console.log(employeeArr);
    // To get value of employees from selection tag
    const handleEmployees = (event) => {
        setAssignedTo(event.target.value);
        console.log('Selected _id:', event.target.value);
    };
    console.log(assignedTo);

    //api call to fetch today attendence
    const [attendenceToday, setAttendenceToday] = useState([])
    const fetchTodayAttendence = async () => {
        const token = localStorage.getItem("token")
        const header = {
            Authorization: `Bearer ${token}`
        }
        const response = await todayAttendence(header)
        console.log(response.data);
        setAttendenceToday(response.data)
    }
    console.log('attendenceToday', attendenceToday);


    const { attendanceMarked } = attendenceToday;


    //Api call to get this month attendence
    const getThisMonthAttendence = async () => {
        const token = localStorage.getItem("token")
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response = await attendanceThisMonth(headers)
        console.log(response.data);
        setAttendence(response.data.data)
    }
    console.log('attendenceThisMonth', attendence);






    useEffect(() => {
        getDesignation()
        fetchEmployees()
        getThisMonthAttendence()
        fetchTodayAttendence()
    }, [])

    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col-6">
                    <h3 style={{ color: 'black' }} className='mainHeading mx-4 mt-4 '>Attendance</h3>
                    <p className='mainHeading mx-4' style={{ color: '#4F4F4F' }}>
                        Track / Attendance / <span style={{ color: 'black', }}>Attendance Sheet</span>
                    </p>
                </div>
                <div className="col-6 req-btn">
                    <Link to={'/attendence/requests'}>
                        <MDBBtn className='ml-4' color='dark'>Attendance Request</MDBBtn>
                    </Link>
                </div>
            </div>

            <div className="row attendencerow1 mx-4 my-3">
                <div className="col-2">
                    <FormControl sx={{ minWidth: 200 }} size="small">
                        <InputLabel id="demo-select-small-label">Department</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            label="Department"
                            id="demo-select-small"
                            value={designation}
                            onChange={handledesignation}



                            sx={{ width: '130px' }}

                        >

                            {
                                designationArr && designationArr.length > 0 ? designationArr.map((item) => (
                                    <MenuItem key={item._id} value={item._id}>
                                        {item.title}
                                    </MenuItem>
                                )) : "no deignation found"
                            }


                        </Select>
                    </FormControl>
                </div>
                <div className="col-2">
                    <FormControl sx={{ minWidth: 200 }} size="small">
                        <InputLabel id="demo-select-small-label">Employees</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            label="Employees"
                            value={assignedTo}
                            onChange={handleEmployees}
                            required

                            sx={{ width: '130px' }}

                        >

                            {employeeArr && employeeArr.length > 0 ? employeeArr.map(item => (
                                <MenuItem key={item._id} value={item._id}>
                                    {item.name}
                                </MenuItem>
                            )) : "No designation found"}

                        </Select>
                    </FormControl>
                </div>
                <div className="col-2">
                    <FormControl sx={{ minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Work Mode</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={workMode}
                            label="Work Mode"
                            onChange={handleChange}
                            sx={{ width: '130px' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'Onsite'}>Onsite</MenuItem>
                            <MenuItem value={'WFH'}>WFH</MenuItem>
                            <MenuItem value={'Hybrid'}>Hybrid</MenuItem>
                            <MenuItem value={'Remote'}>Remote</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="col-2">
                    <FormControl sx={{ minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Month</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={month}
                            disabled={Date !== ''}
                            label="Month"
                            onChange={handleMonthChange}
                            sx={{ width: '130px' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Jan</MenuItem>
                            <MenuItem value={2}>Feb</MenuItem>
                            <MenuItem value={3}>Mar</MenuItem>
                            <MenuItem value={4}>Apr</MenuItem>
                            <MenuItem value={5}>May</MenuItem>
                            <MenuItem value={6}>Jun</MenuItem>
                            <MenuItem value={7}>Jul</MenuItem>
                            <MenuItem value={8}>Aug</MenuItem>
                            <MenuItem value={9}>Sept</MenuItem>
                            <MenuItem value={10}>Oct</MenuItem>
                            <MenuItem value={11}>Nov</MenuItem>
                            <MenuItem value={12}>Dec</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="col-2 px-1">
                    <input onChange={handleDateChange} disabled={month !== ''} style={{ width: '130px', height: '37px', borderRadius: "4px" }} type="date" />
                </div>
                <div className="col-2">
                    <MDBBtn onClick={handleSubmit} color='dark'>Search</MDBBtn>
                </div>
            </div>





            {/* Render first data set if showData is true */}
            {showData && attendence && (

                <div>

                    <div className="row row1 mx-4">
                        <div className="col-12 my-3">
                            <h5 className='box-Heading' style={{ fontWeight: "bold" }}>Attendence Report Today</h5>
                            <MDBTable responsive >
                                <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                                    <tr>
                                        <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                                        <th style={{ fontWeight: 'bold' }} scope='col'>Employee Name</th>
                                        <th style={{ fontWeight: 'bold' }} scope='col'>Employee Code</th>
                                        <th style={{ fontWeight: 'bold' }} scope='col'>Work Id</th>
                                        <th style={{ fontWeight: 'bold' }} scope='col'>Status</th>


                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>

                                    {attendenceToday.attendanceMarked && attendenceToday.attendanceMarked?.length > 0 ? (
                                        attendenceToday.attendanceMarked.map((employee, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{employee.username}</td>
                                                <td>{employee.employeeCode}</td>
                                                <td>{employee.WRK_id}</td>
                                                <td>{employee.status}</td> 


                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6">No Attendance Marked</td>
                                        </tr>
                                    )}

                                </MDBTableBody>
                            </MDBTable>

                        </div>
                    </div>







                    <div className="row attendencerow2 mt-3 mx-4">
                        <div className="col-12 ">
                            <h5 className='box-Heading my-3' style={{ fontWeight: "bold" }}>Attendance Report This Month</h5>
                        </div>

                        <div className="col-12">
                            <MDBTable responsive>
                                <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }}>
                                    <tr>
                                        <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                                        <th style={{ fontWeight: 'bold' }} scope='col'>Employee Name</th>
                                        <th style={{ fontWeight: 'bold' }} scope='col'>Employee Code</th>
                                        <th style={{ fontWeight: 'bold' }} scope='col'>Date</th>
                                        <th style={{ fontWeight: 'bold' }} scope='col'>Status</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {
                                        attendence && attendence.length > 0 ? attendence.map((data, index) => (
                                            <tr key={index}>
                                                <th scope='row'>{index + 1}</th>
                                                <td>{data.user.Name}</td>
                                                <td>{data.user.EmpCode}</td>
                                                <td>{data.date.slice(8, 10)}{data.date.slice(4, 8)}{data.date.slice(0, 4)}</td>
                                                <td>{data.status}</td>
                                            </tr>
                                        )) : 'Attendence List not found'
                                    }
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                    </div>
                </div>
            )}

            {/* Render second data set if showData is false */}
            {!showData && filteredAttendence && (
                <div>
                    <h1>Filtered Data</h1>
                    {/* You can iterate over filteredAttendence and display it here */}
                </div>
            )}
        </div>
    )
}

export default Attendence;
