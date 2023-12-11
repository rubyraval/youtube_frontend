import { useState } from "react";
import axios from 'axios';

import Auth from '../layouts/auth';

const Signin = () =>{
     const [email, SetEmail] = useState('');
     const [password, SetPass] = useState('');
     const [success, SetSuccess] = useState('');
     const [error, SetError] = useState('');


  const handleSubmit = async(e) => {
   e.preventDefault();
   SetSuccess('');
   SetError('');

   if(email=="" || password==""){
    SetError("please fill all fields!");
         return false;
   }

   try {

    const res = await axios.post("http://127.0.0.1:5000/login",{
      email , password
     }); 

//     


   
   if(res.data.status==true){
     localStorage.setItem('token',res.data.token); //it will not use here
    localStorage.setItem('verify_token',res.data.token);
    window.location.href='/verifyOTP';
    SetSuccess(res.data.msg);

   }else{
    SetError(res.data.msg);

   }

   }

   catch(err ) {
    SetError(err)

   }
       
  } 

    return (
        <>    
       <Auth title="Login Account" data={[error,success]}>
        
       <h2 className="mx-auto p-2">
        <div className="mx-auto p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person gap-2" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
      
        </div>
        </h2>
        <h1>Signin</h1>
        <span className="mx-auto ">to continue to YouTube</span>
       <form method='post' onSubmit={handleSubmit} className="p-3 mb-5 " >
    {/* logo */}


<div className="inputBox col-auto mx-auto p-2 ">
<input
  type="email"
  className="form-control textbox"
  id="exampleFormControlInput1"
  placeholder="enter Email id"
  onKeyUp={(e)=> SetEmail(e.target.value)}
  
/>



</div>
<div className="inputBox col-auto p-2 mx-auto ">
<input
  type="password"
  id="inputPassword5"
  className="form-control textbox"
  aria-describedby="passwordHelpBlock"
  placeholder="password"
  onKeyUp={(e) => SetPass(e.target.value)}
  
/>



</div>

<div className="p-2">
  
<a href="/Forgot" className="align-items-start p-3 "> Forgot email?</a>

<input type="submit" name="sign-in" className="btn btn-primary w-100 border py-2" value="signin"></input>
</div>
<div className="mx-auto">
<a href="/CreateAccount" className="mx-auto ">
  Create account
</a>
</div> 
</form>
</Auth>

</>
    );
}

export default Signin;































// import{ useState } from 'react';
// import axios from 'axios';
// // import Users from '../../../assets/data/Users.json';

// const Signin = () =>{
 

//  const[email, SetEmail] =useState('');
//  const[password, SetPass] =useState('');
//  const[success, SetSuccess] =useState('');
//  const[error, SetError] =useState('');


// const handleSubmit = async(e) => {
//   e.preventDefault();
//   SetSuccess('');
//   SetError('');
  

//   if(email=="" || password==""){
//     SetError("please fill email and password!");
//   return false;
//   }

//   try{
//     const res = await axios.post("http://127.0.0.1:5000/login",{
//       email,password
//     });

    

//     if(res.data.status==true){
//       localStorage.setItem('token',res.data.token);
//       SetSuccess(res.data.msg);
//     }
//     else{
//       SetError(res.data.msg);
//     }
//   }
//   catch(err){
//     SetError(err)
//   }
// }

//   Users.forEach(user =>{
// //     if(email==user.email && password==user.password){
// //       localStorage.setItem('user',user.id);
// //       window.location.href="/";
// //     }else{
// //       SetError("User Not FOUND!");
// //     }
// //   });

// // };

// // const handleSubmit = async (e) => {
// //   e.preventDefault();
// //     const res = await axios.get("http://127.0.0.1:5000/Signin",{
// //      email,password
// //     });
// //   console.log(res);
// // } 
// return(
// <>

// 
// </>
//     );
// }
// export default Signin ;




