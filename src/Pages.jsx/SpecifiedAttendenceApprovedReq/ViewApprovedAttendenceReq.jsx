import React, { useEffect, useState } from 'react'
import './ViewApprovedAttendenceReq.css'
import { MDBCard,MDBListGroupItem,MDBListGroup } from 'mdb-react-ui-kit';
import { viweSpecifiedAttendenceRequest } from '../../services/allApi';
import { useParams } from 'react-router-dom';

function ViewApprovedAttendenceReq() {

    const {id}=useParams()
    console.log(id);
    
    const [requestData,setRequestData]=useState([])

    //api call to view approved request
    const fetchApprovedRequest=async()=>{
        const token = localStorage.getItem("token")
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const respons=await viweSpecifiedAttendenceRequest(id,headers)
        console.log(respons.data);
        setRequestData(respons.data.request)
    }
    useEffect(()=>{
        fetchApprovedRequest()
    },[])
  return (
    <div className="container">
    <div className="row mx-2">
    <h3 style={{ color: 'black' }} className='main-Headings mx-4 mt-4 '>Approved Request</h3>
    <p className='main-Headings mx-4' style={{ color: '#4F4F4F' }}>Manage / Attendence / <span style={{ color: 'black', }}>View Approved Request</span></p>
    </div>
    <div className="row  mx-2 adminRow">
    <h5 className='mainHeading my-3' style={{ fontWeight: "bold",color:'black' }}>View Approved Request</h5>

      <div className="col-12">
      <MDBCard>
  <MDBListGroup flush>
    <MDBListGroupItem><strong>Request ID : </strong>{requestData._id}</MDBListGroupItem>
    <MDBListGroupItem><strong>Date : </strong>{requestData.date}</MDBListGroupItem>
    <MDBListGroupItem><strong>Punch In : </strong>{requestData.punchIn}</MDBListGroupItem>
    <MDBListGroupItem><strong>Punch Out : </strong>{requestData.punchOut}</MDBListGroupItem>
    <MDBListGroupItem><strong>Total Work Time : </strong>{requestData.totalWorkTime}</MDBListGroupItem>
    <MDBListGroupItem><strong>Total Break Time  : </strong>{requestData.totalBreakTime}</MDBListGroupItem>
    <MDBListGroupItem><strong>Status : </strong>{requestData.status}</MDBListGroupItem>
    <MDBListGroupItem><strong>Approved By : </strong>{requestData.adminAction?.reviewedBy?.username || 'N/A'}</MDBListGroupItem>
    <MDBListGroupItem><strong>Reviewed At : </strong>{requestData.adminAction?.reviewedAt || 'N/A'}</MDBListGroupItem>
    <MDBListGroupItem><strong>Reason : </strong>{requestData.adminAction?.reason || 'N/A'}</MDBListGroupItem>
  </MDBListGroup>
</MDBCard>
      </div>
    </div>
  </div>
  )
}

export default ViewApprovedAttendenceReq