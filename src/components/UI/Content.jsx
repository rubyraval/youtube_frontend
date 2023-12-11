import Videocard from "../../pages/Videocard";
import axios from "axios"

import { useEffect, useState } from "react"

const Content = () =>{

const [Videos,setVideodata] = useState([]);

useEffect(() => {
  getVideo();

},[])

const getVideo = async () =>{
  const res = await
  axios.get('http://127.0.0.1:5000/allstudiovideos',);
  setVideodata(res.data.model)
  console.log(res.data);
}





 return(
  <>
  <div className="col-10 ms-2 mt-2">
    <h3>Channel Content</h3>
   <div className=" p-3 flex-column flex-lg-row ">
  <ul className="nav nav-tabs flex-lg-fill  " id="myTab" role="tablist">
    <li className="nav-item flex-lg-fill" role="presentation">
      <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
    </li>
    <li className="nav-item flex-lg-fill" role="presentation">
      <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Live</button>
    </li>
    <li className="nav-item flex-lg-fill" role="presentation">
      <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Playlists</button>
    </li>
    <li className="nav-item flex-lg-fill" role="presentation">
      <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Podcast</button>
    </li>
    <li className="nav-item flex-lg-fill" role="presentation">
      <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Promotions</button>
    </li>
    <li className="nav-item flex-lg-fill" role="presentation">
      <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Beta</button>
    </li>
    <li className="nav-item flex-lg-fill" role="presentation">
      <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>desable</button>
    </li> 
  </ul>
  </div>
  
  <div className="tab-content " id="myTabContent">
    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
    
<table className="table table-bordered mt-2">
<tr className="">
<th>#</th>
<th>URL</th>
<th>Status</th>

</tr>
{Videos && Videos.map((item,index) =>{
  return(
    <tr className="">
<td className="p-1">{index}</td>

<td className="p-1">{item.Video_url}</td>
<td className="p-1">{item.status}</td>
<a href={"/Editvideo/"+item._id} className="btn mt-2">Edit</a>

  
  </tr>
  )
})}

</table>



    </div>
    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>..</div>
    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>...</div>
    <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex={0}>...</div>
    <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex={0}>...</div>
  
  </div>

  </div>
  </>
 )
}
export default Content