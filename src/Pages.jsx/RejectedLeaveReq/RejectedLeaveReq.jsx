import React, { useEffect, useState } from 'react'
import './RejectedLeaveReq.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { rejectedRequestList } from '../../services/allApi';

function RejectedLeaveReq() {

    const [rejectedReq,setRejectedReq]=useState([])

    //Api call to fetch rejected request list
    const fetchRejectedReqList=async()=>{
        const token=localStorage.getItem("token")
        const headers={
            Authorization: `Bearer ${token}`
        }
        const response=await rejectedRequestList(headers)
        console.log(response.data);
        setRejectedReq(response.data.leaves)
        
    }

    useEffect(()=>{
        fetchRejectedReqList()
    },[])
  return (
    <div className="container">
    <div className="row">
            <h3 style={{ color: 'black' }} className='heading px-5 mt-4 '>Rejected Requests</h3>
            <p className='heading px-5' style={{ color: '#4F4F4F' }}>Leave  / <span style={{ color: 'black', }}>Rejected Requests</span></p>
        </div>
        <div className="row rejectedRow mx-4 ">
            <di className=" col-12 ">
                <h5 className='box-Heading my-3' style={{ fontWeight: "bold" }}>Rejected Requests</h5>
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
                        rejectedReq && rejectedReq.length>0?rejectedReq.map((data,index)=>(
                            <tr key={index} >
                            <th scope='row'>{index+1}</th>
                            <td>{data.userId.username}</td>
                            <td>{data.userId.employeeCode}</td>
                            <td>{data.fromDate.slice(8,10)}{data.fromDate.slice(4,8)}{data.fromDate.slice(0,4)}</td>
                            <td>{data.leaveType}</td>
                            <td>{data.status}</td>
                        


                        </tr>
                        )):<td>No Rejected Requests Found</td>
                       }
                        
                        

                    </MDBTableBody>
                </MDBTable>
            </di>
        </div>

</div>
  )
}

export default RejectedLeaveReq