import Navbar from "../Navbar";
import Sidebar from "../sidebar";
import NavTags from "../../body/NavTags";
import Videocard from "./videocard";
import axios from 'axios';

import { useEffect ,useState } from 'react';

const Home = () =>{
  const[Videos, setVideoData] = useState([]);
  
// Tags
useEffect(()=>{
  // uploadVideo();
   getVideo();
},[])


// const uploadTags = async() =>{
//   const res = await axios.post('http://127.0.0.1:5000/uploadTags',
//   {
// "name": "Music"
//   });
//   console.log(res.data)
// }



// videos
 const uploadVideo = async() =>{
  const res = await axios.post('http://127.0.0.1:5000/uploadVideo',
  {
    
    "title": "Chal Tere Ishq Mein (Female)- Gadar 2 |Utkarsh Sharma,Simratt Kaur |Vishal M,Mithoon,Neeti,Sayeed",
    "thumbnail":"https://i.ytimg.com/vi/p_oYiDR6S0E/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDv_1FflzIdfKrlFU125r9BfxArYQ",
    "duration":"10",
    "icon":"https://yt3.googleusercontent.com/RI47CWj4EneQ_IuF8YAS7lM11kdjxrVEVU164jdnMYzz-pyHRytpNqemQdwrI5jLMHA3PRmkKCo=s176-c-k-c0x00ffffff-no-rj",
    "video_url" : "https://www.youtube.com/embed/p_oYiDR6S0E?si=urqJ1vC8r0OcyJ1I",
    "channel_name":"Own",
    "type":["trending"]
    
  }
  );
  console.log(res.data)
}


 const getVideo = async()=> {
  const res = await axios.get('http://127.0.0.1:5000/allVideos');
  setVideoData(res.data.model)
console.log(res.data)
 }
 

    return(

<>
<Navbar/>
  <div className="row ">
 <div className="col-1 p-0.5 ">
    <Sidebar/></div>
    <div className="col-11 p-1">
    <NavTags/>
      <div>
        

        <div className="row ">
          {Videos && Videos.map(item => {

            return (

              <Videocard data={item}/>
              
            )
          })}

        </div> </div>
    
    </div>
   
  
    </div>
  </>
  
  
    
  
   

    );
}
export default Home