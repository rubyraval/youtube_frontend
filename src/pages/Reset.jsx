 import { useState ,useEffect } from "react";
import axios from 'axios';

 import Auth from '../layouts/auth'
   

// const Reset = () =>{
//      const [password, setPassword] = useState('');
//    //   const [Confirmpassword, SetConfirmpassword] = useState('');
//    //   const [success, SetSuccess] = useState('');
//    //   const [error, SetError] = useState('');
//       const [email , setEmail] = useState('');
 
//      useEffect(() =>{
//         CheckUser();
//      },[]);
 
//      const CheckUser = async() =>{
//         const param= window.location.pathname.split('/resetpassword/');
//         axios.defaults.headers.common['Authorization'] = param[1].replace('' ,'');
//         const res = await axios.post("http://127.0.0.1:5000/checkResetPassword");
//         console.log(res.data);
//         if(res.data.status==false || res.data.msg=="token"){
//             window.location.href="/";
//         }
//      }

//   const handleSubmit = async(e) => {
//    e.preventDefault();

//   const params =window.location.pathname.split('/resetpassword');
//   axios.defaults.headers.common['Authorization'] =params[1].replace('/','');
//   const res = await axios.post("http://127.0.0.1:5000/updateResetPassword",{
//    password : password
//   })
       
//   } 

//     return (
//         <>        
//        <Auth  data={[error,success]}>
       
//         <h1>Reset Password</h1>


//        <form method='post' onSubmit={handleSubmit} className="p-3 mb-5 " >
//     {/* logo */}


// <div className="inputBox col-auto mx-auto p-2 ">
// <input
//   type="Newpassword"
//   className="form-control textbox"
//   id="exampleFormControlInput1"
//   placeholder="Enter  Password"
//   onKeyUp={(e)=> setPassword(e.target.value)}
  
// />

// </div>
// <div className="inputBox col-auto mx-auto p-2 ">
// <input
//   type="Confirmpassword"
//   className="form-control textbox"
//   id="exampleFormControlInput1"
//   placeholder="Enter Confirm Password"
//   onKeyUp={(e)=> SetConfirmpassword(e.target.value)}
  
// />

// </div>

// <div className="p-2">
  


// <input type="submit" name="continue" className="btn btn-primary w-100 border py-2" value="Continue"></input>
// </div>
// <div className="mx-auto">

// </div> 
// </form>
// </Auth>

// </>
//     )
// }

// export default Reset



const Reset = () => {


  const [Password , setPassword] = useState('')
  const [Confirmpassword , setConfirmPassword ] = useState('');


  useEffect(() => {
   CheckUser();
  },[]);

  

  const CheckUser = async() => {

   const params= window.location.pathname.split('/Reset/');
   axios.defaults.headers.common['Authorization'] = params[1].replace('/','');
   const res = await axios.post("http://127.0.0.1:5000/checkResetpassword");
   console.log(res.data);
   if(res.data.status==false || res.data.msg=="token wrong") {
    window.location.href="/";
   }
  }



 

  const handleSubmit = async(e) =>
  {
       e.preventDefault()
       const params= window.location.pathname.split('/Reset/');
       axios.defaults.headers.common['Authorization'] = params[1].replace('/','');
       const res = await axios.post("http://127.0.0.1:5000/updateResetpassword" , {
           Password : Password,
           Confirmpassword : Confirmpassword
       })
  }
    return (
        <>
<Auth>
  <form onSubmit={handleSubmit} method="post">
    <center>
        
    
    <h1 className="h3 mb-3 fw-bold ">Reset Password</h1>
    
    <div className="form-floating w-50 mb-3">
      <input
        type="password"
        className="form-control"
        id="floatingInput"
        onKeyUp={(e) => setPassword(e.target.value)} 
        placeholder="name@example.com"
      />
      <label htmlFor="floatingInput">Enter new password</label>
    </div>
    <div className="form-floating w-50 mb-3">
      <input
        type="password"
        className="form-control"
        id="floatingInput"
        onKeyUp={(e) => setConfirmPassword(e.target.value)}
        placeholder="name@example.com"
      />
      <label htmlFor="floatingInput">Confirm new password</label>
    </div>
   
   
    <button className="btn btn-danger w-50 py-2" type="submit">
      Next
    </button>
    <a href="/Signin">
        <h5 className="text-danger fw-medium mt-3 fs-6">Create New Account</h5>
    </a>
    <a href="/Login">
        <h5 className="text-danger fw-medium fs-6">Already Have An Account</h5>
    </a>
    </center>
  </form>
  </Auth>
</>
    )
}

export default Reset

