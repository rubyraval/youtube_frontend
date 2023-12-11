import Navbar from "../components/header/Navbar"
const Membership = () =>{

    return(

        <>
<Navbar/>
<div className=" row p-2">
<div className="col ">
    <div className=" container text-center col-12 pt-4 mx-auto ">
    
<div className=" mt-2"><img  className="mx-auto  d-block p-2 img-fluid  " src="https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_logo_samsung_desktop_552x71.png" alt="" width={700}   /> </div>
<p className=" fs-1 text-body-secondary">Get YouTube & YouTube Music ad-free</p>
<a href="/Membership" className="rounded-pill  btn btn-primary  border-0 ">2 months free</a>
 <p className=" fw-normal fs-4 p-4">Prepaid and subscription plans available.Prices start at ₹129.00/month. <br/>Free trials available with subscription plans only.</p>
 <p className=" fs-3 text-secondary"> </p>
 <p className=" fw-normal text-primary "><span className="text-black">Or save money with an </span> annual, family or student plan</p>
 <h6 className=" text-primary p-4">Restrictions apply. Learn more here.</h6>
</div>

<div>
    <tr className="row container text-center pt-5 mx-auto">
        <td className="col-4 "><img src="https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_icon_feature_playtransparent_168x168.png" width={80}/>
        <br/>
        <p className="fw-normal fs-1 text-dark-emphasis">Ad-free & background play</p>
        
        <p className="fw-normal fs-5 text-secondary">Watch videos uninterrupted by ads, while using other apps, or when the screen is locked.</p>
        </td>
        <td className="col-4 "><img src="https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_icon_feature_download_168x168.png" width={80}/>
        <p className="fw-normal fs-1 text-dark-emphasis">Downloads</p>
        <br/>
        <br/>
        <br/>
        <p className=" fw-normal fs-5 text-secondary">Save videos for when you really need them – like when you’re on a plane or commuting.</p>
        </td>
        <td className="col-4"> <img src="https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_icon_feature_musicapp_168x168.png" width={80}/>
        <p className="fw-normal fs-1 text-dark-emphasis">YouTube Music Premium</p>
         
         <p className="fw-normal fs-5 text-secondary">Download our new music app and listen without interruptions.</p>
         </td>
    </tr>
</div>
<div className="card">
    <img className=" rounded-0 img-fluid" src="https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_story1_indiancoupleandroid_desktop_2880x1620.jpg" height={500} width={1400}/>
    
    <div class="card-img-overlay mx-end">
    <p class=" Ad-free card-title fw-normal text-white fs-1 text-center mx-5 ">Ad-free</p>
    <p class="Ad-free card-text text-white fs-5 fw-normal float-end ">Enjoy watching YouTube uninterrupted by ads whenever you sign in -
    <br/>on your mobile device, desktop, or enabled TV.</p>
  </div>
 </div>
 <div className="card">
 <img className=" rounded-0 img-fluid" src="https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_story2_indiadownload_desktop_2880x1620.jpg"height={500} width={1400}/>
 <div class="card-img-overlay mx-start">
    <p class=" Ad-free card-title fw-normal text-white fs-1 text-start mx-5 ">Download and go</p>
    <p class="Ad-free card-text text-white fs-5 fw-normal text-start ">Now, choose from more of your favorite videos to
    <br/>download and watch offline..</p>
  </div>
  </div>
  <div className="card">
  <img className=" rounded-0 img-fluid" src="https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_story3_indianman_bkg_desktop_2880x1620.jpg"height={500} width={1400}/>
 <div class="card-img-overlay mx-end">
    <p class=" Ad-free card-title fw-normal text-white fs-1 text-end px-5  ">Background play</p>
    <p class="Ad-free card-text text-white fs-5 fw-normal text-end mx-5">With YouTube Premium, your video plays uninterrupted
    <br/>in the background, even when you open another app.</p>
  </div>
  
</div>


</div>
</div>
        </>
    )
}
export default Membership