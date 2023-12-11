import axios from 'axios';
import { useState,useEffect } from 'react';

const Member2 = () => {

  const [MemberShip , setMemberShip] = useState('no data');

  useEffect(() => {
    console.log(MemberShip);
  }, [MemberShip]);

  const MemberShipPlan = async(Selected) =>{
    const res = await axios.post('http://127.0.0.1:5000/payment',
    {
      "plan_name":Selected
    });
     const x = await setMemberShip(res.data.Plan)  
  console.log(MemberShip);
  }

    return (
        <>
    
            <div className="container-fluid bg-black ">
                <div className="container ">
                    <div className="row">
                        <div className="col-8 mx-auto">


                    <img className="w-25" src="https://www.gstatic.com/youtube/img/unlimited/ytu_mobile_premium_logo_short_dark_310x40.png" alt="" />
                    <p className="fw-light text-white">Individual Membership</p>
                    </div>

                    </div>
                    <div className="row mx-auto ">

                    <div className=" col-8 mx-auto ">

                    <div className="row mx-auto text-light">
        <p className=" fw-bold m-0 p-0 ">Pre-paid plans</p>
        <p className="p-0">Pay up front. Top up anytime. We accept many forms of payment, including UPI.</p>
    </div>

<div className="  ">
    
    <div className="row mx-auto border p-2">
        <div className="col-6">
        <p className="m-0 fw-bold text-light">12-month</p>
        <p className="m-0 text-light">₹1,290.00</p>
        </div>
        <div className="col-6">
        <button onClick={()=> MemberShipPlan("12 months")} className="Btn mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg></div>
  <div className="text text-light">Buy</div> 
</button>
<div>
  
  <div className="modal fade mt-5" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Complete your purchase</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className='row'>
            <div className='col-6'>
              <p>YouTube Premium Membership</p>
              <p>{MemberShip.plan_name}</p>
              <img className='w-25' src="https://lh3.googleusercontent.com/fHAb32xEQIqF9OS96AAZkk9AcuzkJcI14UfMwEkXOwsJ6SgzXUDByGc0aVwPqouPnOeV2UweeQ=w156-rw" alt="" /> 
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary w-100">BUY</button>
        </div>
      </div>
    </div>
  </div>
</div>


        </div>
    </div>
    <div className="row mx-auto border p-2">
        <div className="col-6">
        <p className="m-0 fw-bold text-light">3-month</p>
        <p className="m-0 text-light">₹399.00</p>
        
        </div>
        <div className="col-6">
        <button className="Btn mt-2">
  <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg></div>
  <div className="text text-light">Buy</div>
</button>


        </div>
    </div>
    <div className="row mx-auto border p-2 mb-3 ">
        <div className="col-6">
        <p className="m-0 fw-bold text-light">1-month</p>
        <p className="m-0 text-light">₹139.00</p>
        
        </div>
        <div className="col-6">
        <button className="Btn mt-2">
  <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg></div>
  <div className="text text-light">Buy</div>
</button>


        </div>
    </div>

    
    <div className="row mx-auto">
        <p className=" fw-bold m-0 p-0 text-light">Subscription plan</p>
        <p className="p-0 text-light">Automatic payments such as credit cards are required. Billing recurs monthly. Cancel anytime.</p>
    </div>

    <div className="row mx-auto border p-2 mb-3 ">
        <div className="col-6">
        <p className="m-0 fw-bold text-light">Monthly subscription</p>
        <p className="m-0 text-light">1 month free</p>
        <p className="m-0 text-light">₹129/month after trial</p>
        
        </div>
        <div className="col-6">
        <button className="Btn mt-2">
  <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg></div>
  <div className="text text-light">Buy</div>
</button>


        </div>
    </div>
   
</div>

                    </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Member2
