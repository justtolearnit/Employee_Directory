import React from 'react';

const ListDirectory = (props) =>{
   const toMapDirectories = (props.directories.map((info)=>{
       const {id,name,email,number,designation} = info;
       return(
           <div>
               <h1>{name}</h1>
           </div>
       )
   }))
    return(
        <div>{toMapDirectories}</div>
    )
    
}
export default ListDirectory;