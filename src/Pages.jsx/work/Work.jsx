import React, { useEffect, useState } from 'react'
import './Work.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { allWorks, deleteWorks } from '../../services/allApi';
import Swal from 'sweetalert2';

function Work() {

    const navigate=useNavigate()
    const [works, setWorks] = useState([])
    // Api call to fetch all works
    const fetchWorks = async () => {
        const token = localStorage.getItem("token")
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response = await allWorks(headers)
        // console.log(response);
        setWorks(response.data.data)

    }
    // console.log(works);


    //Api call to delete works
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
                    const response = await deleteWorks(id, headers);
                    // console.log(response);
                    if (response.status === 200) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "The work has been deleted.",
                            icon: "success"
                        });
                        fetchWorks()
                    }
                } catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: "There was an error deleting the works.",
                        icon: "error"
                    });
                }
            }
        });

    }

    //search
    const [search,setSearch]=useState('')
    const data = Array.isArray(works) ? works.filter(item => item.workName.toLowerCase().includes(search.toLowerCase())) : [];

    useEffect(() => {
        fetchWorks()
    }, [])
    return (
        <div className="container">
            <div className='row workRow1'>
                <div className="col-6">
                    <h3 style={{ color: 'black' }} className='mainHeading mx-4 mt-4 '>Works</h3>
                    <p className='mainHeading mx-4' style={{ color: '#4F4F4F' }}>Manage / <span style={{ color: 'black', }}>Work</span></p>

                </div>
                <div className="col-6 addBtn">
                    <Link to={'/addWorks'}>
                        <MDBBtn color='dark'>
                            Add Work
                        </MDBBtn></Link>
                </div>

            </div>

            <div className="row row1 mx-2 my-2">
                <div className="col-12 my-3 headingRow2">
                    <h5 className='mainHeading' style={{ fontWeight: "bold", color: "black" }}>Current Works</h5>
                    <div>
                        <MDBInput onChange={(e)=>setSearch(e.target.value)} label="Search"  type="text" />
                    </div>
                </div>
                <div className="col-12 my-2">
                    <MDBTable responsive hover>
                        <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                            <tr>
                                <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Work Name</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Department</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Assigned to</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Assigned Admin</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Deadline</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Status</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Edit</th>
                                <th style={{ fontWeight: 'bold' }} scope='col'>Delete</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>

                            {
                            works && works.length > 0 ? data.map((workData, index) => (
                                    <tr key={index} onClick={() => navigate(`/work/view/${workData._id}`)} style={{ cursor: 'pointer' }}>
                                        <th scope='row'>{index + 1}</th>
                                        <td>{workData.workName}</td>
                                        <td>{workData.designation.title}</td>
                                        <td>
                                            {workData.assignedTo
                                                .filter((assigned) => assigned && assigned.employee && assigned.employee.username)
                                                .map((assigned) => assigned.employee.username)
                                                .join(', ')}
                                        </td>
                                        <td>{workData.admin.email}</td>
                                        <td>{workData.deadline.slice(8, 10)}{workData.deadline.slice(4, 8)}{workData.deadline.slice(0, 4)}</td>
                                        <td>{workData.status}</td>
                                        <td><button onClick={(e) => e.stopPropagation()} className='btns mx-1' ><Link  style={{ textDecoration: 'none', color: 'inherit',backgroundColor:"inherit" }} to={`/edit/works/${workData._id}`}> <BorderColorIcon /></Link></button>

                                        </td>
                                        <td>   <button className='btns ' onClick={(e) =>{
                                            e.stopPropagation();
                                             handleDelete(workData._id)}}
                                             style={{ color: 'red' }}> < DeleteIcon /></button></td>
                                    </tr>
                                )) :<tr>No Works Found</tr>
                            }

                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>

        </div>
    )
}

export default Work