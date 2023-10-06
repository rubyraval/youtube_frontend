const Now = (props) =>{
    return(
        <>
        <div className="card border border-0 w-100 mt-3 ">
<a href={"/FullVideo/"+props.Now.id} className="d-flex w-100">
    <img src={props.Now.thumbnail} width={250} className="  border-rounded-2  " alt="..."/>
    <div className="w-100 ms-2">
        <p className="fw-medium fs-6 pb-0 mb-0 ">{props.Now.title}</p>
            <div className="d-flex">
            <p className="fw-normal mb-2">{props.Now.channel_name}</p>
            <p className="fw-normal mb-2 ms-3">{props.Now.views}</p>
            <p className="fw-normal mb-2 ms-2">{props.Now.upload_time}</p>
        </div>
        <p className="fw-normal">{props.Now.title}</p>
    </div>
</a>
        </div>
         

        </>
    )
}
export default Now;