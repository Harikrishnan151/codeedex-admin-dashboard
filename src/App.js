import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import SignIn from './Pages.jsx/Signin/SignIn';
import Home from './Pages.jsx/Home/Home';
import { Menu } from 'antd';
import Navbar from './Components/Navbar';
import Abscence from './Pages.jsx/Abscence/Abscence';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LoginIcon from '@mui/icons-material/Login';
import GroupIcon from '@mui/icons-material/Group';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DescriptionIcon from '@mui/icons-material/Description';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import AirplayIcon from '@mui/icons-material/Airplay';
import Attendence from './Pages.jsx/Attendence/Attendence';
import Admin from './Pages.jsx/Admin/Admin';
import AddAdmin from './Pages.jsx/AddAdmin/AddAdmin';
import 'antd/dist/reset.css'; 
import Work from './Pages.jsx/work/Work';
import Employess from './Pages.jsx/Employees/Employess';
import AddWork from './Pages.jsx/AddWork/AddWork';
import AddEmployee from './Pages.jsx/AddEmployees/AddEmployee';
import AttendenceSheet from './Pages.jsx/AttendenceSheet/AttendenceSheet';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import Designation from './Pages.jsx/designation/Designation';
import AddDesignation from './Pages.jsx/AddDesignation/AddDesignation';
import SpecifiedDesignation from './Pages.jsx/singleDesignation/SpecifiedDesignation';
import ViewEmployee from './Pages.jsx/viewEmployee/ViewEmployee';
import EditWorks from './Pages.jsx/EditWork/EditWorks';
import EditAdmin from './Pages.jsx/EditAdmin/EditAdmin';
import AttendenceRequest from './Pages.jsx/Attendence Request/AttendenceRequest';
import ApprovedAttendenceReq from './Pages.jsx/ApprovedAttendenceReq/ApprovedAttendenceReq';
import RejectedAttendenceReq from './Pages.jsx/RejectedAttendenceReq/RejectedAttendenceReq';
import LeaveReq from './Pages.jsx/LeaveReq/LeaveReq';
import ViewLeaveReq from './Pages.jsx/viewLeaveReq/ViewLeaveReq';
import ApprovedLeaveReq from './Pages.jsx/ApprovedLeaveReq/ApprovedLeaveReq';
import RejectedLeaveReq from './Pages.jsx/RejectedLeaveReq/RejectedLeaveReq';
import SpecifiedViewAdmin from './Pages.jsx/SpecifiedViewAdmin/SpecifiedViewAdmin';
import SpecifiedViewEmployee from './Pages.jsx/SpecifiedViewEmployee/SpecifiedViewEmployee';
import SpecifiedViewDesignation from './Pages.jsx/SpecifiedViewDesignation/SpecifiedViewDesignation';
import SpecifiedViewWorks from './Pages.jsx/SpecifiedViewWorks/SpecifiedViewWorks';
import ViewApprovedAttendenceReq from './Pages.jsx/SpecifiedAttendenceApprovedReq/ViewApprovedAttendenceReq';
import ViewRejectedAttendenceReq from './Pages.jsx/SpecifiedAttendenceRejectedReq/ViewRejectedAttendenceReq';
import AdminProfile from './Pages.jsx/AdminProfile/AdminProfile';
import { useEffect } from 'react';
import Swal from 'sweetalert2';


