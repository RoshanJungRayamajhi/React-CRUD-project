import React, { useContext, useEffect, useState } from "react";
import axios from "../utilis/Axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { Productcontext } from "../utilis/Context";
const Details = () => {

   const Navigate = useNavigate()
   const [products,setproducts]=useContext(Productcontext)
  const { id } = useParams();
  const [single, setsingle] = useState("");
 
 
  useEffect(() => {
    if(!single){setsingle(products.filter((p)=>p.id ==id)[0])}
  }, []);
  
  const deletehandler = (id) =>{
    const filterproducts = products.filter((p) => p.id !== id)
      setproducts(filterproducts);
      localStorage.setItem("products",JSON.stringify(filterproducts));
      Navigate("/")
  }
  // const singleproduct = async () => {
  //   try {
  //     const { data } = await axios(`/products/${id}`);
  //     setsingle(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return single ? (
    <>
      <div className="w-[70%] h-full m-auto p-[10%] flex justify-between items-center gap-10">
        <img
          className="w-[50%] h-[70%] object-contain object-center"
          src={`${single.image}`}
          alt=""
        />
        <div className="content w-[80%]">
          <h1 className="text-4xl mb-5">${single.title}</h1>
          <h2 className="text-zinc-500 mb-3">${single.category}</h2>
          <h2 className=" text-red-400 text-xl">${single.price}</h2>
          <p className=" my-3 font-normal">${single.description}</p>
          <Link to= {`/edit/${single.id}`} className=" mr-5 px-2 py-1 border rounded-md border-blue-100 text-blue-500">
            Edit
          </Link>
          <button onClick={()=>deletehandler(single.id)} className="px-2 py-1 border rounded-md border-blue-100 text-red-500">
            Delete
          </button>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Details;
