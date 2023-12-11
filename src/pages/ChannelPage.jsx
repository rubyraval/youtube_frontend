import { useEffect,useState } from "react";
// import ChannelData from '../assets/data/Channel.json';
import Navbar from "../components/header/Navbar";
import Sidebar from "../components/header/sidebar";
// import VidoeData from '../assets/data/Videocard.json';
 import Videos from '../components/UI/Video';

import axios from 'axios';

function ChannelPage(){
    const[channel, setChannel] = useState([]);
    const[videos, setVideos] = useState([]);
// video upload in channel
    useEffect(() =>{
      getChannel();
},[])
 const getChannel = async() =>{
const params=window.location.pathname.split('/')
var res = await axios.post('http://127.0.0.1:5000/getChannel',{
   id:params[1]
  // slug: slug[1]
})
setChannel(res.data.channels);


var resv =await axios.post('http://127.0.0.1:5000/getChannelVideos',{
  channel_id: res.data.channels._id
})
console.log(resv.data.videos);
setVideos(resv.data.videos);
 }



    return(
        <>
        <Navbar/>
  <div className="row ">
 <div className="col-1 p-0.5 ">
    <Sidebar/></div>
    <div className="col-11 p-0">
{/* <img src={} className="img-fluid"/> */}
    <div className="row align-items-center m-4">
    <div className="col-2">
    <img src={channel.logo} className='img-fluid rounded-pill' />
    </div>
        <div className="col-8 py-4 px-5">
        <h2>{channel.name}</h2>
        <p>{channel.slug}
        <span>18m subscriber</span>
        <span>10k videos</span></p>
        <span>{channel.description}</span>
        <span>{channel.videos}</span>
    </div>
    <div className="col-2">
        <button className="btn btn-dark rounded-pill px-4">Subscribe</button>

    </div>
    </div>


    <div className="col-12">
   <div>
  <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled</button>
    </li>
  </ul>
  <div className="tab-content" id="myTabContent">
    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
    </div></div></div>
    

    <div className="row mt-3 mx-0">
      {videos  && videos.map((item) =>{
        return(
          <div className="col-3">
            
              <Videos video={item}/>   
             </div>
        )
      })}
    </div>
  </div>
  <div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>...</div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>...</div>
  <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex={0}>...</div>
</div>
</div>
</div>
  </>

    
    )




}
export default ChannelPage
