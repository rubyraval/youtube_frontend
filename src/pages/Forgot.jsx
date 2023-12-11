import { useState } from "react";
import axios from 'axios';
import Auth from '../layouts/auth'


const Forgot = () =>{
     const [email, SetEmail] = useState('');


  const handleSubmit = async(e) => {
   e.preventDefault();
  
const res = await axios.post("http://127.0.0.1:5000/resetPassword",{
  email: email,
})
console.log(res);
window.alert(res.data.msg)

  }
    return (
        <>        
       <Auth >
       
        <h1>Forget Password</h1>
<span className="mx-auto p-2 my-auto">Find your email</span>

 <span className="mx-auto p-2">Enter your  recovery email</span>

       <form method='post' onSubmit={handleSubmit} className="p-3 mb-5 " >
    {/* logo */}


<div className="inputBox col-auto mx-auto p-2 ">
<input
  type="email"
  className="form-control textbox"
  id="exampleFormControlInput1"
  placeholder="email"
  onKeyUp={(e)=> SetEmail(e.target.value)}
  
/>

</div>

<div className="p-2">
  <input type="submit" name="Forgot" className="btn btn-primary w-100 border py-2" value="Forgot"></input>

</div>
<a href="/CreateAccount">Create New Account</a>
<span>/</span>
<a href="/Signin">Signin</a>
</form>
</Auth>

</>
    )
}

export default Forgot















