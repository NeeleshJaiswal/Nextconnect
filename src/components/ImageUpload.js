import React,{ useState} from 'react'

import axios from 'axios';
 const ImageUpload = ({classes,setUrl}) => {
     const [file,setFile]=useState('');
     
     const onChange = e=>{
         setFile(e.target.files[0]);
         
     }
     const onSubmit =async e=>{
         e.preventDefault();
         const formData = new FormData();
         formData.append('file',file);
        try{
           
            const res = await axios.post('http://localhost:8081/upload',formData,{
                header:{
                    'Content-Type':'multipart/form-data'
                }
            });
            console.log(res.data);
            const {file}=res.data;
            setUrl(`http://localhost:8081/image/${file.filename}`);
        }
        catch(err){
            if(err.response.status===500){
                console.log("There was a problem with the problem");
            }else{
                console.log(err.response.data.msg);
            }

        }
     }
    return (
        <form style={{margin:"1rem"}} key={2} onSubmit={onSubmit}>
       <div style={{ alignContent:"flex-start",display:"inline"}}>
                    <input type="file" id="customFile" onChange={onChange}/>
                </div>
                <input type='submit'/>
    </form>

    )
}
export default ImageUpload;



// <Fragment>
//             <form onSubmit={onSubmit}>
//                 <div className="custom-file mb-4">
//                     <input type="file" className="custom-file-input" id="customFile" onChange={onChange}/>
//                     <label className="custom-file-label" htmlFor="customFile">{filename}</label>
//                 </div>
//                 <input type='submit' className='btn btn-primary btn-block mt-4'/>
//             </form>
//         </Fragment>