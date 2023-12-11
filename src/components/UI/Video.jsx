


const Video = (props) =>{
    return(
        <>
        <div className="relative card border-light">
<a href ={"/FullVideo/"+props.video._id}>
<img src= {props.video.thumbnail} className="card-img-top rounded-2" alt="" />

<div className="d-flex">
    <img src={props.video.channel_id?.logo} className="rounded-pill mt-2"
    width="41"
    height="41" border="0" alt=""/>
    <h5 className="card-title fw-bold text-black fs-6 mt-3 ms-3">{props.video.title}</h5>

</div>
</a>
<a href={"/"+props.video.channel_id?.slug} className="fw-normal text-gray fs-6 ms-5 ps-2">
    </a>
       <h5 className="fw-normal text-gray fs-6 ms-5 ps-2">23M Views.4 Days Ago</h5>
        </div>
        </>
    )
}
export default Video;