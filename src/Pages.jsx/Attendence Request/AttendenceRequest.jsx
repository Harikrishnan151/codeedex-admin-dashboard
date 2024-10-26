import React, { useEffect, useState } from 'react'
import './AttendenceRequest.css'
import { attendenceList, editAttendenceReq, viewAttendenceReq } from '../../services/allApi'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';


function AttendenceRequest() {

    const [scrollableModal, setScrollableModal] = useState(false);
    const [loading, setLoading] = useState(false);

    //navigate
    const navigate = useNavigate()

    const [attendenceData, setAttendenceData] = useState([])
    const [requestData, setRequestData] = useState({
        adminAction: {
            reviewedBy: null,
            reviewedAt: null,
            reason: "",
        },
        requestId: "",  // If you have a request ID, you can keep this field
        userId: "",     // Now a string instead of an object
        date: "",
        punchIn: "",
        punchOut: "",
        totalWorkTime: 0,
        totalBreakTime: 0,
        breakTime: [],   // Array of break times remains the same
        status: "",
        createdAt: "",
        updatedAt: "",
    });

    //Api call to fetch attendence list
    const fetchAttendenceList = async () => {
        const token = localStorage.getItem("token")
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response = await attendenceList(headers)
        console.log(response.data);
        setAttendenceData(response.data)
    }
    console.log(attendenceData);

    //Api call to view attendence  request from list
    const handleAttendenceReq = async (EmplyCode, date) => {
        setLoading(true);  // Set loading to true before API call
        const body = { EmplyCode, date };
        console.log(body);

        try {
            const token = localStorage.getItem("token")
            const headers = {
                Authorization: `Bearer ${token}`
            }
            const response = await viewAttendenceReq(body, headers);
            console.log(response.data);
            setRequestData({
                requestId: response.data._id || "",
                userId: response.data.userId || "",
                date: response.data.date || "",
                punchIn: response.data.punchIn || "",
                punchOut: response.data.punchOut || "",
                totalWorkTime: response.data.totalWorkTime || 0,
                totalBreakTime: response.data.totalBreakTime || 0,
                breakTime: response.data.breakTime || [],
                status: response.data.status || "",
                createdAt: response.data.createdAt || "",
                updatedAt: response.data.updatedAt || "",
                // adminAction: {
                //   reviewedBy: null,
                //   reviewedAt: null,
                //   reason: "",
                // }
            });
            setScrollableModal(true);  // Open modal after data is fetched
        } catch (error) {
            console.error('Error fetching data:', error);
            setRequestData([]); // Set empty data if API fails
        } finally {
            setLoading(false);  // Set loading to false after API call
        }
    };


    console.log("reqData:", requestData)

    // form control - to select approve/reject
    const [action, setAction] = useState('')
    const handleChange = (event) => {
        setAction(event.target.value);
    };

    const adminId = localStorage.getItem("adminId")
    console.log("AdminId", adminId);

    const [reason, setReason] = useState([])
    console.log(reason);


    //api call to approve/reject attendence list
    const handleAttendenceRequest = async (e) => {
        e.preventDefault()
        try {
            const body = {
                ...requestData,
                adminId,
                reason,
                action
            }
            console.log(body);
            const token = localStorage.getItem("token")
            const headers = {
                Authorization: `Bearer ${token}`
            }
            const response = await editAttendenceReq(body, headers)
            console.log(response);
            if (response.status === 200) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Attendence Request Updated sucessfully',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                setScrollableModal(false);
                fetchAttendenceList()
            }
        } catch (error) {
            alert('Internal server error')
        }
    }


    useEffect(() => {
        fetchAttendenceList()
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h3 style={{ color: 'black' }} className='heading px-5 mt-4 '>Attendence Request</h3>
                    <p className='heading px-5' style={{ color: '#4F4F4F' }}>Attendence / <span style={{ color: 'black', }}>Attendence Request</span></p>
                </div>
                <div className="col-6   approveBtn">
                    <p className='heading  mt-5 pt-3 '><Link to={'/attendence/approved/requets'} style={{ color: "black" }}>Approved Request</Link>   | <Link to={'/attendence/rejected/requets'} style={{ color: "black" }}>Rejected Request</Link></p>
                </div>
            </div>

            <div className="row attendencerow-1 mx-4 ">
                <di className=" col-12 ">
                    <h5 className='box-Heading my-3' style={{ fontWeight: "bold" }}>Attendance Request</h5>
                    <MDBTable responsive>
                        <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                            <tr>
                                <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Employee Name</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Employee Code</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Date</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>View</th>

                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {
                                attendenceData && attendenceData.length > 0 ? attendenceData.map((attendence, index) => (
                                    <tr key={index}>
                                        <th scope='row'>{index + 1}</th>
                                        <td>{attendence.username}</td>
                                        <td>{attendence.employeeCode}</td>
                                        <td>{attendence.date.slice(8, 10)}{attendence.date.slice(4, 8)}{attendence.date.slice(0, 4)}</td>
                                        <td>< MDBBtn size='sm' outline  color='dark' onClick={() => {
                                            handleAttendenceReq(attendence.employeeCode, attendence.date);
                                            setScrollableModal(!scrollableModal);
                                        }} >View</ MDBBtn></td>


                                    </tr>
                                )) : <td>No Pending Request</td>
                            }


                        </MDBTableBody>
                    </MDBTable>
                    <MDBModal open={scrollableModal} onClose={() => setScrollableModal(false)} tabIndex='-1'>
                        <MDBModalDialog scrollable>
                            <MDBModalContent>

                                <MDBModalHeader>
                                    <MDBModalTitle>Attendance Request</MDBModalTitle>
                                    <MDBBtn
                                        className='btn-close'
                                        color='none'
                                        onClick={() => setScrollableModal(false)}
                                    ></MDBBtn>
                                </MDBModalHeader>

                                <MDBModalBody>

                                    {loading ? (
                                        <p>Loading...</p>
                                    ) : (
                                        requestData ? (
                                            <>
                                                <p><strong>Date:</strong> {new Date(requestData.date).toLocaleDateString()}</p>
                                                <p><strong>Punch In:</strong> {new Date(requestData.punchIn).toLocaleTimeString()}</p>
                                                <p><strong>Punch Out:</strong> {requestData.punchOut ? new Date(requestData.punchOut).toLocaleTimeString() : 'N/A'}</p>
                                                <p><strong>Status:</strong> {requestData.status}</p>
                                                <p><strong>Total Work Time:</strong> {requestData.totalWorkTime} minutes</p>
                                                <p><strong>Total Break Time:</strong> {requestData.totalBreakTime} minutes</p>
                                                <p><strong>Created At:</strong> {new Date(requestData.createdAt).toLocaleString()}</p>

                                                {/* Break Times */}
                                                {requestData.breakTime && requestData.breakTime.length > 0 ? (
                                                    <>
                                                        <h5>Break Times:</h5>
                                                        {requestData.breakTime.map((breakItem, index) => (
                                                            <div key={breakItem._id}>
                                                                <p><strong>Break {index + 1}:</strong></p>
                                                                <p>Start: {new Date(breakItem.breakStart).toLocaleTimeString()}</p>
                                                                <p>End: {new Date(breakItem.breakEnd).toLocaleTimeString()}</p>
                                                                <p>Duration: {breakItem.time} minutes</p>
                                                            </div>
                                                        ))}
                                                    </>



                                                ) : (
                                                    <p>No break times found</p>
                                                )}
                                                <div className='formBox'>
                                                    <form onSubmit={handleAttendenceRequest}>
                                                    <div>
                                                            <div>
                                                                <label className='formHeading my-2'>Action</label>
                                                            </div>
                                                            <FormControl sx={{ minWidth: 200 }} size="small">
                                                                <InputLabel id="demo-select-small-label"></InputLabel>
                                                                <Select
                                                                    labelId="demo-select-small-label"
                                                                    id="demo-select-small"
                                                                    value={action}

                                                                    onChange={handleChange}
                                                                    sx={{ width: '200px' }}
                                                                >
                                                                    <MenuItem value="">
                                                                        <em>None</em>
                                                                    </MenuItem>
                                                                    <MenuItem value={"approve"}>Appprove</MenuItem>
                                                                    <MenuItem value={"reject"}>Reject</MenuItem>

                                                                </Select>
                                                            </FormControl>
                                                        </div>

                                                        <div className='mx-3'>
                                                            <label className='formHeading my-2'>Reason</label>
                                                            <MDBInput onChange={(e) => setReason(e.target.value)} id="form" type="text" />
                                                        </div>

                                                        


                                                        <MDBModalFooter>

                                                            <MDBBtn type='submit' color='dark'>Confirm</MDBBtn>
                                                        </MDBModalFooter>
                                                    </form>
                                                </div>

                                            </>
                                        ) : 'No Data Found'
                                    )}

                                </MDBModalBody>



                            </MDBModalContent>
                        </MDBModalDialog>
                    </MDBModal>

                </di>
            </div>
        </div>
    )
}

export default AttendenceRequest