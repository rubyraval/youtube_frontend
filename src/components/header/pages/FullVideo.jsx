import Navbar from "../Navbar";
import { useEffect,useState } from 'react';
import VideoData from '../../../assets/data/Videocard.json';


function FullVideo(){
    const[video,setVideo] = useState({});

    useEffect(() => {
        const params= window.location.pathname.split('/FullVideo/');
    
        VideoData.forEach(item =>{
            if (item.id==params[1]) {
                // console.log(item)
                setVideo(item);
            }
        } )
    
},[])
return (
<>
<div><Navbar/></div>
<div className='row d-flex'>
    <div className='col d-flex'>
        <div className="col-1"></div>


<div className='col-7 pop ms-5 mt-3 '>
<iframe width="700" height="500" src={video.video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="border rounded-4"></iframe>
</div>
    
</div>
</div>

</>
    );

}
export default FullVideo;