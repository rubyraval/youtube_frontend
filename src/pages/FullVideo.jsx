import Navbar from "../components/header/Navbar";
import { useEffect,useState } from 'react';
import axios from "axios";
// import Video from "../components/UI/Video";
import Relatedvideo from "./Relatedvideo";

 
 
 
 const FullVideo = () =>{
    const[videos, setVideoData] = useState({});
    const[RelVideo, setRelVideo] = useState([]);

 useEffect(()=>{
     getVideo();
     getRecentvideos();
  },[])

  const getRecentvideos = async() =>{
    const res = await axios.get('http://127.0.0.1:5000/getRecentvideos',);
    setRelVideo(res.data.video)
    
    console.log(res.data);
  }


    const getVideo = async()=> {
    const params = window.location.pathname.split('/FullVideo/');
    
    const res = await axios.post('http://127.0.0.1:5000/getVideos',{
        video_id: params[1]
    });
    setVideoData(res.data.videos)
  console.log(res.data)
   }
   


return (
<>
<div><Navbar/></div>
<div className='row d-flex'>
    <div className='col d-flex'>
        <div className="col-1"></div>


<div className='col-7 pop ms-5 mt-3 '>
<iframe width="700" height="500" src={"http://localhost:5000/videos/"+videos.Video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="border rounded-4"></iframe>

</div>
  <div className="col-3   ">
{RelVideo && RelVideo.map(item =>{
  return(
    <div className="col-12">
    <Relatedvideo video= {item}/>
    </div>
  )
})}
          
    </div>  
</div>
</div>

</>
    );

}
export default FullVideo;