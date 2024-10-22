import React, { useEffect, useState } from 'react'
import './ApprovedLeaveReq.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { approvedRequestList } from '../../services/allApi';

function ApprovedLeaveReq() {

    const [approvedReq,setApprovedReq]=useState([])

    //Api call to fetch approved request
    const fetchApprovedLeaveReq=async()=>{
        const token=localStorage.getItem("token")
        const headers={
            Authorization: `Bearer ${token}`
        }
        const response=await approvedRequestList(headers)
        console.log(response.data);
        setApprovedReq(response.data.leaves)
        
    }
    console.log(approvedReq)

    useEffect(()=>{
        fetchApprovedLeaveReq()
    },[])
  return (
    <div className="container">
    <div className="row">
            <h3 style={{ color: 'black' }} className='heading px-5 mt-4 '>Approved Requests</h3>
            <p className='heading px-5' style={{ color: '#4F4F4F' }}>Leave  / <span style={{ color: 'black', }}>Approved Requests</span></p>
        </div>
        <div className="row rejectedRow mx-4 ">
            <di className=" col-12 ">
                <h5 className='box-Heading my-3' style={{ fontWeight: "bold" }}>Approved Requests</h5>
                <MDBTable responsive>
                    <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                    <tr>
                            <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                            <th style={{ fontWeight: 'bold' }} scope='col'>Employee Name</th>
                            <th style={{ fontWeight: 'bold' }} scope='col'>Employee Code</th>
                            <th style={{ fontWeight: 'bold' }} scope='col'>Date</th>
                            <th style={{ fontWeight: 'bold' }} scope='col'>Leave Type</th>
                            <th style={{ fontWeight: 'bold' }} scope='col'>Status</th>

                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                       
                    {
                        approvedReq && approvedReq.length>0?approvedReq.map((data,index)=>(
                            <tr key={index} >
                            <th scope='row'>{index+1}</th>
                            <td>{data.userId.username}</td>
                            <td>{data.userId.employeeCode}</td>
                            <td>{data.fromDate.slice(8,10)}{data.fromDate.slice(4,8)}{data.fromDate.slice(0,4)}</td>
                            <td>{data.leaveType}</td>
                            <td>{data.status}</td>
                        


                        </tr>
                        )):<td>No Approved Requests Found</td>
                       }
                        
                        

                    </MDBTableBody>
                </MDBTable>
            </di>
        </div>

</div>
  )
}

export default ApprovedLeaveReq