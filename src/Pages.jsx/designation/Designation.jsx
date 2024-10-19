import React, { useEffect, useState } from 'react'
import './Designation.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteDesignation, fetchDesignations } from '../../services/allApi';
import Swal from 'sweetalert2';

function Designation() {

    const [designation,setDesignation]=useState([])
    const [search,setSearch]=useState('')

    //Api call to fetch designation
    const getDesignation=async()=>{
      const token = localStorage.getItem("token")
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response=await fetchDesignations(headers)
        console.log(response.data);
        setDesignation(response.data)
    }
    console.log(designation);

    //Api call to delete designation
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
            const token = localStorage.getItem("token")
        const headers = {
            Authorization: `Bearer ${token}`
        }
            const response = await deleteDesignation(id,headers);
            console.log(response);
            if (response.status === 200) {
              Swal.fire({
                title: "Deleted!",
                text: "The designation has been deleted.",
                icon: "success"
              });
              getDesignation();
            }
          } catch (error) {
            // Handle errors and show error message using SweetAlert2
            Swal.fire({
              title: "Error!",
              text: "There was an error deleting the designation.",
              icon: "error"
            });
          }
        }
      });
    };

    //search product 
    // const data=designation.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()))
    const data = Array.isArray(designation) ? designation.filter(item => item.title.toLowerCase().includes(search.toLowerCase())) : [];
    

    useEffect(()=>{
        getDesignation()
    },[])
    return (
        <div className="container">
            <div className="row mainHeading">
                <div className="col-6">
                   <div>
                   <h3 style={{ color: 'black' }} className='mainHeading  mt-4 '>Designation</h3>
                   <p className='mainHeading ' style={{ color: '#4F4F4F' }}>Manage / <span style={{ color: 'black', }}>Designations</span></p>
                   </div>
                </div>
                <div className="col-6 add-btn mt-5">
                    <Link to={'/addDesignation'}>
                        <MDBBtn color='dark'>
                            Add Designation
                        </MDBBtn></Link>
                </div>
            </div>
            <div className="row row-1 mx-4 my-2">
                <div className="col-12 my-3 headingRow2">
                    <h5 className='mainHeading' style={{ fontWeight: "bold", color: 'black' }}>Current Designations</h5>
                    <div>
                        <MDBInput onChange={e=>setSearch(e.target.value)} label="Search" id="form1" type="text" />
                    </div>
                </div>
                <div className="col-12 my-2">
                <MDBTable responsive>
                        <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                            <tr>
                                <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Title</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Description</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Edit</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Delete</th>
                            
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                           {
                          designation && designation.length>0?data.map((designationItems,index)=>(
                                <tr key={index}>
                                <th scope='row'>{index+1}</th>
                                <td>{designationItems.title}</td>
                                <td>{designationItems.description}</td>
                             <td><button className='btns ' > <Link style={{ textDecoration: 'none', color: 'inherit',backgroundColor:"inherit" }} to={`/designation/${designationItems._id}`}> <BorderColorIcon /></Link> </button></td>
                                <td><button onClick={()=>handleDelete(designationItems._id)} className='btns' style={{ color: 'red' }}> < DeleteIcon /></button></td>
                            </tr>
                           )):"No DESIGNATION"
                           
                        }
                            
                            
                            
                            


                 
                            

                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>
        </div>
    )
}

export default Designation