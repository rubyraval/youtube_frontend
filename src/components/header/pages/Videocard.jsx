
const Videocard = (props) =>{
    return(
<>

<div className="col-4 text-body-dark">
    <a href={"/FullVideo/"+props.data.id} className=" text-black text-decoration-none">
 <img src={props.data.thumbnail} height={250} width={350} className="p-4  rounded-5"/>
<div className="d-flex">
<div><img src={props.data.icon} width={40} height={40}/>
</div>

<div>{props.data.title}</div>
<span>{props.data.duration}</span>


</div>
</a>
</div>
</>
    );
}
export default Videocard