import React, { useEffect, useState } from 'react'
import './ViewLeaveReq.css'
import { useNavigate, useParams } from 'react-router-dom'
import { approveLeaveReq, rejectLeaveRequest, viewLeaveReq } from '../../services/allApi';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';


function ViewLeaveReq() {

    const { id } = useParams()
    console.log(id);

    const [leaveData, setLeaveData] = useState([])

    const navigate=useNavigate()

    //Api call to fetch leave request
    const fetchLeaveRequest = async () => {
        const token = localStorage.getItem("token")
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response = await viewLeaveReq(id, headers)
        console.log(response.data.leave);
        setLeaveData(response.data.leave)
    }
    console.log(leaveData);

    //Api call to approve leave request
    const [adminReason,setAdminReason]=useState('')
    const handleApprove=async(e)=>{
        e.preventDefault()
        
        try {
            const body={adminReason}
            if(!adminReason){
                alert('Admin Reason Required')
            }else{
                const token = localStorage.getItem("token")
                const headers = {
                    Authorization: `Bearer ${token}`
                }
                const response=await approveLeaveReq(id,body,headers)
                console.log(response);
                if(response.status===200){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Leave Request Approved',
                        icon: 'success', 
                        confirmButtonText: 'OK',
                      });
                      navigate('/leaveRequest')
                }
            }
            
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Internal Server Error',
                icon: 'danger', 
                confirmButtonText: 'OK',
              });
        }

    }

    //api call to reject leave request
    const handleReject=async(e)=>{
        e.preventDefault();
        try {
            const body={adminReason}
            if(!adminReason){
                alert('Admin Reason Required')
            }else{
                const token = localStorage.getItem("token")
                const headers = {
                    Authorization: `Bearer ${token}`
                }
                const response=await rejectLeaveRequest(id,body,headers)
                console.log(response);
                if(response.status===200){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Leave Request Rejected',
                        icon: 'success', 
                        confirmButtonText: 'OK',
                      });
                      navigate('/leaveRequest')
                }
            }
            
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Internal Server Error',
                icon: 'danger', 
                confirmButtonText: 'OK',
              });
            
        }
    }


    useEffect(() => {
        fetchLeaveRequest()
    }, [])

    return (

        <div className="container">
            <div className="row mx-3">
                <h3 style={{ color: 'black' }} className='mainHeading  mt-4 '>Leave Request</h3>
                <p className='mainHeading ' style={{ color: '#4F4F4F' }}>Track / Leave / <span style={{ color: 'black', }}>Leave Request</span></p>
            </div>
            <div className="row mx-3 mb-4 leaveReqRow">
                <dic className="col-12">
                <MDBCard>
    <MDBCardBody>
        <MDBCardTitle className='boxHeading' style={{ fontWeight: "bold", color: 'black' }}>Leave Request</MDBCardTitle>
        <MDBListGroup flush>
            <MDBListGroupItem><strong>Employee Name : </strong>{leaveData?.userId?.username || 'N/A'}</MDBListGroupItem>
            <MDBListGroupItem><strong>Employee Code : </strong>{leaveData?.userId?.employeeCode || 'N/A'}</MDBListGroupItem>
            <MDBListGroupItem><strong>Leave Type : </strong>{leaveData?.leaveType || 'N/A'}</MDBListGroupItem>
            <MDBListGroupItem><strong>From Date : </strong>{leaveData?.fromDate ? new Date(leaveData.fromDate).toLocaleDateString() : 'N/A'}</MDBListGroupItem>
            <MDBListGroupItem><strong>To Date : </strong>{leaveData?.toDate ? new Date(leaveData.toDate).toLocaleDateString() : 'N/A'}</MDBListGroupItem>
            <MDBListGroupItem><strong>Duration : </strong>{leaveData?.duration || 'N/A'}</MDBListGroupItem>
            <MDBListGroupItem><strong>Session : </strong>{leaveData?.session || 'N/A'}</MDBListGroupItem>
            <MDBListGroupItem><strong>Status : </strong>{leaveData?.status || 'N/A'}</MDBListGroupItem>

            <MDBCardTitle style={{ fontWeight: "bold", color: 'black' }} className='my-1'>Work HandOver</MDBCardTitle>
            <MDBListGroupItem><strong>Employee Name : </strong>{leaveData?.handoverEmployee?.employeeName || 'N/A'}</MDBListGroupItem>
            <MDBListGroupItem><strong>Employee Code : </strong>{leaveData?.handoverEmployee?.employeeCode || 'N/A'}</MDBListGroupItem>
            <MDBListGroupItem><strong>Number : </strong>{leaveData?.handoverEmployee?.phoneNumber || 'N/A'}</MDBListGroupItem>

            <form>
                <label className='formHeading my-2'>Reason</label>
                <MDBInput onChange={(e)=>setAdminReason(e.target.value)} id="form1" type="text" required />
                <div className='my-3 leaveBtns'>
                    <MDBBtn onClick={handleReject} type='button'  className='mx-3' style={{ color: 'white', backgroundColor: "#6C757D" }}>
                        Reject
                    </MDBBtn>
                    <MDBBtn onClick={handleApprove} type='button'  color='dark'>
                        Approve
                    </MDBBtn>
                </div>
            </form>
        </MDBListGroup>
    </MDBCardBody>
</MDBCard>

                </dic>
            </div>
        </div>
    )
}

export default ViewLeaveReq