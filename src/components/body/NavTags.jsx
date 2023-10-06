import { useEffect,useState } from "react";
import axios from 'axios';
const NavTags = () =>{
const [tags, setTags] = useState([]);

     useEffect(()=>{
      //  uploadTags();
         getTags();
     },[])

// const uploadTags = async() =>{
//   const res = await axios.post('http://127.0.0.1:5000/uploadTags',
//   {
// "name": "PHP"

//   });
//   console.log(res.data)
// }

    

const getTags = async() =>{
  const res = await axios.get('http://127.0.0.1:5000/allTags');
  setTags(res.data.model)
console.log(res.data)
}


    
return(
<>
<div className="tags-container" style={{ backgroundColor: "#ffffff	" }}>
        

        {tags && tags.map((item) => {

          return (
            <a 
              href="#"
              
              className="btn  gap-1 mx-2 px-2 border-0  "
              style={{ backgroundColor: " #F1F1F1" }}>
              
            
              {item.name}
            </a>

          )

        })}

      </div>
  

        </>
    )

  



}
export default NavTags;