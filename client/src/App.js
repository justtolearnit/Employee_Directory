import { useState } from "react";
import { useEffect } from "react";
import api from './api/directory';
import ListDirectory from "./directory/ListDirectory";
import React from "react";
import UploadDirectory from "./directory/UploadDirectory";
import directory from "./api/directory";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import EditDirectroy from "./directory/EditDirectory";
import EditDirectory from "./directory/EditDirectory";


function App() {
  const [directories, setDirectory] = useState([""]);
  const [searchTerm,setSearchTerm] = useState([]);
  const [searchResult,setSearchResult] = useState([]);

  //posttoapi
  const addEmployeeData = async (props) => {
    //{props} using curly generates id automatically
    await api.post("/directory", { ...props });

    toGetDirectories();
  }

  // getapi
  const toGetDirectories = async () => {
    const response = await api.get("/directory");
    setDirectory(response.data);
  }

  useEffect((
    toGetDirectories
  ), [])
  // getapi



  // editing
  const deleteHandler = async (props) => {
    const key = props.id;
    await api.delete(`/directory/${key}`);
    toGetDirectories();
  }

  const searchHandler = (props) =>{
    setSearchTerm(props);
    if(searchTerm !== ""){
      const newDirectories = directories.filter((directory)=>{
        return Object.values(directory).join("").toLocaleLowerCase().includes(searchTerm.toString().toLocaleLowerCase());
      });
      setSearchResult(newDirectories);
    }
    else{
      setSearchResult(directories);
    }
  }

  return (
    <div >
      
      <Router>
        <Route path="/" render={(props) => <ListDirectory {...props} directories={searchTerm < 1 ? directories : searchResult} deleteHandler={deleteHandler} searchHandler={searchHandler} term={searchTerm}/>} exact />
        <Route path="/add"> <UploadDirectory addEmployeeData={addEmployeeData} /></Route>
        <Route path="/edit" render={(props) => <EditDirectory {...props}  toGetDirectories={toGetDirectories} />} exact />
      </Router>
    </div>

  );
}

export default App;
