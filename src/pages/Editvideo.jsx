 import { useEffect, useState } from "react"
import Navbar from "../components/header/Navbar"
import axios from "axios"
const Editvideo = () =>{
       const [video, setVideoData] = useState({})
      //  const[channel_id, Setchannel_id] = useState('')
       const[Thumbnail, Setthumbnail] = useState('')
       const[Title, settitle] = useState('')
   
       const[Success,SetSuccess] =useState('');
       const[Status,setstatus] =useState('');
    const[error,SetError] = useState('');

    const handleSubmit = async (e) =>{
      e.preventDefault();
      SetSuccess('');
      SetError('');
    
    if ( Thumbnail =="" ||Title =="" || Status=="" /* || channel_id==""*/)
    
    {
    SetError("please fill all fields!");
    return false;
    }
     const param= window.location.pathname.split('/Editvideo/');
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
     var res = await axios.post('http://127.0.0.1:5000/updateEditVideo',{
         Thumbnail,Title,Status,video_id: param[1],channel_id: param[1]
     });
    
     console.log(res);
    // console.log(res.channel_id)
    
    
    }
    
    



    useEffect(()=>{
        getVideo();
     },[])
   
     const getVideo = async()=> {
        const params = window.location.pathname.split('/Editvideo/');
        
        const res = await axios.post('http://127.0.0.1:5000/getEditVideo',{
            video_id: params[1],
            // channel_id: params[1]
        });
        setVideoData(res.data.video)
      console.log(res.data)
      
       }
       

       
     
      
    

    return(
        <>
       <div className=" bp-4"><Navbar/></div>
       {video && 
       <div className="card mb-3 mx-auto mt-4" style={{ width:800 }}>

{Success && <div className="alert alert-success">{Success}</div>}
{error && <div className="alert alert-danger">{error}</div>}
       
       
            {/* <div className="container-fluid "> */}
                <div className="row">
                    <div className="col-6 mx-auto text-center mt-5">
                    
<h4 className="mx-auto pb-4  text-center">Edit video </h4>
       
       {/* <div>
        <div class="container p-4 ">
        <h4 className="mb-3">Create channel Account</h4> */}
        {/* <form className=" needs-validation " noValidate="">
  <div className="row  mb-3 d-flex">
  <div class="row col-12 mb-3"> */}
  <form className="pb-4" method="post" onSubmit={handleSubmit}>
  {/* <div class="row mb-3">
    <label for="channel_id" class="col-sm-4 col-form-label">channel_id:</label>
    <div class="col-sm-8">
      <input type="text" 
      class="form-control" 
      id="channel_id"
      placeholder="channel_id"
      onKeyUp={(e)=>Setchannel_id(e.target.value)}
      
      /> */}
      {/* <div className="invalid-feedback">Your ChannelName is required.</div> */}
   
    {/* </div> */}
  {/* </div> */}
  <div class="row mb-3">
    <label for="Thumbnail" class="col-sm-4 col-form-label">Thumbnail:</label>
    <div class="col-sm-8">
      <input type="text" 
      class="form-control" 
      id="Thumbnail"
      placeholder="Thumbnail"
      onKeyUp={(e)=>Setthumbnail(e.target.value)}
      />
      {/* <div className="invalid-feedback">Your ChannelName is required.</div> */}
    </div>
  </div>

  <div class="row mb-3">
    <label for="title" class="col-sm-4 col-form-label">Title:</label>
    <div class="col-sm-8">
      <input type="text"
       class="form-control" 
       id="title"
      placeholder="title"
      onKeyUp={(e)=>settitle(e.target.value)}
      
      />
    </div>
  </div>
    
  
    
  <div class="row mb-3">
    <label for=" Description" class="col-sm-4 col-form-label"> Video URL:</label>
    <div class="col-sm-8"
     >
      <video width={200} controls src={"http://127.0.0.1:5000/videos/"+video.Video_url}></video>
  </div>
  </div>

  <div class="row mb-3">
    <label for=" Status" class="col-sm-4 col-form-label">Status: </label>
    <div class="col-sm-8">
    <select class="form-select" onChange={(e)=>setstatus(e.target.value)}  >
      <option value="" readonly> Select Status</option>
      <option value="publish"> publish</option>
      <option value="draft"> draft</option>
    </select>
    </div>
  </div>
  <button className=" btn btn-primary btn-sm " type="submit">
    Create 
  </button>
</form>
</div>

  </div>
       

</div>

}
        </>
    )
}
export default Editvideo