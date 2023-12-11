import Dashboard from "../components/UI/Dashboard";
import Content from "../components/UI/content";
import { useEffect, useState } from "react";
import axios from "axios";
const Studiopage = () =>{
 
  const[user,setUser] = useState({});
  useEffect(()=> {
    if(localStorage.getItem('token')){
      getUser();
    }

  },[])
  const getUser = async() =>{
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    const res = await axios.get("http://127.0.0.1:5000/getUser");
    console.log(res.data);
    setUser(res.data.user);
  }



  return(
    <>
    {/* navbar */}
    <div className="row ">
<div className="col-12 d-flex  bg-light navbar-expand-lg " >
<div className="col-4">
{/* <span style={{ fontSize: 25 } }>☰</span> */}
<svg
  xmlns="http://www.w3.org/2000/svg"
  width={35}
  height={50}
  fill="grey"
  className="bi bi-list ms-3 pe-2"
  viewBox="0 0 16 16"
>
  <path
    fillRule="evenodd"
    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
  />
</svg>

  <img src="https://www.gstatic.com/youtube/img/creator/yt_studio_logo.svg" width={90} height={50} className="ms-4"/>
  

  </div>
  <div className="col-6 p-1 d-flex">

  <div className="col-1  ">
  <button
    type="button"
    id="query-input"
    autoComplete="off"
    aria-controls="results"
    className=" form-control style-scope ytcp-omnisearch border-secondary-subtle decoration-none border border-end-0 rounded-0 "
    placeholder="Search across your channel"
    aria-activedescendant="video-result--1"
    aria-expanded="true"
    style={{height:37}}
    // className="DocSearch DocSearch-Button "
    // aria-label="Search"
  >
    <span className="DocSearch-Button-Container d-center">
      <svg
        width={22}
        height={21 }
        className="DocSearch-Search-Icon"
        viewBox="0 0 24 24"
      >
        <path
          d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
          stroke="currentColor"
          fill="none"
          fillRule="evenodd"
          
          
        />
      </svg>
      
    </span>
  </button>
    
  </div>


  <div className=" col-3 bd-search "  data-bd-docs-version="5.3">
  
  <form name="searchForm">
  <input
   id="query-input"
   autoComplete="off"
   aria-controls="results"
   className=" form-control style-scope ytcp-omnisearch border-secondary-subtle  border-start-0 rounded-0"
   placeholder="Search across your channel"
   aria-activedescendant="video-result--1"
   aria-expanded="true"
    style={{width:400}}

  />
  

</form>

</div>

{/* <div className="col-2  ">

  <svg
    viewBox="0 0 25 25"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    className=" float-end"
    style={{
      width: "45%",
      height: "45%",
      fill:"grey",
    
    }}
  >
    <g className="style-scope tp-yt-iron-icon ">
      <path
        d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
        className="style-scope tp-yt-iron-icon p-2 "
      />
    </g>
  </svg>
  
</div>
 */}

</div> 


{/* add video button */}

  
<div className="col-4 p-2 d-flex">
<div className=" col-2 card ruby rounded-0 "  style={{width: "7rem",height:"2.5rem" }}>
<tp-yt-iron-icon className="inline  style-scope ytcp-button style-scope ytcp-button ">
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    className="style-scope tp-yt-iron-icon  float-start my-1 "
    style={{
      pointerEvents: "none",
      display: "block",
      width: "45%",
      height: "45%",
      
    }}
  >
    <g className="style-scope tp-yt-iron-icon">
      <path
        d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
        className="style-scope tp-yt-iron-icon"
      />
    </g>
  </svg>
  <button className="  p-1 border-0 ruby  text-red  ">Create</button>
  {/* css_build_mark:third_party.javascript.youtube_components.tp_yt_iron_icon.tp.yt.iron.icon.css.js
  {/*css_build_scope:tp-yt-iron-icon*/}
  {/*css_build_styles:third_party.javascript.youtube_components.tp_yt_iron_icon.tp.yt.iron.icon.css.js*/}
</tp-yt-iron-icon> 



      
     </div> 

    
     <div className=" col-2">
     
     <div className="mx-3 ">
      <img
  
  
  className="   rounded-circle"
  
  height={40}
  width={35}
  src="https://yt3.ggpht.com/ytc/APkrFKZMUzYu-uPvE3yuUN7Hs_Z5O3YD1bOvIqBKk9ke5262IYg0uSqfFdAylHhj7Z2W=s176-c-k-c0x00ffffff-no-rj"
/>
</div>
 </div>
</div>
  </div>
{/* navbar finish */}


    <div className=" row">
<div className="col-12 d-flex">
  {/* sidebar */}
  <div className="col-2 ">
  
    <img src="https://yt3.ggpht.com/ytc/APkrFKZMUzYu-uPvE3yuUN7Hs_Z5O3YD1bOvIqBKk9ke5262IYg0uSqfFdAylHhj7Z2W=s176-c-k-c0x00ffffff-no-rj" className='img-fluid rounded-pill mx-auto d-block' width="100px" height="100px" />
    <h6 className="text-center">your channel</h6>
    <p className="text-center">ruby</p>
    <hr/>
    <div className="d-flex  ">
  <div className="nav flex-column  nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
    
        <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
        </svg>
        Dashboard
    
    </button>
    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
      
    <svg className="me-1" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/></svg> Content
   </button>
    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
  </div>
  
</div>


  </div>
  


  <div className="tab-content" id="v-pills-tabContent">
    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex={0}><Dashboard/></div>
    <div className="tab-pane fade " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex={0}><Content/></div>
    <div className="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabIndex={0}>...</div>
    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex={0}>...</div>
    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex={0}>...</div>
    </div>
       



      





   
</div>
</div>


</div>

  

    
    
    </>
  )
}
export default Studiopage;


