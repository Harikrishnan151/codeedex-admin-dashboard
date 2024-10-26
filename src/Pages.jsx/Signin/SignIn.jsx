import React, {  useState } from 'react'
import './SignIn.css'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import logo from '../images/codeedex-removebg-preview.png'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';

import {
    MDBCard,
    MDBCardBody,
} from 'mdb-react-ui-kit';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import {  useNavigate } from 'react-router-dom';
import { adminLogin } from '../../services/allApi';
import { jwtDecode } from "jwt-decode";
import { PropagateLoader } from 'react-spinners'
function SignIn() {
    const [email,setEmail]=useState([])
    const [password,setPassword]=useState([])
    const [adminData, setAdminData] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate=useNavigate()


    //Api call for admin login
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const body={email,password}
        try {
            if(!email||!password){
                alert('Please fill all the feilds')
            }else{
                setLoading(true);
                const response=await adminLogin(body)
                console.log(response)
                setLoading(false);
                if(response.status===200){
                    if(response.data.token){
                        const decode =jwtDecode(response.data.token)
                        setAdminData(decode)
                        console.log(decode);
                        localStorage.setItem("token",response.data.token)
                        localStorage.setItem("adminId",decode.id)
                        localStorage.setItem("adminName",decode.username)
                    }
                    Swal.fire({
                        title: 'Success!',
                        text: 'Login sucessfull',
                        icon: 'success', 
                        confirmButtonText: 'OK',
                      });
                     
                      setTimeout(()=>{
                        navigate('/home')
                      },200)
                }else if(response.status===401){
                    Swal.fire({
                        title: 'Incorrect Password!',
                        text: 'Password Enterd is Incorrect',
                        icon: 'error', 
                        confirmButtonText: 'OK',
                      });
                }else{
                    Swal.fire({
                        title: 'Incorrect Username!',
                        text: 'Username Entered is Incorrect',
                        icon: 'error', 
                        confirmButtonText: 'OK',
                    });
                }

            }
        } catch (error) {
            console.log(error);
            setLoading(false); 
            Swal.fire({
                title: 'Error!',
                text: 'Internal Server Error',
                icon: 'danger', 
                confirmButtonText: 'OK',
              });
            
        }
    }

    // useEffect(() => {
    //     if (adminData) {
    //       console.log('Admin data updated:', adminData);
    //     }
    //   }, [adminData]);
    return (
        <div>
        <MDBNavbar light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand tag="span" style={{ fontWeight: "bold", fontSize: 'large' }} className='mb-0 h1 mx-4'>Codeedex Technologies</MDBNavbarBrand>
            </MDBContainer>
        </MDBNavbar>
        <div className="container">
               {/* Conditionally render loader or form */}
               {loading ? (
                                <div className="loader-container">
                                    <PropagateLoader color="#000" loading={loading} size={15} />
                                </div>
                            ) :(
            <div className="row my-3">
                <div className="col-md-6 col-12 my-3">
                    <img className='logo' src={logo} alt="Codeedex logo" />
                </div>
                
                <div className="col-md-6 col-12 my-3">
                    <MDBCard>
                        <MDBCardBody className='signInform'>
                          
                                <form onSubmit={handleSubmit}>
                                    <label className='formHeading my-2'>Username</label>
                                    <MDBInput onChange={(e) => setEmail(e.target.value)} id="form1" type="text" />
                                    <label className='formHeading my-2'>Password</label>
                                    <MDBInput onChange={(e) => setPassword(e.target.value)} id="form1" type="password" />
                                    <div>
                                        <div className='my-3'>
                                            <MDBCheckbox color='black' name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                        </div>
                                        <div className='d-flex'>
                                            <MDBBtn type='submit' size='sm' color='dark'>
                                                Sign In
                                            </MDBBtn>
                                        </div>
                                    </div>
                                </form>
                            
                        </MDBCardBody>
                    </MDBCard>
                </div>
                           
            </div>
             )}
        </div>
   
    </div>
    )
}

export default SignIn