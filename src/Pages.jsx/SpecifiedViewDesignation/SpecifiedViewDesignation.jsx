import React, { useEffect, useState } from 'react'
import './SpecifiedViewDesignation.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
import { viewDesignation } from '../../services/allApi';


function SpecifiedViewDesignation() {

    const {id}=useParams()
    console.log(id);
    const [designation,setDesignation]=useState([])

    //Api call to fetch designation
    const fetchDesignation=async()=>{
        const token = localStorage.getItem("token")
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response = await viewDesignation(id,headers);
        console.log(response.data);
        setDesignation(response.data)
    }
    console.log('designation',designation);
    

    useEffect(()=>{
        fetchDesignation()
    },[])
  return (
    <div className="container">
      <div className="row mx-2">
      <h3 style={{ color: 'black' }} className='main-Headings mx-4 mt-4 '>Designation</h3>
      <p className='main-Headings mx-4' style={{ color: '#4F4F4F' }}>Manage / Designation / <span style={{ color: 'black', }}>View Designation</span></p>
      </div>
      <div className="row  mx-2 adminRow">
      <h5 className='mainHeading my-3' style={{ fontWeight: "bold",color:'black' }}>View Designation</h5>

        <div className="col-12">
        <MDBTable responsive hover>
                        <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                            <tr>
                                
                                <th style={{ fontWeight: 'bold' }} scope='col'>Title</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Description</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Designation ID</th>
                            
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>                         
                        {designation.length > 0 ? (
    <tr>
        <td>{designation[0].title}</td>
        <td>{designation[0].description}</td>
        <td>{designation[0]._id}</td>
    </tr>
) : (
    <tr>
        <td colSpan="3">No designation data available</td>
    </tr>
)} 
                        </MDBTableBody>
                    </MDBTable>

        </div>
      </div>
    </div>
  )
}

export default SpecifiedViewDesignation