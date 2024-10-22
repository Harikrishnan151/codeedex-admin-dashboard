import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import './Absence.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import { MDBBtn } from 'mdb-react-ui-kit';
import { allUsers, filterEmployeeAbscence, todayAttendence } from '../../services/allApi';
import { Shield } from '@mui/icons-material';
function Abscence() {

  const [showData, setShowData] = useState(true);
  const [abscence, setAbscence] = useState([])
  const [filteredLeave, setFilteredLeave] = useState([]);



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

  //To get value from the month selection tag
  const [month, setMonth] = useState('')
  const handleMonthChange = (event) => {
    setMonth(event.target.value);
    console.log('Selected Month:', event.target.value);
  };

  //To get value from the month selection tag
  const [year, setYear] = useState('')
  const handleYearChange = (event) => {
    setYear(event.target.value);
    console.log('Selected Year:', event.target.value);
  };


  //Api call to filter out employee abscence
  const handleSubmit = async () => {
    const emplyCode = assignedTo;
    const selectedMonth = month;
    const selectedYear = year;
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`
    };
    try {
      if (!emplyCode || !selectedMonth || !selectedYear) {
        alert('Please Select required feilds ')
      } else {
        const response = await filterEmployeeAbscence(emplyCode, selectedMonth, selectedYear, headers);
        console.log('API Response:', response.data);
        setShowData(false);  // Hide the first data
        // Set filteredLeave directly to the response.data object
        if (response.data) {
          setFilteredLeave([response.data]);
        } else {
          setFilteredLeave([]);
        }
      }
    } catch (error) {
      console.error('Error fetching filtered absence data:', error);
      setFilteredLeave([]);
    }
  };

  //api call to fetch today attendence
  const [abscenteesToday, setAbscenteesToday] = useState([])
  const fetchTodayAbscence = async () => {
    const token = localStorage.getItem("token")
    const header = {
      Authorization: `Bearer ${token}`
    }
    const response = await todayAttendence(header)
    console.log(response.data);
    setAbscenteesToday(response.data)
  }
  console.log('attendenceToday', abscenteesToday);


  useEffect(() => {
    console.log('Filtered Leave Data:', filteredLeave);
  }, [filteredLeave]);

  useEffect(() => {
    fetchEmployees()
    fetchTodayAbscence()
  }, [])
  return (
    <div className='container'>
      <h3 style={{ color: 'black' }} className='mainHeading mx-4 mt-4 '>Absence</h3>
      <p className='mainHeading mx-4' style={{ color: '#4F4F4F' }}>Analyse / <span style={{ color: 'black', }}>Absence</span></p>
      <div className="row attendencerow1 mx-4 my-3">

        <div className="col-3">
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
                <MenuItem key={item.employeeCode} value={item.employeeCode}>
                  {item.name}
                </MenuItem>
              )) : "No designation found"}

            </Select>
          </FormControl>
        </div>
        <div className="col-3">
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Month</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={month}
              // disabled={Date !== ''}
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
        <div className="col-3">
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Year</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={year}
              label="Year"
              onChange={handleYearChange}
              sx={{ width: '130px' }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'2024'}>2024</MenuItem>
              {/* <MenuItem value={'2025'}>2025</MenuItem>
                            <MenuItem value={'2026'}>2026</MenuItem> */}

            </Select>
          </FormControl>
        </div>
        <div className="col-3">
          <MDBBtn onClick={handleSubmit} color='dark'>Search</MDBBtn>
        </div>
      </div>
      {
        showData && abscence && (
          <div>
            <div className="row row1 mx-4">
              <div className="col-12 my-3">
                <h5 className='mainHeading' style={{ fontWeight: "bold" }}>Absence Record Today</h5>
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
                    {
                      abscenteesToday.NotMarcked_List && abscenteesToday.NotMarcked_List.length > 0 ?
                        abscenteesToday.NotMarcked_List.map((employee, index) => (
                          <tr key={employee.EMP_id}>
                            <th scope='row'>{index + 1}</th>
                            <td>{employee.username}</td>
                            <td>{employee.employeeCode}</td>
                            <td>{employee.EMP_id}</td>
                            <td>{employee.Status}</td>
                          </tr>
                        ))
                        : <tr>
                          <td colSpan="4" style={{ textAlign: 'center' }}>No data found</td>
                        </tr>
                    }


                  </MDBTableBody>
                </MDBTable>

              </div>
            </div>

            <div className="row row2 my-3 mx-4">
              <div className="col-12 my-3">
                <h5 className='mainHeading' style={{ fontWeight: "bold" }}>Absence Record</h5>
                <MDBTable responsive>
                  <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                    <tr>
                      <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                      <th style={{ fontWeight: 'bold' }} scope='col'>Employee Name</th>
                      <th style={{ fontWeight: 'bold' }} scope='col'>Designation</th>
                      <th style={{ fontWeight: 'bold' }} scope='col'>Period</th>
                      <th style={{ fontWeight: 'bold' }} scope='col'>Absence Reason</th>
                      <th style={{ fontWeight: 'bold' }} scope='col'>Absence For</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <th scope='row'>1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>First</td>
                      <td>Fever</td>
                      <td>2 day</td>

                    </tr>
                    <tr>
                      <th scope='row'>2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>Second</td>
                      <td>Sick</td>
                      <td>1 day</td>

                    </tr>

                  </MDBTableBody>
                </MDBTable>

              </div>
            </div>
          </div>
        )
      }
      {
        !showData && filteredLeave && (
          <div className="row row2 my-3 mx-4">
            <div className="col-12 my-3">
              <h5 className='mainHeading' style={{ fontWeight: "bold" }}>Absence Record</h5>
              <MDBTable responsive>
                <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                  <tr>
                    <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                    <th style={{ fontWeight: 'bold' }} scope='col'>Employee Name</th>
                    <th style={{ fontWeight: 'bold' }} scope='col'>Employee Code</th>
                    <th style={{ fontWeight: 'bold' }} scope='col'>Designation</th>
                    <th style={{ fontWeight: 'bold' }} scope='col'>Period</th>
                    <th style={{ fontWeight: 'bold' }} scope='col'>Date</th>

                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                {
  filteredLeave && filteredLeave.length > 0 ?
    filteredLeave.map((data, index) => (
      <tr key={index}>
        <th scope='row'>{index + 1}</th>
        <td>{data.employee?.name || 'No Name'}</td>
        <td>{data.employee?.employeeCode || 'No EmployeeCode'}</td>
        <td>{data.employee?.designation?.title || 'No Designation'}</td>
        <td>{data.totalAbsences} days</td>
        <td>
          {(data.absences || []).map((absence, i) => (
            <span key={i}>
              {absence.date}
              <br />
            </span>
          ))}
        </td>
      </tr>
    ))
    :
    <tr>
      <td colSpan="6" style={{ textAlign: 'center' }}>
        {filteredLeave && filteredLeave.length === 0 
          ? 'No data found for the selected month and year.'
          : 'No Data Found'}
      </td>
    </tr>
}




                </MDBTableBody>
              </MDBTable>

            </div>
          </div>
        )
      }

    </div>
  )
}

export default Abscence