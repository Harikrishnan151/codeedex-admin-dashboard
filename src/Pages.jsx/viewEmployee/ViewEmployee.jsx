import React, { useEffect, useState } from 'react'
import './ViewEmployee.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser, fetchDesignations, viewUser } from '../../services/allApi';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Swal from 'sweetalert2';

function ViewEmployee() {

    const { id } = useParams()
    console.log(id);

    const navigate=useNavigate()

    const [userData, setUserData] = useState({
        name: "",
        designations: "",
        email: "",
        username: "",
    })

    const [designation,setDesignation]=useState('')

    const [designationArr, setDesignationArr] = useState([])
    // const [selectedDesignation, setSelectedDesignation] = useState('');

    //Api call to fetch designation
    const getDesignation = async () => {
        const response = await fetchDesignations()
        console.log(response.data);
        setDesignationArr(response.data)
    }
    console.log(designationArr);

    //To get value from selection tag
    const handledesignation = (event) => {
        setDesignation(event.target.value);
        console.log('Selected _id:', event.target.value);
    };

    //api call to view user
    const fetchUserDetails = async () => {
        const response = await viewUser(id)
        console.log(response);
        setUserData({
            name: response.data.name || "",
            // designations: response.data.designation.title || "",
            email: response.data.email.toLowerCase() || "",
            username: response.data.username || "",

        })
        setDesignation(response.data.designation._id || ""); 
    }
    console.log('selected',designation);
    
    console.log(userData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    //Api to edit user details
    const handleSubmit = async (e) => {
        e.preventDefault()
       try {
        const updatedUserData = {
            ...userData,
            designation: designation 
        };
        console.log(updatedUserData);
        const response = await editUser(id,updatedUserData)
        console.log(response);
        if(response.status===200){
            Swal.fire({
                title: 'Success!',
                text: 'Employee details edited sucessfully',
                icon: 'success', 
                confirmButtonText: 'OK',
              });
           setTimeout(()=>{
            navigate('/employees')
           },2000)
        }
        
       } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: 'Axios Error',
            icon: 'danger', 
            confirmButtonText: 'OK',
          });
       }
    }


    useEffect(() => {
        fetchUserDetails()
        getDesignation()
    }, [])

    return (
        <div className="container ">
            <h3 style={{ color: 'black' }} className='mainHeading mt-4 mx-4 '>Employee</h3>
            <p className='mainHeading mx-4' style={{ color: '#4F4F4F' }}>Manage / Employee / <span style={{ color: 'black', }}>Edit Employee</span></p>
            <div className="row employeeRow">
                <div className="col-12">
                    <MDBCard className='mx-5'>
                        <MDBCardBody>
                            <MDBCardTitle className='Headings' style={{ fontWeight: "bold", color: 'black' }}>Edit Employee</MDBCardTitle>
                            <form onSubmit={handleSubmit}>
                                <MDBCardText>
                                    <label className='formHeading my-2'>Employee Name</label>
                                    <MDBInput onChange={handleChange} value={userData.name} name='name' id="form1" type="text" />
                                    <label className='formHeading my-2'>Designation</label>
                                    {/* <MDBInput onChange={handleChange} value={userData.designation} name='designation' id="form1" type="text" /> */}
                                    <div>
                                        <FormControl sx={{ minWidth: 200 }} size="small">
                                            <InputLabel id="demo-select-small-label"></InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={designation}
                                                onChange={handledesignation}
                                                
                    

                                                sx={{ width: '630px' }}

                                            >
                                               
                                                {
                                                    designationArr.length > 0 ? designationArr.map((item) => (
                                                        <MenuItem key={item._id} value={item._id}>
                                                            {item.title}
                                                        </MenuItem>
                                                    )) : "no deignation found"
                                                }


                                            </Select>
                                        </FormControl>
                                    </div>
                                    <label className='formHeading my-2'>Email</label>
                                    <MDBInput onChange={handleChange} value={userData.email} id="form1" name='email' type="text" />

                                    <label className='formHeading my-2'>User Name</label>
                                    <MDBInput onChange={handleChange} value={userData.username} name='username' id="form1" type="text" />

                                    <div className='my-3 '>
                                        <MDBBtn type='submit' color='dark'>
                                            Submit
                                        </MDBBtn>
                                        <MDBBtn className='mx-3' style={{ color: 'white', backgroundColor: "#6C757D" }}>
                                            Reset
                                        </MDBBtn>
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

export default ViewEmployee