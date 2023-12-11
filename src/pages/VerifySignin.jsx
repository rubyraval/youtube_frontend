import { useState } from "react";
import axios from 'axios';


const VerifySignin = () =>{

     const [otp, SetOTP] = useState('');
     const [success, SetSuccess] = useState('');    
     const [error, SetError] = useState('');


  const handleSubmit = async(e) => {
   e.preventDefault();
   SetSuccess('');
   SetError('');

   if(otp=="" || otp<6){
    SetError("please enter 6 digit OTP!");
         return false;
   }

   try {
    axios.defaults.headers.common['Authorization']= localStorage.getItem('verify_token');
    const res = await axios.post("http://127.0.0.1:5000/verifySignin",{
      otp
     }); 
   
   if(res.data.status==true){
    localStorage.removeItem('verify_token');
    localStorage.setItem('token',res.data.token)
    SetSuccess(res.data.msg);
    
     window.location.href="/";
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
        
        <div className="container p-3 mb-5">
            

<main className="form-signin  m-auto ">

  {success && <div className="alert alert-success"> {success}</div>}
  {error && <div className="alert alert-danger"> {error}</div>}
<form className="signin   inputBox col-auto mx-auto  p-2  " onSubmit={handleSubmit}>
    <center>
        <a href="/">
    <img
      className="mb-4 p-2 mt-3 mx-auto"
      src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
      alt=""
      width={200}
      height={80}
    />

</a>
    
    <h1 className="h4 mb-3 fw-bold ">Verify OTP </h1>
    
    <div className="form-floating w-50 mt-2">
      <input
        type="number"
        className="form-control"
        id="floatingInput"
        placeholder="OTP"
        onKeyUp={(e) => SetOTP(e.target.value)}
      />
      <label htmlFor="floatingInput">OTP 6 Digit</label>
    </div>
   
  
   
    <button className="btn btn-danger w-50 py-2 mt-3" type="submit">
      Verify OTP
    </button>
    <p className=" mb-3 text-body-secondary p-2">©2017–2023</p>
    </center>
  </form>
</main>
</div>
</>
    )
}

export default VerifySignin
