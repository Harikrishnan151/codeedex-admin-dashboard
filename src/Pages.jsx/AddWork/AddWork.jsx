import React, { useEffect, useState } from 'react'
import './AddWork.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { addUser, addWork, allUsers, fetchDesignations } from '../../services/allApi';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


function AddWork() {

    const admin = localStorage.getItem("adminId")
    console.log(admin);
    const adminName=localStorage.getItem("adminName")
    console.log(adminName);
    
    const [employeeArr, setEmployeeArr] = useState([]);
    const [assignedTo, setAssignedTo] = useState([])
    const [designationArr, setDesignationArr] = useState([])
    const [designation, setDesignation] = useState('');

    const [workName, setWorkName] = useState([])
    const [deadline, setDeadline] = useState([])
     
    //navigate
    const navigate=useNavigate()

    //Api call to fetch designation
    const getDesignation = async () => {
        const token=localStorage.getItem("token")
        const headers={
            Authorization: `Bearer ${token}`
        }
        const response = await fetchDesignations(headers)
        console.log(response.data);
        setDesignationArr(response.data)
    }
    console.log(designationArr);

    //To get value from selection tag
    const handleChange = (event) => {
        setDesignation(event.target.value);
        console.log('Selected _id:', event.target.value);
    };

    //Api call to fetch employee
    const fetchEmployees = async () => {
        const token=localStorage.getItem("token")
        const headers={
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
    

    //Api call to add works
    const addWorks=async(e)=>{
        e.preventDefault()
       const body={workName,designation,assignedTo,deadline,admin}
       console.log(body);
       
       const token=localStorage.getItem("token")
       const headers={
           Authorization: `Bearer ${token}`
       }
       if(!workName||!designation||!assignedTo||!deadline||!admin){
        alert('All feilds required')
       }else{
         const response=await addWork(body,headers)
         console.log(response);
         if(response.status===201){
            Swal.fire({
                title: 'Success!',
                text: 'Work added sucessfully',
                icon: 'success', 
                confirmButtonText: 'OK',
              });
              setTimeout(()=>{
               navigate('/works')
              },2000)
        }
         
       }
    }


    useEffect(() => {
        getDesignation()
        fetchEmployees()
    }, [])
    return (
        <div className="container">
            <h3 style={{ color: 'black' }} className='mainHeading mx-4 mt-4 '>Work</h3>
            <p className='mainHeading mx-4' style={{ color: '#4F4F4F' }}>Manage / Work / <span style={{ color: 'black', }}>Add Work</span></p>
            <div className="row WorkRow mx-4">
                <div className="col-12">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle className='mainHeading' style={{ fontWeight: "bold", color: 'black' }}>Add a Work</MDBCardTitle>
                            <form onSubmit={addWorks}>
                                <MDBCardText>
                                    <label className='formHeading my-2'>Work Name</label>
                                    <MDBInput onChange={(e)=>setWorkName(e.target.value)} id="form1" type="text" required />
                                    <label className='formHeading my-2'>Designation</label>
                                    <div>
                                        <FormControl sx={{ minWidth: 200 }} size="small">
                                            <InputLabel id="demo-select-small-label"></InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={designation}
                                                onChange={handleChange}
                                                required

                                                sx={{ width: '625px' }}

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
                                    <label className='formHeading my-2'>Assigned To</label>
                                    <div>
                                        <FormControl sx={{ minWidth: 200 }} size="small">
                                            <InputLabel id="demo-select-small-label"></InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                multiple 
                                                value={assignedTo}
                                                onChange={handleEmployees}
                                                required

                                                sx={{ width: '625px' }}

                                            >

                                                {employeeArr && employeeArr.length > 0 ? employeeArr.map(item => (
                                                    <MenuItem key={item._id} value={item._id}>
                                                        {item.name}
                                                    </MenuItem>
                                                )) : "No designation found"}

                                            </Select>
                                        </FormControl>
                                    </div>
                                    <label className='formHeading my-2'>Deadline</label>
                                    <MDBInput onChange={(e)=>setDeadline(e.target.value)} id="form1" type="date" required/>
                                    <label className='formHeading my-2'>Admin</label>
                                    <MDBInput value={adminName} id="form1" type="text" />
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

export default AddWork