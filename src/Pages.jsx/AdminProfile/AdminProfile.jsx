import React, { useEffect, useState } from 'react'
import './AdminProfile.css'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { viewAdmin } from '../../services/allApi';

function AdminProfile() {

    const id = localStorage.getItem('adminId')
    console.log(id);

    const [adminData, setAdminData] = useState([])

    const getAdmin = async () => {
        const token = localStorage.getItem("token")
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response = await viewAdmin(id, headers)
        console.log(response);
        setAdminData(response.data)

    }

    useEffect(() => {
        getAdmin()
    }, [])

    return (
        <div className="container">
            <div className="row  mx-1">

                <div className="col-6 my-2">
                    <h3 style={{ color: "black" }} className='mainHeading  mt-2 '>Admin</h3>
                    <p className='mainHeading ' style={{ color: '#4F4F4F' }}>Admin / <span style={{ color: 'black', }}>Admin Profile</span></p>
                </div>
                <div className=" col-6 my-2">
                    
                    <div className='profile mt-4'>
                    <h4><AccountCircleIcon/> <strong>{adminData ? adminData.fullName : ""}</strong></h4>
                    </div>
                </div>

            </div>


            <div className="row row1 mx-4">
                <div className="col-12 my-3">
                    <div className="row">
                    <div className="col-6">
                    <h5 className='box-Heading' style={{ fontWeight: "bold" }}>Admin Details</h5>

                    </div>
                    <div className="col-6">
                    <div className='edit-Button my-3'>
                        <Link to={`/edit/admin/${adminData._id}`}>
                            <MDBBtn size='sm' outline color='dark'>Edit Details</MDBBtn>
                        </Link>

                    </div>
                    </div>
                    </div>
                    
                    <div className="col-12 my-1">
                        <MDBListGroup style={{ minWidth: '22rem' }} light>
                            <MDBListGroupItem   aria-current='true' className='px-3'>
                                <strong>Admin Name : </strong>{adminData ? adminData.fullName : ""}
                            </MDBListGroupItem>
                            <MDBListGroupItem  className='px-3'>
                                <strong>Admin Code : </strong>{adminData ? adminData.adminCode : ""}
                            </MDBListGroupItem>
                            <MDBListGroupItem  className='px-3'>
                                <strong>Username : </strong>{adminData ? adminData.username : ""}
                            </MDBListGroupItem>
                            <MDBListGroupItem  className='px-3'>
                                <strong>Emial : </strong>{adminData ? adminData.email : ""}
                            </MDBListGroupItem>
                            <MDBListGroupItem  className='px-3'>
                                <strong>Address : </strong>{adminData ? adminData.address : ""}
                            </MDBListGroupItem>
                            <MDBListGroupItem  className='px-3'>
                                <strong>ID : </strong>{adminData ? adminData._id : ""}
                            </MDBListGroupItem>

                        </MDBListGroup>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default AdminProfile