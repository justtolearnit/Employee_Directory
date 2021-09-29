import { useState } from "react";
import { useEffect } from "react";
import api from './api/directory';
import ListDirectory from "./directory/ListDirectory";
import React from "react";
import UploadDirectory from "./directory/UploadDirectory";
import directory from "./api/directory";

function App() {
  const [directories, setDirectory] = useState([""])

//posttoapi
  const addEmployeeData = async (props) => {
    //{props} using curly generates id automatically
    await api.post("/directory",{...props});

    toGetDirectories();
  }

   // getapi
   const toGetDirectories = async () => {
    const response = await api.get("/directory");
    setDirectory(response.data);
  }

  useEffect((
    toGetDirectories
  ),[])
  // getapi
  


  // editing
  const editHandler = async (props) =>{
    const key = props.id;
    await api.delete(`/directory/${key}`);
    toGetDirectories();
  }

  return (
    <div >
      <UploadDirectory addEmployeeData={addEmployeeData}/>
      <ListDirectory directories={directories} editHandler={editHandler}/>
    </div>

  );
}

export default App;
