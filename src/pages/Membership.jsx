// import axios from 'axios';
// import { useState,useEffect } from 'react';

// const Membership = () => {

//   const [MemberShip , setMemberShip] = useState('no data');

//   useEffect(() => {
//     console.log(MemberShip);
//   }, [MemberShip]);

//   const MemberShipPlan = async(Selected) =>{
//     const res = await axios.post('http://127.0.0.1:5000/payment',
//     {
//       "plan_name":Selected
//     });
//      const x = await setMemberShip(res.data.Plan)  
//   console.log(MemberShip);
//   }

//     return (
//         <>
    
//             <div className="container-fluid bg-black ">
//                 <div className="container ">
//                     <div className="row">
//                         <div className="col-8 mx-auto">


//                     <img className="w-25" src="https://www.gstatic.com/youtube/img/unlimited/ytu_mobile_premium_logo_short_dark_310x40.png" alt="" />
//                     <p className="fw-light text-white">Individual Membership</p>
//                     </div>

//                     </div>
//                     <div className="row mx-auto ">

//                     <div className=" col-8 mx-auto ">

//                     <div className="row mx-auto text-light">
//         <p className=" fw-bold m-0 p-0 ">Pre-paid plans</p>
//         <p className="p-0">Pay up front. Top up anytime. We accept many forms of payment, including UPI.</p>
//     </div>

// <div className="  ">
    
//     <div className="row mx-auto border p-2">
//         <div className="col-6">
//         <p className="m-0 fw-bold text-light">12-month</p>
//         <p className="m-0 text-light">₹1,290.00</p>
//         </div>
//         <div className="col-6">
//         <button onClick={()=> MemberShipPlan("12 months")} className="Btn mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg></div>
//   <div className="text text-light">Buy</div> 
// </button>
// <div>
  
//   <div className="modal fade mt-5" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div className="modal-dialog">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h1 className="modal-title fs-5" id="exampleModalLabel">Complete your purchase</h1>
//           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
//         </div>
//         <div className="modal-body">
//           <div className='row'>
//             <div className='col-6'>
//               <p>YouTube Premium Membership</p>
//               <p>{MemberShip.plan_name}</p>
//               <img className='w-25' src="https://lh3.googleusercontent.com/fHAb32xEQIqF9OS96AAZkk9AcuzkJcI14UfMwEkXOwsJ6SgzXUDByGc0aVwPqouPnOeV2UweeQ=w156-rw" alt="" /> 
//             </div>
//           </div>
//         </div>
//         <div className="modal-footer">
//           <button type="button" className="btn btn-primary w-100">BUY</button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>


//         </div>
//     </div>
//     <div className="row mx-auto border p-2">
//         <div className="col-6">
//         <p className="m-0 fw-bold text-light">3-month</p>
//         <p className="m-0 text-light">₹399.00</p>
        
//         </div>
//         <div className="col-6">
//         <button className="Btn mt-2">
//   <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg></div>
//   <div className="text text-light">Buy</div>
// </button>


//         </div>
//     </div>
//     <div className="row mx-auto border p-2 mb-3 ">
//         <div className="col-6">
//         <p className="m-0 fw-bold text-light">1-month</p>
//         <p className="m-0 text-light">₹139.00</p>
        
//         </div>
//         <div className="col-6">
//         <button className="Btn mt-2">
//   <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg></div>
//   <div className="text text-light">Buy</div>
// </button>


//         </div>
//     </div>

    
//     <div className="row mx-auto">
//         <p className=" fw-bold m-0 p-0 text-light">Subscription plan</p>
//         <p className="p-0 text-light">Automatic payments such as credit cards are required. Billing recurs monthly. Cancel anytime.</p>
//     </div>

//     <div className="row mx-auto border p-2 mb-3 ">
//         <div className="col-6">
//         <p className="m-0 fw-bold text-light">Monthly subscription</p>
//         <p className="m-0 text-light">1 month free</p>
//         <p className="m-0 text-light">₹129/month after trial</p>
        
//         </div>
//         <div className="col-6">
//         <button className="Btn mt-2">
//   <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg></div>
//   <div className="text text-light">Buy</div>
// </button>


//         </div>
//     </div>
   
// </div>

//                     </div>
//                     </div>

//                 </div>
//             </div>


//         </>
//     )
// }

// export default Membership





import Navbar from "../components/header/Navbar";
import { useEffect,useState } from "react";
import axios  from "axios";




