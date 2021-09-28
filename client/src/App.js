import { useState } from "react";
import { useEffect } from "react";
import api from './api/directory';
import ListDirectory from "./directory/ListDirectory";
import React from "react";

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
  

  return (
    <div >
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Designation" />
        <input type="text" placeholder="Number" />
        <input type="text" placeholder="Email" />
        <button>Add</button>
      </form >
      <ListDirectory directories={directories}/>
    </div>

  );
}

export default App;
