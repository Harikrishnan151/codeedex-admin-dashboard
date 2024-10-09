import React, { useEffect, useState } from 'react'
import './Employees.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { allUsers, deleteUser } from '../../services/allApi';
import Swal from 'sweetalert2';

function Employess() {

    const [users,setUsers]=useState([])
    const [search,setSearch]=useState('')

    //api call to fetch users
    const fetchUsers=async()=>{
        const response=await allUsers()
        console.log(response.data);
        setUsers(response.data)
        
    }
    console.log(users);

    //search
    const data=users.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))

    //Api to delete user details
    const handleDelete = async (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              // Api call to delete
              const response = await deleteUser(id);
              console.log(response);
              if (response.status === 200) {
                Swal.fire({
                  title: "Deleted!",
                  text: "The user has been deleted.",
                  icon: "success"
                });
                fetchUsers()
              }
            } catch (error) {
              Swal.fire({
                title: "Error!",
                text: "There was an error deleting the user.",
                icon: "error"
              });
            }
          }
        });
      };
    

    useEffect(()=>{
        fetchUsers()
    },[])

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
                    <h5 className='box-head' style={{ fontWeight: "bold",color:"black" }}>Current Employee</h5>
                    <div>
                        <MDBInput onChange={(e)=>setSearch(e.target.value)} label="Search" id="form1" type="text" />
                    </div>
                </div>
                <div className="col-12 my-2">
                    <MDBTable responsive>
                        <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                            <tr>
                                <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Name</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Designation</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>ID</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Email</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Username</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>WorkMode</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>edit</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Delete</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                           {
                            users.length>0?data.map((employee,index)=>(
                                <tr key={index}>
                                <th scope='row'>{index+1}</th>
                                <td>{employee.name}</td>
                                <td>{employee.designation ? employee.designation.title : 'N/A'}</td>
                                <td>{employee.employeeCode}</td>
                                <td>{employee.email.toLowerCase()}</td>
                                <td>{employee.username}</td>
                                <td>{employee.workMode}</td>
                                <td>
                                   <Link to={`/employee/edit/${employee._id}`}> <button className='btns' ><BorderColorIcon /></button></Link>
                                    
                                </td>
                               < td><button onClick={()=>handleDelete(employee._id)} className='btns' style={{ color: 'red' }}> < DeleteIcon /></button></td>

                            </tr>
                            )):<tr><td colSpan="8">No Users Found</td></tr>
                           }
                           
                        

                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>

        </div>
    )
}

export default Employess