const Membership = () =>{
  
   const[Plan1 , setPlan1] = useState('');

  useEffect(()=>{
    uploadPlans();
    console.log(Plan1);
  },[Plan1]);
   
  const membershipplan = async(req,res) =>{
const res = await axios.post('http://127.0.0.1:5000/uploadPlans',

{
  "Plan_name": Selected
  // "Plan_validity":"12 Months",
  // "Plan_price": "1299"
    });
const X = await setPlan1(res.data.Plan)
console.log(Plan1);
console.log(res.data)
  }

  // const getPlans =async() =>{
  //   const res = await axios.get('http://127.0.0.1/allPlans');
  //   setPayment(res.data.model)
  //   console.log(res.data)
  // }
    return(<>
    <Navbar/>
<div className="container-fluid bg-light ">
<div className="container-sm p-5">
  <div className=" container  pt-5 ms-4 d-flex mx-auto" >
  <icon className="p-2"><svg xmlns="http://www.w3.org/2000/svg" width={30} height="50px" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 10 10">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
</svg></icon><br/><p className="fs-2 pt-3">Choose your plan</p>

  </div >
  <div className="pt-3 mx-5 "><img  className="rounded-0" src="https://gstatic.com/youtube/img/unlimited/ytu_mobile_premium_logo_short_310x40.png" width={190}/><p className="mx-4">Individual Membership</p></div>
  <div className="pt-3 mx-5 " >
<p className=" h5 fw-medium  mx-4 ">Pre-paid plans</p>
<span className="fw-normal mx-4 ">Pay up front. Top up anytime. We accept many forms of payment, including UPI.</span>
</div>
<div className="pt-3 mx-5">
<ol class="list-group list-group-numbered mx-4 " style={{width:"650px"}}>
  <li class="list-group-item d-flex justify-content-between align-items-start p-3">
    <div class="ms-2 me-auto">
      <div class="fw-bold ">12-month
Best Value</div>
₹1,290.00
    </div>
   <span  onClick={()=>Plan1("12 months")} className="badge bg-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal12month"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className=" bi bi-chevron-right" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
  </svg></span>

{/* 12month model */}
        <div className="modal fade" id="exampleModal12month" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5 mx-auto" id="exampleModal2Label">Complete your purchase</h1>
        </div>
       <div className="d-flex">
          <img src="https://lh3.googleusercontent.com/fHAb32xEQIqF9OS96AAZkk9AcuzkJcI14UfMwEkXOwsJ6SgzXUDByGc0aVwPqouPnOeV2UweeQ=w117-rw" height={100} className="p-3"/>
       <h3 className="pt-4">YouTube Premium</h3><h6 className="pt-5">membership</h6>
       </div>
       <hr></hr>
   

        <div className="modal-body d-flex"> 

<div className="align-self-start"><h4  >12-Month Plan</h4> </div>  
<div className="align-self-end"><p >Rs-1290</p></div>
   </div>

<hr></hr>

<div className="align-self-start p-2 ">
   <h5 className="p-2">Add payment method </h5> 
  
   
  <div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    <label className="form-check-label" htmlFor="flexRadioDefault1">
      Add credit card or debit card
    </label>
  </div>
  <div className="form-check my-2">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
    <label className="form-check-labeln " htmlFor="flexRadioDefault2">
      Pay by UPI or QR code
    </label>
  </div>
  </div>


</div> 
<button className="w-100 btn btn-lg btn-primary mt-2" type="button">BUY</button>

</div></div>
</div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start p-3">
    <div class="ms-2  me-auto">
      <div class="fw-bold ">3-month</div>
      ₹399.00
    </div>
    <span class="badge bg-primary rounded-pill"data-bs-toggle="modal" data-bs-target="#exampleModal3month"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>

</span>
{/* model 3month */}
<div className="modal fade" id="exampleModal3month" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5 mx-auto" id="exampleModal2Label">Complete your purchase</h1>
        </div>
        <div className="d-flex">
          <img src="https://lh3.googleusercontent.com/fHAb32xEQIqF9OS96AAZkk9AcuzkJcI14UfMwEkXOwsJ6SgzXUDByGc0aVwPqouPnOeV2UweeQ=w117-rw" height={100} className="p-3"/>
       <h3 className="pt-4">YouTube Premium</h3><h6 className="pt-5">membership</h6>
       </div>
       <hr></hr>
   

        <div className="modal-body d-flex"> 

<div className="align-self-start"><h4  >3-Month Plan</h4> </div>  
<div className="align-self-end"><p >Rs-399</p></div>
   </div>

<hr></hr>

<div className="align-self-start p-2 ">
   <h5 className="p-2">Add payment method </h5> 
  
   
  <div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    <label className="form-check-label" htmlFor="flexRadioDefault1">
      Add credit card or debit card
    </label>
  </div>
  <div className="form-check my-2">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
    <label className="form-check-labeln " htmlFor="flexRadioDefault2">
      Pay by UPI or QR code
    </label>
  </div>
  </div>


</div> 
<button className="w-100 btn btn-lg btn-primary mt-2" type="button">BUY</button>

</div></div>
</div>
  </li>
  
  <li class="list-group-item d-flex justify-content-between align-items-start p-3">
    <div class="ms-2 me-auto ">
      <div class="fw-bold ">1-month
</div>
₹139.00
    </div>
    <span class="badge bg-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal1month"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></span>
{/* model 1 month */}
        
        
        <div className="modal fade" id="exampleModal1month" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5 mx-auto" id="exampleModalLabel">Complete your purchase</h1>
        </div>
        <div className="d-flex">
          <img src="https://lh3.googleusercontent.com/fHAb32xEQIqF9OS96AAZkk9AcuzkJcI14UfMwEkXOwsJ6SgzXUDByGc0aVwPqouPnOeV2UweeQ=w117-rw" height={100} className="p-3"/>
       <h3 className="pt-4">YouTube Premium</h3><h6 className="pt-5">membership</h6>
       </div>
       <hr></hr>
   

        <div className="modal-body d-flex"> 

<div className="align-self-start"><h4  >1-Month Plan</h4> </div>  
<div className="align-self-end"><p >Rs-139</p></div>
   </div>

<hr></hr>

<div className="align-self-start p-2 ">
   <h5 className="p-2">Add payment method </h5> 
  
   
  <div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    <label className="form-check-label" htmlFor="flexRadioDefault1">
      Add credit card or debit card
    </label>
  </div>
  <div className="form-check my-2">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
    <label className="form-check-labeln " htmlFor="flexRadioDefault2">
      Pay by UPI or QR code
    </label>
  </div>
  </div>


</div> 
<button className="w-100 btn btn-lg btn-primary mt-2" type="button">BUY</button>

</div></div>
</div>
          
      
       
      
  
  </li>
</ol>
</div>
<div className="pt-3 mx-5">
<h5 className="fw-medium  mx-4">Subscription plan</h5>
<p className="fw-medium text-secondary mx-4"style={{width:"650px"}}>Automatic payments such as credit cards are required. Billing recurs monthly. Cancel anytime.</p>

<div class="card  mb-3 mx-4"style={{width:"650px"}}>
  <div class="card-body  ">
    
    <div >
    <h5 class="card-title">Monthly subscription</h5>
    <p className="text-secondary">2 months free<br/>
    ₹129/month after trial</p>
    </div>
    <div className="  text-md-end   pe-5">
      
      <a href="#" className="btn border-1 rounded-pill text-primary">2 months free</a>

</div>
    
    
  </div>

</div>

    <p className=" container-fluid mx-4 text-secondary"style={{width:"650px"}}>
    Restrictions apply to certain features and vary by device, geographical location of the user, and others. Learn more
Only first-time YouTube Red, YouTube Premium, YouTube Music Premium and Google Play Music subscribers are eligible for trials, introductory offers or promotional pricing. Except for Google Workspace Individual edition accounts, Google Workspace accounts are not eligible for trials unless they are signing up for Student subscriptions. Users can only sign up for one trial per payment method. Learn more here.
You’ll be automatically charged the price listed unless you cancel during your trial, and then every month starting on the first billing date until you cancel your subscription. Cancel anytime. No refunds or credits for partial billing periods. Refund policy
Family subscription: Invite up to 5 additional family members to join your Google family group and share your YouTube Music Premium and YouTube Premium subscription. All family members must be age 13 or older, have a Google Account, and reside in the same household as the family manager. Family subscriptions are available in select countries. Learn more
Student subscription: Sign up for either a YouTube Music Premium or YouTube Premium membership as a student and get all the same benefits at a discounted rate. YouTube student memberships are only available to full-time students at higher education institutions in select countries, and eligibility will be verified by a third-party verification service. Learn more
Pre-paid plans: You can make a single-time purchase of a YouTube Premium or YouTube Music Premium individual membership for a fixed time period on a non-recurring basis using the pre-paid plans. Once the time period you purchased ends, the pre-paid plan will automatically terminate and you will lose access to your benefits. To maintain access to your benefits, you will need to make another purchase with options provided by your billing platform or switch to a different plan. You may have up to 24 months of pre-paid access.
You may contact our support team to terminate access to the prepaid plan. Note that once your access is terminated, you will no longer have access to your benefits. No partial refunds are available. Learn more
Pre-paid plans are currently available on Android and Web in select locations. Learn more
Pre-paid plans cannot be combined with other YouTube Premium or YouTube Music Premium offers including family or student subscription and free trials. Pre-paid plans can be subject to limited time introductory offers.
Playback: You must have an Internet connection to stream videos or to download them. Supported devices
By completing your purchase, you verify that you are at least 18 years old and agree to these terms.
Price may vary by user. Google reserves the right to change the price at any time. For accepted payment methods, see here.
    </p>
  
</div>
</div>


</div>





    
    </>)
}
export default Membership