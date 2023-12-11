import Navbar from "../components/header/Navbar";
import Sidebar from "../components/header/sidebar";

import axios from "axios";
// import { useEffect,useState } from "react";
 const Channels = ()=>{
// const[image, SetImage] = useState([]);

// useEffect(()=>{
//     uploadImage()
//     getImage();
// },[])

//  const Image = async() =>{
//   const res = await axios.post('http://127.0.0.1:5000/Image',   {
//  "name": "Music"
//    });
//    console.log(res.data)
//  }


// // videos
// const uploadImage = async() =>{
//     const res = await axios.post('http://127.0.0.1:5000/uploadImage',
//     {
      
      
//        "thumbnail":"https://i.ytimg.com/vi/p_oYiDR6S0E/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDv_1FflzIdfKrlFU125r9BfxArYQ",
      
//        "icon":"https://yt3.googleusercontent.com/RI47CWj4EneQ_IuF8YAS7lM11kdjxrVEVU164jdnMYzz-pyHRytpNqemQdwrI5jLMHA3PRmkKCo=s176-c-k-c0x00ffffff-no-rj",
      
//       "channel_name":"Own",
            
//     }
//     );
//     console.log(res.data)
//   }
  
  
//    const getVideo = async()=> {
//     const res = await axios.get('http://127.0.0.1:5000/Image');
//     setVideoData(res.data.model)
//   console.log(res.data)
//    }




    return(
        <>
        <Navbar/>
        <div className="row ">
 <div className="col-1 p-0.5 ">
    <Sidebar/></div>
<div className="col-11 p-0">
<h1 className="text-center ">ALL CHANNELS</h1>
<hr></hr>
<div className="row align-items-center m-4">
<div className="col-2 text-center p-4">
<img src="https://yt3.googleusercontent.com/aaCc5OWPiJooBXovYDeI8h4bK6r4aqktSe2rwckHO1ZGQ9yK2fl_FLfmh_XcT_gM2NIq9o39ZQ=s176-c-k-c0x00ffffff-no-rj-mo"className='img-fluid rounded-pill' />
<span className="text-center p-2">name</span>
<div><span className="text-center">subscribers</span></div>
<button className="btn btn-dark rounded-pill px-4">Subscribe</button>
{/* {Images && Images.map(item => {

return (

  <imagecard data={item}/>
  
)
})} */}
</div>
<hr></hr>
    </div>
    
        
    
    </div>
        </div>
        </>
    )
};
export default Channels