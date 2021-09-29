import { useState } from "react";
import { useEffect } from "react";
import api from './api/directory';
import ListDirectory from "./directory/ListDirectory";
import React from "react";
import UploadDirectory from "./directory/UploadDirectory";
import directory from "./api/directory";

function App() {
  const [directories, setDirectory] = useState([""])


  // getapi
  const toGetDirectories = async () => {
    const response = await api.get("/directory");
    setDirectory(response.data);
  }
  useEffect(() => {
    toGetDirectories();
  }, [])
  // getapi
  

 
//Testing just to post to useState
  const addEmployeeData = (props) => {
    setDirectory([...directories,props])
  }
//Learnt to use this
//learnt about classcomponents
//learnt to use array bracket


  console.log(directories)
  return (
    <div >
      <UploadDirectory addEmployeeData={addEmployeeData}/>
      <ListDirectory directories={directories}/>
    </div>

  );
}

export default App;
