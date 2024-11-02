import React, { useEffect, useState } from 'react'
import './Admin.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';
import { allAdmins, deleteAdmin } from '../../services/allApi';
import Swal from 'sweetalert2';

function Admin() {

    const [admin,setAdmin]=useState([])
    const navigate=useNavigate()



    //Api call to get all admin
    const getAllAdmin=async()=>{
        const token=localStorage.getItem("token")
        const headers={
            Authorization: `Bearer ${token}`
        }
        const response=await allAdmins(headers)
        // console.log(response.data);
        setAdmin(response.data)
        
    }
    // console.log(admin);

    //Api call to delete admn
    const handleDelete=async(id)=>{
       try {
        const token=localStorage.getItem("token")
        const headers={
            Authorization: `Bearer ${token}`
        }
        const response=await deleteAdmin(id,headers)
        // console.log(response);
        Swal.fire({
            title: 'Success!',
            text: 'Admin deleted sucessfully',
            icon: 'success', 
            confirmButtonText: 'OK',
          });
        getAllAdmin()
        
        
       } catch (error) {
        Swal.fire({
            title: 'Faild!',
            text: 'Faild to delete admin',
            icon: 'danger', 
            confirmButtonText: 'OK',
          });
        
       }
    }
    
        //search admin
        const [search,setSearch]=useState('')
        const data = Array.isArray(admin) ? admin.filter(item => item.fullName.toLowerCase().includes(search.toLowerCase())) : [];

    useEffect(()=>{
        getAllAdmin()
    },[])
    return (
        <div className="container">
            <div className='row headingrow'>
                <div className="col-6">
                    <h3 style={{color:'black'}} className='mainHeading mx-4 mt-4 '>Admin</h3>
                    <p className='mainHeading mx-4' style={{ color: '#4F4F4F' }}>Manage / <span style={{ color: 'black', }}>Admins</span></p>

                </div>
                <div className="col-6 addBtn">
                    <Link to={'/addAdmin'}>
                    <MDBBtn color='dark'>
                        Add admin
                    </MDBBtn></Link>
                </div>

            </div>

            <div className="row row1 mx-2 my-2">
                <div className="col-12 my-3 headingRow2">
                    <h5 className='mainHeading' style={{ fontWeight: "bold",color:'black' }}>Current Admins</h5>
                    <div>
                        <MDBInput onChange={(e)=>setSearch(e.target.value)} label="Search" type="text" />
                    </div>
                </div>
                <div className="col-12 my-2">
                    <MDBTable responsive hover>
                        <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                            <tr>
                                <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Admin Name</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Address</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Email</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Username</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>AdminCode</th>
                                {/* <th style={{ fontWeight: 'bold' }} scope='col'>Edit</th> */}
                                <th style={{ fontWeight: 'bold' }} scope='col'>Delete</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>

                           {
                           admin && admin.length>0?data.map((adminData,index)=>(
                            <tr key={index} onClick={() => navigate(`/admin/view/${adminData._id}`)} style={{ cursor: 'pointer' }} >  
                                <th scope='row'>{index+1}</th>
                                <td>{adminData.fullName}</td>
                                <td>{adminData.address}</td>
                                <td>{adminData.email}</td>
                                <td>{adminData.username}</td>
                                <td>{adminData.adminCode}</td>
                                {/* <td> <Link style={{ textDecoration: 'none', color: 'inherit',backgroundColor:"inherit" }} to={`/edit/admin/${adminData._id}`}> <button className='btns' onClick={(e) => e.stopPropagation()} ><BorderColorIcon /></button></Link></td> */}
                                <td>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(adminData._id);
                            }}
                            className='btns'
                            style={{ color: 'red' }}
                        >
                            <DeleteIcon />
                        </button>
                    </td>
                            
                            </tr> 
                            )):'No Admin data found'
                           }
                            

                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>
        </div>

    )
}

export default Admin