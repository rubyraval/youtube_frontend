// import { useState } from "react";
// import axios from 'axios';

// import Auth from '../layouts/auth'


// const Forgot = () =>{
//      const [email, SetEmail] = useState('');
//      const [success, SetSuccess] = useState('');
//      const [error, SetError] = useState('');


//   const handleSubmit = async(e) => {
//    e.preventDefault();
//    SetSuccess('');
//    SetError('');

//    if(email==""){
//     SetError("please fill emailid!");
//          return false;
//    }

//    try {

//     const res = await axios.post("http://127.0.0.1:5000/Forgot",{
//       email 
//      }); 

// //     


   
//    if(res.data.status==true){
//     // localStorage.setItem('token',res.data.token); //it will not use here
//     localStorage.setItem('verify_token',res.data.token);
//     window.location.href='/Forgot';
//     SetSuccess(res.data.msg);

//    }else{
//     SetError(res.data.msg);

//    }

//    }

//    catch(err ) {
//     SetError(err)

//    }
       
//   } 

//     return (
//         <>        
//        <Auth  data={[error,success]}>
       
//         <h1>Forget Password</h1>
// <span className="mx-auto p-2 my-auto">Find your email</span>

//  <span className="mx-auto p-2">Enter your  recovery email</span>

//        <form method='post' onSubmit={handleSubmit} className="p-3 mb-5 " >
//     {/* logo */}


// <div className="inputBox col-auto mx-auto p-2 ">
// <input
//   type="email"
//   className="form-control textbox"
//   id="exampleFormControlInput1"
//   placeholder="email"
//   onKeyUp={(e)=> SetEmail(e.target.value)}
  
// />

// </div>

// <div className="p-2">
  


// <input type="submit" name="Forgot" className="btn btn-primary w-100 border py-2" value="Forgot"></input>
// </div>
// <div className="mx-auto">

// </div> 
// </form>
// </Auth>

// </>
//     )
// }

// export default Forgot















