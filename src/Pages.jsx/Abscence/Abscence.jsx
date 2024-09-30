import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import './Absence.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
function Abscence() {
  return (
    <div className='container'>
      <h3 style={{color:'black'}} className='mainHeading mx-4 mt-4 '>Absence</h3>
      <p className='mainHeading mx-4' style={{ color: '#4F4F4F' }}>Analyse / <span style={{ color: 'black', }}>Absence</span></p>
      <div className="row row1 mx-4">
        <div className="col-12 my-3">
          <h5 className='mainHeading' style={{ fontWeight: "bold" }}>Absence Record</h5>
          <MDBTable responsive >
            <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
              <tr>
                <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                <th style={{ fontWeight: 'bold' }} scope='col'>Employee Name</th>
                <th style={{ fontWeight: 'bold' }} scope='col'>Designation</th>
                <th style={{ fontWeight: 'bold' }} scope='col'>Period</th>
                <th style={{ fontWeight: 'bold' }} scope='col'>Absence Reason</th>
                <th style={{ fontWeight: 'bold' }} scope='col'>Absence For</th>
                <th style={{ fontWeight: 'bold' }} scope='col'>Action</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <th scope='row'>1</th>
                <td>Mark</td>
                <td>BICT</td>
                <td>First</td>
                <td>Sick</td>
                <td>1 day</td>
                <td><button className='btns' style={{ color: 'green' }}><CheckBoxIcon /></button>
                  <button className='btns' style={{ color: 'red' }}> < CancelPresentationIcon /></button>
                </td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Jacob</td>
                <td>BICT</td>
                <td>First</td>
                <td>Fever</td>
                <td>1 day</td>
                <td><button className='btns' style={{ color: 'green' }}><CheckBoxIcon /></button>
                  <button className='btns' style={{ color: 'red' }}> < CancelPresentationIcon /></button>
                </td>
              </tr>

            </MDBTableBody>
          </MDBTable>

        </div>
      </div>

      <div className="row row2 my-3 mx-4">
        <div className="col-12 my-3">
          <h5 className='mainHeading' style={{ fontWeight: "bold" }}>Absence Record</h5>
          <MDBTable responsive>
            <MDBTableHead style={{ backgroundColor: "rgb(237, 241, 247)" }} >
              <tr>
                <th style={{ fontWeight: 'bold' }} scope='col'>#</th>
                <th style={{ fontWeight: 'bold' }} scope='col'>Employee Name</th>
                <th style={{ fontWeight: 'bold' }} scope='col'>Designation</th>
                <th style={{ fontWeight: 'bold' }} scope='col'>Period</th>
                <th style={{ fontWeight: 'bold' }} scope='col'>Absence Reason</th>
                <th style={{ fontWeight: 'bold' }} scope='col'>Absence For</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <th scope='row'>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>First</td>
                <td>Fever</td>
                <td>2 day</td>

              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>Second</td>
                <td>Sick</td>
                <td>1 day</td>

              </tr>

            </MDBTableBody>
          </MDBTable>

        </div>
      </div>
    </div>
  )
}

export default Abscence