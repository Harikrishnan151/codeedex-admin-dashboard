import React, { useEffect, useState } from 'react'
import './LeaveReq.css'
import { Link } from 'react-router-dom'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { allLeaveReq, pendingLeaveReq } from '../../services/allApi';

function LeaveReq() {

    //Api call to fetch pending leave request
    const [pendingReq,setPendingReq]=useState([])
    const fetchPendingLeaveReq=async()=>{
        const token = localStorage.getItem("token")
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response=await pendingLeaveReq(headers) 
        console.log(response.data)
        setPendingReq(response.data.leaves);
        
    }
    console.log('pendingLeaveReq',pendingReq);

    //Api call to fetch all leave request
    const [allRequest,setAllRequest]=useState([])

    const fetchAllLeaveReq=async()=>{
        const token = localStorage.getItem("token")
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response=await allLeaveReq(headers)
        console.log(response.data);
        
        setAllRequest(response.data.leaves)
    }
    console.log('allLeaveReq',allRequest);
    
    


    useEffect(()=>{
        fetchPendingLeaveReq()
        fetchAllLeaveReq()
    },[])
    return (       
         <div className="container">
            <div className="row">
                <div className="col-6">
                    <h3 style={{ color: 'black' }} className='mainHeading mx-4 mt-4 '>Leave Request</h3>
                    <p className='mainHeading mx-4' style={{ color: '#4F4F4F' }}>
                        Analyse / Leave / <span style={{ color: 'black', }}>Leave Request</span>
                    </p>
                </div>
                <div className="col-6 req-btn">
                    <Link to={'/attendence/requests'}>
                    <p className='heading  mt-5 pt-3 '><Link to={'/leave/approved/requets'} style={{ color: "black" }}>Approved Request</Link>   | <Link to={'/leave/rejected/requets'} style={{ color: "black" }}>Rejected Request</Link></p>
                    </Link>
                </div>
            </div>
            <div className="row attendencerow-1 my-2 mx-4 ">
                <div className="col-12">
                <h5 className='box-Heading my-3' style={{ fontWeight: "bold" }}>Leave Request Pending</h5>
                <MDBTable responsive>
                        <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                            <tr>
                                <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Employee Name</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Employee Code</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Leave Type</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>From Date</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>To date</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Reason</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Status</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>View</th>

                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                                   {
                                    pendingReq && pendingReq.length>0?pendingReq.map((request,index)=>(
                                        <tr key={index} >
                                        <th scope='row'>{index+1}</th>
                                        <td>{request.userId.username}</td>
                                        <td>{request.userId.employeeCode}</td>
                                        <td>{request.leaveType}</td>
                                        <td>{request.fromDate.slice(8,10)}{request.fromDate.slice(4,8)}{request.fromDate.slice(0,4)}</td>
                                        <td>{request.toDate.slice(8,10)}{request.toDate.slice(4,8)}{request.toDate.slice(0,4)}</td>
                                        <td>{request.reason}</td>
                                        <td>{request.status}</td>
                                      
                                      <td><Link to={`/leaveRequest/${request._id}`}>View </Link></td>
                                       


                                    </tr>
                                    )):<td>No Pending Requests</td>
                                   }
                             

                        </MDBTableBody>
                        </MDBTable>
                </div>
            </div>

            <div className="row attendencerow-1 mt-3 mx-4 ">
                <div className="col-12">
                <h5 className='box-Heading my-3' style={{ fontWeight: "bold" }}>All Leave Request</h5>
                <MDBTable responsive>
                        <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                            <tr>
                                <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Employee Name</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Employee Code</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Leave Type</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>From Date</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>To date</th>
                                {/* <th style={{ fontWeight: 'bold' }} scope='col'>Reason</th> */}
                                <th style={{ fontWeight: 'bold' }} scope='col'>Status</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                                 {
                                    allRequest && allRequest.length>0?allRequest.map((data,index)=>(
                                        <tr key={index} >
                                        <th scope='row'>{index+1}</th>
                                        <td>{data.userId.username}</td>
                                        <td>{data.userId.employeeCode}</td>
                                        <td>{data.leaveType}</td>
                                        <td>{data.fromDate.slice(8,10)}{data.fromDate.slice(4,8)}{data.fromDate.slice(0,4)}</td>
                                        <td>{data.toDate.slice(8,10)}{data.toDate.slice(4,8)}{data.toDate.slice(0,4)}</td>
                                        {/* <td>{data.reason}</td> */}
                                        <td>{data.status}</td>


                                    </tr>
                                    )): <td>Leave Requests Not Found</td>
                                 }
                             

                        </MDBTableBody>
                        </MDBTable>
                </div>
            </div>
        
        </div>
      
    )
}

export default LeaveReq