import Navbar from "../components/header/Navbar";
import Sidebar from "../components/header/sidebar";
import NowData from '../assets/data/Videocard.json';
import Now from "../components/UI/Now";
import { useEffect, useState } from "react";


const Trending = () => {
  const [Videos, SetVideos] = useState([]);
  useEffect(() =>{

    var finaldata =[];
    NowData.map( item =>{
      if (item.type[0]== "trending")
      {
        finaldata.push(item);
      }
    });
    
    SetVideos(finaldata);

  },[]);
  return  (
        <>
        <Navbar/>
  <div className="row ">
 <div className="col-1 p-0.5 ">
    <Sidebar/></div>
    <div className="col-11 p-1 ">

      {/* logo and heading */}
      <div className="col-11 p-1 d-flex">
        <div>
     <img
  id="img"
  draggable="false"
  className="style-scope yt-img-shadow  rounded-circle  p-2"
  alt=""
  width={80}
  height={80}
   style={{ height: 100 ,width: 100}}

  src="https://www.youtube.com/img/trending/avatar/trending.png"
/>

</div>

<div>
<h1 className="pt-4 mx-2"> Trending</h1>   
  </div>
  </div>


  {/* buttonsnav */}
  <div className="col-11 d-flex  ">
  <ul className="list-group list-group-horizontal  border border-0 sticky-top">
 <a href="" className="text-decoration-none"> <li className="list-group-item border border-0 fs-6 text-body-secondary fw-medium ">NOW</li></a>
 <a href="" className="text-decoration-none"> <li className="list-group-item border border-0 fs-6 text-body-secondary fw-medium">MUSIC</li></a>
 <a href="" className="text-decoration-none"> <li className="list-group-item border border-0 fs-6 text-body-secondary fw-medium">GAMING</li></a>
 <a href="" className="text-decoration-none"> <li className="list-group-item border border-0 fs-6 text-body-secondary fw-medium">FILMS</li></a>
  
</ul>

 
</div>

{/* line */}
<hr></hr>

{/* videos */}


<div className="col-11 ">

<div className=" mt-3 mx-0 ">
  <div col-4>
  {Videos && Videos.map(item => {
   
return (
<div className='col-12'>
<Now Now={item}/>
  </div>
)
})}

  </div>

         </div>
</div>
</div>


    
    </div>
   
  
    
        </>
    );
}
export default Trending