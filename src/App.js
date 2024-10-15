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

function App() {

  const navigate = useNavigate();
  const location = useLocation()

  const isLoginPage = location.pathname === '/';

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
              navigate('/')
            } else {
              navigate(key);
            }
          }}  style={{ width: 215, height:"810px" }}
          items={[
            { label: <span style={{ fontSize: '16px' }}>Dashboard</span>, icon: <AirplayIcon />, key: "/home" },
            { label: <span style={{ fontSize: '16px' }}>ANALYSE</span>,disabled: true }, 
            { label: <span style={{ fontSize: '16px' }}>Attendance</span>, key: "/attendance", icon: <DescriptionIcon /> }, 
            { label: <span style={{ fontSize: '16px' }}>Absence</span>, key: "/absence", icon: <EventBusyIcon /> },      
            { label: <span style={{ fontSize: '16px' }}>Report</span>, key: "/report", icon: <AssignmentIcon /> },   
            { label: <span style={{ fontSize: '16px' }}>MANAGE</span>,disabled: true },     
            { label: <span style={{ fontSize: '16px' }}>Admin</span>, key: '/admin',icon:<CoPresentIcon/> },
            { label: <span style={{ fontSize: '16px' }}>Employees</span>, key: "/employees", icon: <GroupIcon /> },  
            { label: <span style={{ fontSize: '16px' }}>Designation</span>, key: '/designation',icon:<CoPresentIcon/> },
            { label: <span style={{ fontSize: '16px' }}>Works</span>, key: "/works", icon: <MenuBookIcon /> },   
            { label:  <span style={{ fontSize: '16px' }}>LOGOUT</span>, disabled: true },       
            { label: <span style={{ fontSize: '16px' }}>Logout</span>, key: "Logout", icon: <LoginIcon /> }
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
      </Routes>
    </div>
  );
}

export default App;
