import { useState } from "react";


export const SetImage =( {setImage})=>{
    
    const [imgsrc, setImgsrc]=useState('');
    const uploadFunction=(e)=>{
        const files =e.target.files;
        console.log(files);
        setImage(e.target.files[0]);

        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload=(e)=>{

            setImgsrc(e.target.result);

        }
    }
    return(
        <div>
            <input type="file" onChange={(e)=>uploadFunction(e)} />
            <img src={imgsrc} alt='prev'/>
        </div>
    )
}