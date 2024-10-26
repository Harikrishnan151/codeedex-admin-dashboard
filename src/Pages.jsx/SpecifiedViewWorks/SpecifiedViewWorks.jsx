import React, { useEffect, useState } from 'react'
import './SpecifiedViewWorks.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
import { viewWorks } from '../../services/allApi';

function SpecifiedViewWorks() {

    const {id}=useParams()
    console.log(id);
    const [works,setWorks]=useState([])

    //api call to fetch works
    const fetchWorks=async()=>{
        const token = localStorage.getItem("token")
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response=await viewWorks(id,headers)
        console.log(response.data);
        setWorks(response.data.data)
    }
    console.log(works);

    useEffect(()=>{
        fetchWorks()
    },[])
    


  return (
    <div className="container">
    <div className="row mx-2">
    <h3 style={{ color: 'black' }} className='main-Headings mx-4 mt-4 '>Works</h3>
    <p className='main-Headings mx-4' style={{ color: '#4F4F4F' }}>Manage / Works / <span style={{ color: 'black', }}>View Works</span></p>
    </div>
    <div className="row  mx-2 adminRow">
    <h5 className='mainHeading my-3' style={{ fontWeight: "bold",color:'black' }}>View Works</h5>

      <div className="col-12">
      <MDBTable responsive hover>
                      <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
                          <tr>
                          <th style={{ fontWeight: 'bold' }} scope='col'>Work Id</th>
                              <th style={{ fontWeight: 'bold' }} scope='col'>Work Name</th>
                              <th style={{ fontWeight: 'bold' }} scope='col'>Status</th>
                              <th style={{ fontWeight: 'bold' }} scope='col'>Assigned To</th>
                              <th style={{ fontWeight: 'bold' }} scope='col'>Deadline</th>
                           
                          </tr>
                      </MDBTableHead>
                      <MDBTableBody>                         
                          <tr >  
                              {/* <th scope='row'></th> */}
                              <td>{works._id}</td>
                              <td>{works.workName}</td>
                              <td>{works.status}</td>
                              <td>
    {works.assignedTo && works.assignedTo.length > 0 ? (
        works.assignedTo.map((assignment, index) => (
            <div key={assignment._id}>
                <span>{assignment.employee && assignment.employee.username ? assignment.employee.username : 'No name'}</span>
            </div>
        ))
    ) : (
        <span>No assignments</span>
    )}
</td>
                              <td>{works.deadline ? works.deadline.slice(8,10) + works.deadline.slice(4,8) + works.deadline.slice(0,4) : 'No deadline'}</td>                                                          
                          </tr> 
                      </MDBTableBody>
                  </MDBTable>

      </div>
    </div>
  </div>
  )
}

export default SpecifiedViewWorks