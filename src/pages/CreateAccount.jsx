 import { useState } from "react";
 import axios from 'axios';

import Auth from "../layouts/auth";

const CreateAccount = () =>{
     const [name, SetName] = useState('');
     const [email, SetEmail] = useState('');
     const [password, SetPass] = useState('');
     const [success, SetSuccess] = useState('');
     const [error, SetError]     =  useState('');

     const handleSubmit = async (e) =>{
      e.preventDefault();
      SetSuccess('');
      SetError('');
    

      if(name==" " || email==" " || password==" "){
        SetError("please fill all fields!");
        return false;
      }
      try{
      const res = await axios.post("http://127.0.0.1:5000/register",{
        name,email,password
      });
      
       if(res.data.status==true){
        localStorage.setItem('verify_token',res.data.token);
        window.location.href='/verifyRegister';
        SetSuccess(res.data.msg);
       }
       else{SetError(res.data.msg);
      }
      
     }
catch(err){
SetError(err)
}
}  

 
    return (
          <>
          <Auth title="Create Account" data={[error,success]}>
               
 <form method='post' onSubmit={handleSubmit} className="   p-3 mb-5 " >
     
  <div className="inputBox col-auto mx-auto p-2 ">
  <span className="mx-auto p-2">Enter your name</span>
  
  <input
    type="text"
    className="form-control textbox"
    id="exampleFormControlInput1"
    placeholder="name"
    
    onKeyUp={(e) => SetName(e.target.value)}
  />
  
  
   </div>


  <div className="inputBox col-auto mx-auto p-2 ">
  <span className="mx-auto p-2">Enter Email</span>
  
  <input
    type="email"
    className="form-control textbox"
    id="exampleFormControlInput1"
    placeholder="email"
    
    onKeyUp={(e) => SetEmail(e.target.value)}
  />
  
  
  
  </div>

  <div className="inputBox col-auto mx-auto p-2 ">
  <span className="mx-auto p-2">Enter Password</span>
  
  <input
    type="password"
    className="form-control textbox"
    id="exampleFormControlInput1"
    placeholder="passowrd"
    onKeyUp={(e) => SetPass(e.target.value)}
  />
  
  
  
  </div>
  <div className="p-2  justify-content-md-end ">
  <input type="submit" name="sign-in" className="btn btn-primary w-100 border py-2" value="sign in"></input>
  
  </div>
  
  </form>
  
  
  </Auth>
  </>
    
      
      )
  }
  export default CreateAccount