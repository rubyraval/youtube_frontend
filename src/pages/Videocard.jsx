
const Videocard = (props) =>{
    return(
<>

<div className="col-4 text-body-dark">
    <a href={"/FullVideo/"+props.data.id} className=" text-black text-decoration-none">
 <img src={props.data.thumbnail} height={300} width={350} className="p-3  rounded-5"/>
<div >
<div><img src={props.data.icon} width={40} height={40} className="p-2"/>{props.data.title}</div>
<div> 
 <iframe src={props.data.Video_url}></iframe>  
 </div>

<span>{props.data.duration}</span>


</div>
</a>
</div>
</>
    );
}
export default Videocard