import React, { useEffect, useState } from 'react'
import './AddEmployee.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { addUser, fetchDesignations } from '../../services/allApi';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {

    const [designationArr, setDesignationArr] = useState([])
    const [designation, setDesignation] = useState(''); 
    const [name,setName]=useState([]);
    const [password,setPassword]=useState([]);
    const [employeeCode,setEmployeeCode]=useState([]);
    const [email,setEmail]=useState([]);
    const [username,setUserName]=useState([]);
    const [workMode,SetWorkMode]=useState([])
    
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

      //Api call to add user details
      const addEmployeeDetails=async(e)=>{
        e.preventDefault()
        const body={name,password,employeeCode,designation,email,username,workMode}
        if(!name||!password||!employeeCode||!designation||!email||!username||!workMode){
            alert('All feilds required')
        }else{
            const token=localStorage.getItem("token")
        const headers={
            Authorization: `Bearer ${token}`
        }
            const response=await addUser(body,headers)
            console.log(response);
            if(response.status===201){
                
                    Swal.fire({
                        title: 'Success!',
                        text: 'Employee added sucessfully',
                        icon: 'success', 
                        confirmButtonText: 'OK',
                      });
                      setTimeout(()=>{
                        navigate('/employees')
                      })
            }
            
        }
      }

    useEffect(() => {
        getDesignation()
    }, [])

    return (
        <div className="container">
            <h3 style={{ color: 'black' }} className='mainHeading mx-4 mt-4 '>Employee</h3>
            <p className='mainHeading mx-4' style={{ color: '#4F4F4F' }}>Manage / Employee / <span style={{ color: 'black', }}>Add Employee</span></p>
            <div className="row employeeRow mx-4 my-3">
                <div className="col-12">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle className='boxHeading' style={{ fontWeight: "bold", color: 'black' }}>Add a Employee</MDBCardTitle>
                            <form onSubmit={addEmployeeDetails}>
                            <MDBCardText>
                                <label className='formHeading my-2'>Employee Name</label>
                                <MDBInput onChange={(e)=>setName(e.target.value)} id="form1" type="text" />
                                <label className='formHeading my-2'>Password</label>
                                <MDBInput onChange={(e)=>setPassword(e.target.value)} id="form1" type="text" />
                                <label className='formHeading my-2'>Employee Code</label>
                                <MDBInput onChange={(e)=>setEmployeeCode(e.target.value)} id="form1" type="text" />

                                <label className='formHeading my-2'>Designation</label>
                                <div>
                                    <FormControl sx={{ minWidth: 200 }} size="small">
                                        <InputLabel id="demo-select-small-label"></InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={designation}  
                                            onChange={handleChange}
                                            

                                            sx={{ width: '725px' }}

                                        >
                                            {
                                           designationArr && designationArr.length>0?designationArr.map((item) => (
                                                <MenuItem key={item._id} value={item._id}>
                                                    {item.title}
                                                </MenuItem>
                                            )):"no deignation found"
                                        }

                                        </Select>
                                    </FormControl>
                                </div>
                                <label className='formHeading my-2'>Username</label>
                                <MDBInput onChange={(e)=>setUserName(e.target.value)} id="form1" type="text" />
                                <label className='formHeading my-2'>email</label>
                                <MDBInput onChange={(e)=>setEmail(e.target.value)} id="form1" type="email" />
                                <label className='formHeading my-2'>WorkMode</label>
                                <MDBInput onChange={(e)=>SetWorkMode(e.target.value)} id="form1" type="text" />
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

export default AddEmployee