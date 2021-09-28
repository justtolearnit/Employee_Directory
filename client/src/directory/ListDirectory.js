import React from 'react';
import DirectroyCard from './DirectoryCard';

const ListDirectory = (props) =>{
   console.log(props.directories);
   const toMapDirectories = (props.directories.map((info)=>{
       const {id,name,email,number,designation} = info;
       return(
           <div>
               <h1>Name:{email}</h1>
           </div>
       )
   }))
    return(
        <div>{toMapDirectories}</div>
    )
    
}
export default ListDirectory;