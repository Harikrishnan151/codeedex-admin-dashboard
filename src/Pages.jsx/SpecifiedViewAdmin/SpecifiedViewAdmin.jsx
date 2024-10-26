import React, { useEffect, useState } from 'react'
import './SpecifiedViewAdmin.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
import { viewAdmin } from '../../services/allApi';

function SpecifiedViewAdmin() {
  const {id}=useParams()
  console.log(id);

  const [admin,setAdmin]=useState([])

  const fetchAdminDetails=async()=>{
    const token=localStorage.getItem("token")
        const headers={
            Authorization: `Bearer ${token}`
        }
        const response=await viewAdmin(id,headers)
        console.log(response.data);
        setAdmin(response.data)
  }
  console.log(admin);
  
  
  useEffect(()=>{
    fetchAdminDetails()
  },[])

  return (
    <div className="container">
      <div className="row mx-2">
      <h3 style={{ color: 'black' }} className='main-Headings mx-4 mt-4 '>Admin</h3>
      <p className='main-Headings mx-4' style={{ color: '#4F4F4F' }}>Manage / Admin / <span style={{ color: 'black', }}>View Admin</span></p>
      </div>
      <div className="row  mx-2 adminRow">
      <h5 className='mainHeading my-3' style={{ fontWeight: "bold",color:'black' }}>View Admin</h5>

        <div className="col-12">
        <MDBTable responsive hover>
                        <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                            <tr>
                                
                                <th style={{ fontWeight: 'bold' }} scope='col'>Admin Name</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Address</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Email</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Username</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>AdminCode</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Admin ID</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>                         
                            <tr >  
                                {/* <th scope='row'></th> */}
                                <td>{admin.fullName}</td>
                                <td>{admin.address}</td>
                                <td>{admin.email}</td>
                                <td>{admin.username}</td>
                                <td>{admin.adminCode}</td>
                                <td>{admin._id}</td>                            
                            </tr> 
                        </MDBTableBody>
                    </MDBTable>

        </div>
      </div>
    </div>
  )
}

export default SpecifiedViewAdmin