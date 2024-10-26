import React, { useEffect, useState } from 'react'
import './RejectedAttendenceReq.css'
import { viewRejectedReq } from '../../services/allApi'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function RejectedAttendenceReq() {

    const [data,setData]=useState([])
    const navigate=useNavigate()

    const fetchRejectedReq=async()=>{
        const token=localStorage.getItem("token")
        const headers={
            Authorization: `Bearer ${token}`
        }
        const response=await viewRejectedReq(headers)
        console.log(response.data);
        setData(response.data)
        
    }

    useEffect(()=>{
        fetchRejectedReq()
    },[])
  return (
    <div className="container">
        <div className="row">
                <h3 style={{ color: 'black' }} className='heading px-5 mt-4 '>Rejected Requests</h3>
                <p className='heading px-5' style={{ color: '#4F4F4F' }}>Attendence  / <span style={{ color: 'black', }}>Rejected Requests</span></p>
            </div>
            <div className="row attendencerow-1 mx-4 ">
                <di className=" col-12 ">
                    <h5 className='box-Heading my-3' style={{ fontWeight: "bold" }}>Rejected Requests</h5>
                    <MDBTable responsive hover>
                        <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                            <tr>
                                <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Request Id</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Reviewed Admin</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Date</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Status</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Reason</th>

                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                           {
                            data && data.length>0?data.map((attendenceData,index)=>(
                                <tr key={index}  onClick={() => navigate(`/attendence/Rejected/view/${attendenceData._id}`)} style={{ cursor: 'pointer' }}>
                                <th scope='row'>{index+1}</th>
                                <td>{attendenceData._id}</td>
                                <td>{attendenceData.adminAction.reviewedBy.username}</td>
                                <td>{attendenceData.date.slice(8,10)}{attendenceData.date.slice(4,8)}{attendenceData.date.slice(0,4)}</td>
                                <td>{attendenceData.status}</td>
                                <td>{attendenceData.adminAction.reason}</td>


                            </tr>
                            )):"No Rejected Attendence Request"
                           }
                            

                        </MDBTableBody>
                    </MDBTable>
                </di>
            </div>

    </div>
  )
}

export default RejectedAttendenceReq