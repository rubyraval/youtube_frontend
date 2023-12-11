import React, {useState} from 'react'
import axios from 'axios';
function MyDropzone() {
    const[myfile, setMyFile] = useState();
    const handleUpload = async(e) =>{
        e.preventDefault()
        console.log(myfile)

        const formdata = new FormData()
        formdata.append('file' ,myfile[0])
        const res = await
        axios.post('http://127.0.0.1:5000/uploadfile',formdata)
        console.log(res)
    }

    return(
        <>
        <form method ='POST' onSubmit={handleUpload} encType="multipart/form-data">
         <input type='file' name='file' onChange={(e) => setMyFile(e.target.files)} />
          <button type='submit'>submit</button>
        </form>
        </>
    )
}
 export default MyDropzone