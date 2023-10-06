import { useEffect,useState } from "react";
import ChannelData from '../../../assets/data/Channel.json';
import Navbar from "../Navbar";
import Sidebar from "../sidebar";
import Videocard from "./videocard";
import VidoeData from '../../../assets/data/Videocard.json';


function ChannelPage(){
    const[channel, setChannel] = useState({});
    const[Vidoes, setVidoes] = useState([]);

    useEffect(() =>{
        getChannel();
        getVideos();
},[channel])


const getChannel = () => {
    const params= window.location.pathname.split('/c/');
       console.log(ChannelData);
       ChannelData.forEach(item =>{
        if(item.slug==params[1]){
            // console.log(item);
            setChannel(item);
        }
    })
    
       }

   const getVideos = () => {
       // console.log(channel);
       var array=[];
        VidoeData.forEach(item =>{
    if(item.channel_id==channel.id){
        array.push(item);
    }
    setVidoes(array);
})

   }

    return(
        <>
        <Navbar/>
  <div className="row ">
 <div className="col-1 p-0.5 ">
    <Sidebar/></div>
    <div className="col-11 p-0">
<img src={channel.banner_img} className="img-fluid"/>
    <div className="row align-items-center m-4">
        <div className="col-2">
        <img src={channel.logo} className='img-fluid rounded-pill' />
        </div>
        <div className="col-8 py-4 px-5">
        <h2>{channel.name}</h2>
        <p>{channel.slug}
        <span>18m subscriber</span>
        <span>10k videos</span></p>
    </div>
    <div className="col-2">
        <button className="btn btn-dark rounded-pill px-4">Subscribe</button>

    </div>
    </div>


    <div className="col-12">
    <>
  <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button
        className="nav-link active text-dark"
        id="home-tab"
        data-bs-toggle="tab"
        data-bs-target="#home-tab-pane"
        type="button"
        role="tab"
        aria-controls="home-tab-pane"
        aria-selected="true"
      >
        Home
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link text-dark"
        id="profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#profile-tab-pane"
        type="button"
        role="tab"
        aria-controls="profile-tab-pane"
        aria-selected="false"
      >
        Vidoes
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link text-dark"
        id="contact-tab"
        data-bs-toggle="tab"
        data-bs-target="#contact-tab-pane"
        type="button"
        role="tab"
        aria-controls="contact-tab-pane"
        aria-selected="false"
      >
        Shorts
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link text-dark"
        id="disabled-tab"
        data-bs-toggle="tab"
        data-bs-target="#disabled-tab-pane"
        type="button"
        role="tab"
        aria-controls="disabled-tab-pane"
        aria-selected="false"
        disabled=""
      >
        Live
      </button>
    </li>
  </ul>
  <div className="tab-content" id="myTabContent">
    <div
      className="tab-pane fade show active"
      id="home-tab-pane"
      role="tabpanel"
      aria-labelledby="home-tab"
      tabIndex={0}
    >
      ...
    </div>
    <div
      className="tab-pane fade"
      id="profile-tab-pane"
      role="tabpanel"
      aria-labelledby="profile-tab"
      tabIndex={0}
    >
        <div className="row ">
          {Vidoes && Vidoes.map(item => {

            return (

              <Videocard data={item}/>
              
            )
          })}

        </div> 
    </div>
    <div
      className="tab-pane fade"
      id="contact-tab-pane"
      role="tabpanel"
      aria-labelledby="contact-tab"
      tabIndex={0}
    >
      ...
    </div>
    <div
      className="tab-pane fade"
      id="disabled-tab-pane"
      role="tabpanel"
      aria-labelledby="disabled-tab"
      tabIndex={0}
    >
      ...
    </div>
  </div>
</>

    </div>
  
    </div>
   </div>
  
    
  </>

    
    )




}
export default ChannelPage
