import React, { useEffect, useState } from 'react'
import './SpecifiedViewEmployee.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { fetchDesignations, viewUser } from '../../services/allApi';
import { useParams } from 'react-router-dom';

function SpecifiedViewEmployee() {

    const {id}=useParams()
    console.log(id);
    const [employee,setEmployee]=useState([])

    const fetchEmployee=async()=>{
        const token = localStorage.getItem("token")
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response=await viewUser(id,headers)
        console.log(response.data);
        setEmployee(response.data)
    }

    useEffect(()=>{
        fetchEmployee()
    },[])
  return (
    <div className="container">
    <div className="row mx-2">
    <h3 style={{ color: 'black' }} className='main-Headings mx-4 mt-4 '>Employee</h3>
    <p className='main-Headings mx-4' style={{ color: '#4F4F4F' }}>Manage / Employee / <span style={{ color: 'black', }}>View Employee</span></p>
    </div>
    <div className="row  mx-2 adminRow">
    <h5 className='mainHeading my-3' style={{ fontWeight: "bold",color:'black' }}>View Employee</h5>

      <div className="col-12">
      <MDBTable responsive hover>
                      <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                          <tr>
                              
                              <th style={{ fontWeight: 'bold' }} scope='col'>Admin Name</th>
                              <th style={{ fontWeight: 'bold' }} scope='col'>Designation</th>
                              <th style={{ fontWeight: 'bold' }} scope='col'>Email</th>
                              <th style={{ fontWeight: 'bold' }} scope='col'>Username</th>
                         
                          </tr>
                      </MDBTableHead>
                      <MDBTableBody>                         
                          <tr >  
                              {/* <th scope='row'></th> */}
                              <td>{employee.name}</td>
                              <td>{employee?.designation?.title || 'No title'}</td>
                              <td>{employee.email}</td>
                              <td>{employee.username}</td>
                                                        
                          </tr> 
                      </MDBTableBody>
                  </MDBTable>

      </div>
    </div>
  </div>
  )
}

export default SpecifiedViewEmployee