function App() {

  const navigate = useNavigate();
  const location = useLocation()

  const isLoginPage = location.pathname === '/';


  useEffect(() => {
    // Check for token on mount, if none redirect to sign-in page
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  return (
    <div>
       
      {
        !isLoginPage ? (
          
          <div>
           <Navbar/>
          <div style={{ display: 'flex', flexDirection: 'row' }} className="App" >
              
        <Menu 
          onClick={({ key }) => {
            if (key === "Logout") {
              // Handle logout functionality
              localStorage.removeItem('token');
              Swal.fire({
                title: 'Success...!',
                text: 'Signing Out',
                icon: 'success', 
                confirmButtonText: 'OK',
              });
             setTimeout(()=>{
              navigate('/')
             },3000)
            } else {
              navigate(key);
            }
          }}    style={{ 
            width: 215, 
            height: "100vh", 
            position: "sticky", 
            top: 0, 
            overflowY: "auto" 
          }}
          items={[
            { label: <span style={{ fontSize: '16px' }}>Dashboard</span>, icon: <AirplayIcon />, key: "/home" },
            { label: <span style={{ fontSize: '16px' }}>ANALYSE</span>,disabled: true }, 
            { label: <span style={{ fontSize: '16px' }}>Attendance</span>, key: "/attendance", icon: <DescriptionIcon /> }, 
            { label: <span style={{ fontSize: '16px' }}>Absence</span>, key: "/absence", icon: <EventBusyIcon /> },      
            { label: <span style={{ fontSize: '16px' }}>Leave Request</span>, key: "/leaveRequest", icon: <AssignmentIcon /> },   
            { label: <span style={{ fontSize: '16px' }}>MANAGE</span>,disabled: true },     
            { label: <span style={{ fontSize: '16px' }}>Admin</span>, key: '/admin',icon:<CoPresentIcon/> },
            { label: <span style={{ fontSize: '16px' }}>Employees</span>, key: "/employees", icon: <GroupIcon /> },  
            { label: <span style={{ fontSize: '16px' }}>Designation</span>, key: '/designation',icon:<CoPresentIcon/> },
            { label: <span style={{ fontSize: '16px' }}>Works</span>, key: "/works", icon: <MenuBookIcon /> },   
            { label:  <span style={{ fontSize: '16px' }}>LOGOUT</span>, disabled: true },       
            { label: <span  style={{ fontSize: '16px' }}>Logout</span>, key: "Logout", icon: <LoginIcon /> }
          ]}
        />
        <Content />
      </div>
      </div>
        ):(
          <Routes>
            <Route path='/' element={<SignIn/>}/>
          </Routes>
        )
      }
   
      
    </div>
  );

}

function Content() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/attendance' element={<Attendence/>} />
        <Route path='/attendanceSheet' element={<AttendenceSheet/>} />
        <Route path='/absence' element={<Abscence />} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/addAdmin' element={<AddAdmin/>} />
        <Route path='/employees' element={<Employess/>} />
        <Route path='/addEmployee' element={<AddEmployee/>} />
        <Route path='/employee/edit/:id' element={<ViewEmployee/>} />
        <Route path='/works' element={<Work/>} />
        <Route path='/addWorks' element={<AddWork/>} />
        <Route path='/report' element={<AttendenceSheet/>} />
        <Route path='/designation' element={<Designation/>} />
        <Route path='/addDesignation' element={<AddDesignation/>} />
        <Route path='/designation/:id' element={<SpecifiedDesignation/>} />
        <Route path='/edit/works/:id' element={<EditWorks/>} />
        <Route path='/edit/admin/:id' element={<EditAdmin/>} />
        <Route path='/attendence/requests' element={<AttendenceRequest/>} />
        <Route path='/attendence/approved/requets' element={<ApprovedAttendenceReq/>} />
        <Route path='/attendence/rejected/requets' element={<RejectedAttendenceReq/>} />
        <Route path='/leaveRequest' element={<LeaveReq/>} />
        <Route path='/leaveRequest/:id' element={<ViewLeaveReq/>} />
        <Route path='/leave/approved/requets' element={<ApprovedLeaveReq/>} />
        <Route path='/leave/rejected/requets' element={<RejectedLeaveReq/>} />
        <Route path='/admin/view/:id' element={<SpecifiedViewAdmin/>} />
        <Route path='/employee/view/:id' element={<SpecifiedViewEmployee/>} />
        <Route path='/designation/view/:id' element={<SpecifiedViewDesignation/>} />
        <Route path='/work/view/:id' element={<SpecifiedViewWorks/>} />
        <Route path='/attendence/approved/view/:id' element={<ViewApprovedAttendenceReq/>} />
        <Route path='/attendence/Rejected/view/:id' element={<ViewRejectedAttendenceReq/>} />
        <Route path='/admin/adminProfile' element={<AdminProfile/>} />

      </Routes>
    </div>
  );
}

export default App;
