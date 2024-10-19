import React, { useEffect, useState } from 'react'
import './EditWork.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { allUsers, editWorks, fetchDesignations, viewWorks } from '../../services/allApi';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Swal from 'sweetalert2';

function EditWorks() {

    const { id } = useParams()
    console.log(id);

    const [work, setWork] = useState({
        workName: "",
        deadline: ""
    })

    //designation
    const [designation, setDesignation] = useState('')

    const [designationArr, setDesignationArr] = useState([])

    //employees
    const [employeeArr, setEmployeeArr] = useState([]);
    const [assignedTo, setAssignedTo] = useState([])

    //navigate
    const navigate = useNavigate()

    //Api call to view works
    const fetchWorks = async () => {
        const token = localStorage.getItem("token");
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        try {
            const response = await viewWorks(id, headers);
            console.log(response);
    
            setWork({
                workName: response.data.data.workName || "",
                deadline: response.data.data.deadline || "",
            });
    
            // Check if assignedTo exists and is an array before mapping
            const assignedEmployees = Array.isArray(response.data.data.assignedTo)
                ? response.data.data.assignedTo.map((item) => ({
                    employee: item?.employee?._id || "", 
                }))
                : [];
    
            setAssignedTo(assignedEmployees);
    
            setDesignation(response.data.data.designation?._id || ""); 
        } catch (error) {
            console.error('Error fetching work details:', error);
        }
    
        console.log(assignedTo);
        console.log(work);
    };
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWork({
            ...work,
            [name]: value
        });
    };

    //Api call to fetch designation
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

    //Api call to fetch employee
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
        const selectedValues = event.target.value;
        const formattedAssignedTo = selectedValues.map(id => ({ employee: id }));
        setAssignedTo(formattedAssignedTo); // Set the formatted structure
        console.log('Selected employees:', formattedAssignedTo);
    };

    //Api call to edit works
    const editUserWorks = async (e) => {
        e.preventDefault()
        try {
            const body = {
                ...work,
                designation: designation,
                assignedTo: assignedTo
            }
            console.log(body);
            const token = localStorage.getItem("token")
            const headers = {
                Authorization: `Bearer ${token}`
            }
            const response = await editWorks(id, body, headers)
            console.log(response);
            if (response.status === 200) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Work details edited sucessfully',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                setTimeout(() => {
                    navigate('/works')
                }, 2000)
            }


        } catch (error) {
            alert('Internal server error')
        }

    }
    useEffect(() => {
        fetchWorks()
        getDesignation()
        fetchEmployees()
    }, [])
    return (
        <div className="conatiner">
            <div className="row mx-5">
                <h3 style={{ color: 'black' }} className='main-Heading mx-4 mt-4 '>Works</h3>
                <p className='main-Heading mx-4' style={{ color: '#4F4F4F' }}>Manage / Works / <span style={{ color: 'black', }}>Edit Works</span></p>
            </div>
            <div className="row mx-5">
                <div className="col-12">
                    <MDBCard className='editCard'>
                        <MDBCardBody>
                            <MDBCardTitle className='editBoxHeading' style={{ fontWeight: "bold", color: 'black' }}>Edit Works</MDBCardTitle>
                            <form onSubmit={editUserWorks}>
                                <MDBCardText>
                                    <label className='formHeading my-2'>Work Name</label>
                                    <MDBInput onChange={handleChange} value={work.workName} name='workName' id="form1" type="text" />


                                    <label className='formHeading my-2'>Designation</label>
                                    <div>
                                        <FormControl sx={{ minWidth: 200 }} size="small">
                                            <InputLabel id="demo-select-small-label"></InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={designation || ""} 
                                                onChange={handledesignation}
                                                sx={{ width: '649px' }}
                                            >
                                                {
                                                  designationArr &&  designationArr.length > 0 ? designationArr.map((item) => (
                                                        <MenuItem key={item._id} value={item._id}>
                                                            {item.title}
                                                        </MenuItem>
                                                    )) : <MenuItem disabled>No designation found</MenuItem> 
                                                }
                                            </Select>
                                        </FormControl>
                                    </div>

                                    <label className='formHeading my-2'>Assigned To</label>

                                    <div>
                                        <FormControl sx={{ minWidth: 200 }} size="small">
                                            <InputLabel id="demo-select-small-label"></InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                multiple
                                                value={assignedTo.length > 0 ? assignedTo.map(item => item.employee) : []} 
                                                onChange={handleEmployees}
                                                sx={{ width: '649px' }}
                                            >
                                                {
                                                  employeeArr &&  employeeArr.length > 0 ? employeeArr.map((item) => (
                                                        <MenuItem key={item._id} value={item._id}>
                                                            {item.name}
                                                        </MenuItem>
                                                    )) : <MenuItem disabled>No employees found</MenuItem> 
                                                }
                                            </Select>
                                        </FormControl>
                                    </div>

                                    <label className='formHeading my-2'>deadline</label>
                                    <MDBInput
                                        value={work.deadline ? new Date(work.deadline).toISOString().split('T')[0] : ''}
                                        name='deadline'
                                        id="form1"
                                        type="date"
                                        onChange={handleChange}
                                    />
                                    <div className='my-3 '>
                                        <MDBBtn type='submit' color='dark'>
                                            Submit
                                        </MDBBtn>
                                        <Link to={'/works'}>  <MDBBtn className='mx-3' style={{ color: 'white', backgroundColor: "#6C757D" }}>
                                            Cancel
                                        </MDBBtn></Link>
                                    </div>
                                </MDBCardText>
                            </form>
                        </MDBCardBody>
                    </MDBCard>

                </div>
            </div>

        </div>
    )
}

export default EditWorks