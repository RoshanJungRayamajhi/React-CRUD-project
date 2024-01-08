import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { Productcontext } from "../utilis/Context";
import Loading from "./Loading";
import axios from "../utilis/Axios";
const Home = () => {


const [products]=useContext(Productcontext)
const {search} = useLocation()
const category = decodeURIComponent(search.split("=")[1]);
const [productfilter, setproductfilter] = useState()

// const  getproductcategory = async()=>{
//  try {
//   const {data} = await axios.get(`/products/category/${category}`)
//  setproductfilter(data);

  
//  } catch (error) {
//   console.error(error);
  
//  }
// }
useEffect(()=>{
  if (!productfilter || category== "undefined") setproductfilter(products)
  if(category !="undefined"){ 
    // getproductcategory()
    setproductfilter(products.filter(p=>p.category === category
    ))
  };

},[category,products])

  // console.log(products);
  return (products ?
   ( <>
    <Nav />
    <div className=" w-[80%] pt-[3%] p-3 flex flex-wrap overflow-x-hidden overflow-y-auto">


     {productfilter&&productfilter.map((items,index)=>( <Link key={index} to={`/details/${items.id}`} className="mt-3 mr-3 m-1 p-5 border shadow rounded-md w-[18%] h-[30vh] flex flex-col justify-center items-center  ">
        <div 
          className=" hover:scale-[1.25] w-full h-full bg-contain bg-no-repeat bg-center mb-3"
          style={{
            backgroundImage:
              `url(${items.image})`,
          }}
        >

        </div>
        <h4 className=" hover:text-blue-400">{items.title}</h4>

      </Link>)  )     }
    </div>
  </>
  ):(
    <Loading/>
  )
  )
};

export default Home;
