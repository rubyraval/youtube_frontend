 
const Relatedvideos = (props) =>{
   return (
        <>
        <div className="card border-0 mt-3 ">
        <a href ={"/FullVideo/"+props.video._id}>
            <div className="row">
                <div className="col-6">
        <img src={props.video.thumbnail} className="img-fluid rounded-2dev w-200"  alt=""/>
        </div>
        <div className="col-6"><p className="pb-0 ani mb-1">School Rivalry | Stand-up comedy by Devesh Dixit</p>
    <p className="mb-2 ani">Devesh Dixit </p>
    <p className="mb-0"> 3.3M </p>
    <p className="mb-2 ms-2"> </p>
    <p className=""> </p></div>
        </div>
        </a>
        
       

  </div>
        
        
        </>
    )
}
export default Relatedvideos