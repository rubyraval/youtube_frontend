import { useState } from "react";
import axios from 'axios';



import Navbar from "../components/header/Navbar";
import Sidebar from "../components/header/sidebar";




const Studio = () => {

const[channelname, SetName] = useState('');
const[banner, Setbanner] = useState('');
const[logo, SetLogo] = useState('');
const[description, SetDesc] = useState('');
const[status, SetStatus] = useState('');
const[Success,SetSuccess] =useState('');
const[error,SetError] = useState('');



 
const handleSubmit = async (e) =>{
  e.preventDefault();
  SetSuccess('');
  SetError('');

if ( channelname =="" || banner=="" || logo=="" || description=="" || status=="")

{
SetError("please fill all fields!");
return false;
}
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
 var res = await axios.post('http://127.0.0.1:5000/createStudio',{
      channelname,banner,logo,description,status
 });

 console.log(res);



}



    return(
        <>
       <div className=" bp-4"><Navbar/></div>
       <div className="card mb-3 mx-auto mt-4" style={{ width:800 }}>

{Success && <div className="alert alert-success">{Success}</div>}
{error && <div className="alert alert-danger">{error}</div>}
       
            {/* <div className="container-fluid "> */}
                <div className="row">
                    <div className="col-6 mx-auto text-center mt-5">
                    <h2 className="mx-auto p-2">
<div className="mx-auto pt-1">
<img
      className="mb-4"
      src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
      alt=""
      width={200}
      height={80}
    />
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>


</div>
</h2>
<h4 className="mx-auto pb-4 text-center">Create video channel</h4>
       
       {/* <div>
        <div class="container p-4 ">
        <h4 className="mb-3">Create channel Account</h4> */}
        {/* <form className=" needs-validation " noValidate="">
  <div className="row  mb-3 d-flex">
  <div class="row col-12 mb-3"> */}
  <form className="pb-4" method="post" onSubmit={handleSubmit}>
    
  <div class="row mb-3">
    <label for="ChannelName" class="col-sm-4 col-form-label">ChannelName:</label>
    <div class="col-sm-8">
      <input type="text" 
      class="form-control" 
      id="ChannelName"
        placeholder="enter channel name"
        onKeyUp={(e)=>SetName(e.target.value)}
      />
      {/* <div className="invalid-feedback">Your ChannelName is required.</div> */}
    </div>
  </div>

  <div class="row mb-3">
    <label for="Image" class="col-sm-4 col-form-label">Image:</label>
    <div class="col-sm-8">
      <input type="text"
       class="form-control" 
       id="Image"
      placeholder="upload channel image"
      onKeyUp={(e)=>Setbanner(e.target.value)}
      
      />
    </div>
  </div>
    
  <div class="row mb-3">
    <label for=" Logo" class="col-sm-4 col-form-label"> Logo:</label>
    <div class="col-sm-8">
      <input type="text" 
      class="form-control" 
      id=" Logo"
     placeholder="upload channel Logo"
     onKeyUp={(e)=>SetLogo(e.target.value)}

      />
    </div>
  </div>
    
  <div class="row mb-3">
    <label for=" Description" class="col-sm-4 col-form-label"> Description:</label>
    <div class="col-sm-8">
      <input type="text" 
      class="form-control"
       id=" Description"
       placeholder="please enter channel Description"
       onKeyUp={(e)=>SetDesc(e.target.value)}
      />
    </div>
  </div>

  <div class="row mb-3">
    <label for=" Status" class="col-sm-4 col-form-label">Status: </label>
    <div class="col-sm-8">
    <select class="form-select"  onChange={(e)=>SetStatus(e.target.value)}>
      <option value="" readonly> Select Status</option>
      <option value="active"> Active</option>
      <option value="inactive"> inActive</option>
    </select>
    </div>
  </div>
  <button className=" btn btn-primary btn-sm " type="submit">
    Create Channel
  </button>
</form>
</div>

  </div>
       

</div>
{/* </div> */}


        </>
    );
}
export default Studio 