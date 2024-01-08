import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { Productcontext } from "../utilis/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [products, setproducts] = useContext(Productcontext);
  const Navigate = useNavigate();
  const [product, setproduct] = useState({
    image: "",
    title: "",
    price: "",
    category: "",
    description: "",
  });
  // const changehandler = (e)=>{
  //   console.log(e.target.value,e.target.name)
  //   setproduct({...product,[e.target.name]:e.target.value})

  // }
  const changehandler = (e) => {
    // console.log(e.target.value, e.target.name);
    const { name, value } = e.target;
    setproduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  const editproduct = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 &&
      product.image.trim().length < 5 &&
      product.category.trim().length < 5 &&
      product.description.trim().length < 5 &&
      product.price.trim().length < 1
    ) {
      alert("no field is less than 5 characters");
      return;
    }
    const pi = products.findIndex((p) => p.id == id);
    console.log(product, pi);
    const copyData = [...products];
    copyData[pi] = { ...products[pi], ...product };
    // console.log(copyData);
    setproducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    Navigate(-1);
    // const product = {
    //   id: nanoid(),
    //   image,
    //   title,
    //   price,
    //   category,
    //   descriiption,
    // };
    // setproducts([...products, product]);

    //
    // Navigate("/");
  };

  // console.log(products)
  return (
    <>
      <form
        onSubmit={editproduct}
        className=" flex flex-col items-center w-full h-full p-10"
      >
        <h1 className=" text-2xl font-semi-bold mb-5">Edit New products</h1>
        <input
          className=" w-1/2 mb-3 text-xl font-medium border border-sky-500  rounded-md px-2"
          type="URL"
          placeholder="image"
          name="image"
          onChange={changehandler}
          value={product && product.image}
        />
        <input
          className=" w-1/2 mb-3 text-xl font-medium border border-sky-500  rounded-md px-2"
          type="text"
          placeholder="Title"
          name="title"
          onChange={changehandler}
          value={product && product.title}
        />
        <div className=" w-1/2 flex justify-between gap-20 ">
          <input
            className=" w-full mb-3 text-xl font-medium border border-sky-500  rounded-md px-2"
            type="text"
            placeholder="category"
            name="category"
            onChange={changehandler}
            value={product && product.category}
          />

          <input
            className="w-full  mb-3 text-xl font-medium border border-sky-500  rounded-md px-2"
            type="number"
            placeholder="price"
            name="price"
            onChange={changehandler}
            value={product && product.price}
          />
        </div>
        <textarea
          className=" w-1/2 border outline-blue-300 mb-3"
          onChange={changehandler}
          name="description"
          rows="10"
          value={product && product.description}
        ></textarea>

        <div className=" w-1/2 p-2">
          <button className=" bg-blue-200 px-2 py-2 border rounded-full border-blue-300 font-semibold text-black">
            Edit Product
          </button>
        </div>
      </form>
    </>
  );
};

export default Edit;
