import React from "react";
import Nav from "./Components/Nav"
import Home from "./Components/Home";
import Create from "./Components/Create";
import {Link, Route, Routes, useLocation } from "react-router-dom"
import Details from "./Components/Details"
import Edit from "./Components/Edit";
const App = () => {
  const{search ,pathname}=useLocation()
  // console.log(search)    
  // console.log(pathname)
  return (
    <div className=" h-screen w-screen flex">
      {(pathname!="/" || search.length >0) &&  <Link to="/" className="text-2xl text-red-200 px-2 absolute left-52" >Home</Link> }
       <Routes>
        <Route path="/"element={<Home/>} ></Route>
        <Route path="/create" element ={<Create/>}></Route>
        <Route path="/details/:id"element={<Details/>} ></Route>
        <Route path="/edit/:id"element={<Edit/>} ></Route>


       </Routes>
      
    </div>
  )
};

export default App;
