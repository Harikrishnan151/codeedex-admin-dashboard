import React, { useState } from 'react';
import './Home.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  // MDBBtn
} from 'mdb-react-ui-kit';
import CircleIcon from '@mui/icons-material/Circle';
import { PiLineVerticalBold } from "react-icons/pi";
import ReactApexChart from 'react-apexcharts';
// import { RxDotFilled } from "react-icons/rx";
// import { GrPhoneVertical } from "react-icons/gr";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function Home() {



  const data = [
    {
      subject: 'Sales',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Marketing',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Developing',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Custmer Support',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Technology',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'Administration',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  const [series] = useState([
    {
      name: "Session Duration",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: "Page Views",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
      name: 'Total Visits',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
  ]);

  const [options] = useState({
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 0, 0]
    },
    title: {

      align: 'left'
    },
    legend: {

      tooltipHoverFormatter: function (val, opts) {
        return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>';

      }
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan']
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " (mins)";
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " per session";
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val;
            }
          }
        }
      ]
    },
    grid: {
      borderColor: '#f1f1f1',
    }
  });

  return (


    <div className='container'>

      <h3 style={{ color: 'black' }} className='mainHeading mx-4 mt-3'>Dashboard</h3>
      <p className='mainHeading mx-4'>Home / <span style={{ color: 'black' }}>Dashboard</span></p>

      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-md-4 col-12">
              <MDBCard style={{ boxShadow: '5px 5px 20px 5px #0129701A' }}>
                <MDBCardBody >
                  {/* <MDBCardTitle className='mainHeadings' style={{ color: 'black' }}>Abscent | <span style={{ fontSize: 'small' }}>Today</span></MDBCardTitle> */}
                  <h6 style={{ color: 'black', fontWeight: 'bold' }}>Present | <span style={{ fontSize: 'small', fontWeight: 'normal' }}>Today</span></h6>
                  <MDBCardText>
                    <div className='d-flex align-items-center justify-content-center'>
                      < CircleIcon style={{ color: 'rgb(237, 241, 247)', fontSize: '40px' }} />
                      <div >
                        <h3 className='mt-2' style={{ fontWeight: 'bold', color: 'black' }}>145</h3>
                        <p ><span style={{ fontWeight: 'bold', color: 'black' }}>12% </span>increase</p>
                      </div>
                    </div>
                  </MDBCardText>

                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col-md-4 col-12">
              <MDBCard style={{ boxShadow: '5px 5px 20px 5px #0129701A' }}>
                <MDBCardBody >
                  {/* <MDBCardTitle className='mainHeadings' style={{ color: 'black' }}>Abscent | <span style={{ fontSize: 'small' }}>Today</span></MDBCardTitle> */}
                  <h6 style={{ color: 'black', fontWeight: 'bold' }}>Abscent | <span style={{ fontSize: 'small', fontWeight: 'normal' }}>Today</span></h6>
                  <MDBCardText>
                    <div className='d-flex align-items-center justify-content-center'>
                      < CircleIcon style={{ color: 'rgb(237, 241, 247)', fontSize: '40px' }} />
                      <div >
                        <h3 className='mt-2' style={{ fontWeight: 'bold', color: 'black' }}>145</h3>
                        <p ><span style={{ fontWeight: 'bold', color: 'black' }}>12% </span>increase</p>
                      </div>
                    </div>

                  </MDBCardText>

                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col-md-4 col-12">
              <MDBCard style={{ boxShadow: '5px 5px 20px 5px #0129701A' }}>
                <MDBCardBody >
                  {/* <MDBCardTitle className='mainHeadings' style={{ color: 'black' }}>Attendence | <span style={{ fontSize: 'small' }}>Month</span></MDBCardTitle> */}
                  <h6 style={{ color: 'black', fontWeight: 'bold' }}>Attendence | <span style={{ fontSize: 'small', fontWeight: 'normal' }}>Month</span></h6>
                  <MDBCardText>
                    <div className='d-flex align-items-center justify-content-center'>
                      < CircleIcon style={{ color: 'rgb(237, 241, 247)', fontSize: '40px' }} />
                      <div >
                        <h3 className='mt-2' style={{ fontWeight: 'bold', color: 'black' }}>145</h3>
                        <p ><span style={{ fontWeight: 'bold', color: 'black' }}>12% </span>increase</p>
                      </div>
                    </div>
                  </MDBCardText>

                </MDBCardBody>
              </MDBCard>
            </div>

          </div>

        </div>

        <div className="col-lg-4 col-12 mt-4 ">
          <MDBCard className='activityCard' style={{ boxShadow: '5px 5px 20px 5px #0129701A' }} >

            <MDBCardBody >
            <MDBCardTitle className='' style={{ color: 'green' }}>Recent Activities | <span style={{ fontSize: 'small', color: 'black' }}>Today</span></MDBCardTitle>
       
              <MDBCardText >
                <span>
               <div className='my-1'>32 min <PiLineVerticalBold size={30} style={{ color: 'rgb(131, 166, 168)' }} /> Created new teacher</div> 
               <div className='my-1'>56 min <PiLineVerticalBold size={30} style={{ color: 'rgb(131, 166, 168)' }} /> Java Attendence </div>
               12 min <PiLineVerticalBold size={30} style={{ color: 'rgb(131, 166, 168)' }} />Mern Attendence  
              <span style={{color:'white'}}> 12 min <PiLineVerticalBold size={30}  />Mern Attendence</span>
               </span>
                    
                  </MDBCardText>
            </MDBCardBody>
          </MDBCard>




        </div>


      </div>
      <div className="row my-2">
        <div className="col-md-8 col-12 ">
          <MDBCard style={{ boxShadow: '5px 5px 20px 5px #0129701A' }}>
            <MDBCardBody>
              <MDBCardTitle className='mainHeading my-2' style={{ color: 'green' }}>
                Reports <span style={{ fontSize: 'small', color: 'black' }}> / Today</span>
              </MDBCardTitle>

              <div id="chart">
                <ReactApexChart options={options} series={series} type="line" height={350} />
              </div>
              <div id="html-dist"></div>

            </MDBCardBody>
          </MDBCard>

        </div>
        <div className="col-md-4 col-12   raderChart">
          <div>
            <MDBCardTitle className='my-3' style={{ color: 'green' }}>
              Attendance Report | <span style={{ fontSize: 'small', color: 'black' }}>This Month</span>
            </MDBCardTitle>
            <MDBCardText>
              <div style={{ width: '100%', height: 320 }}>
                <ResponsiveContainer width="90%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Budget" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Spend" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

            </MDBCardText>

          </div>

        </div>
      </div>



    </div>


  );
}



export default Home;
