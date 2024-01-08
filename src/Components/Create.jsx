import React, { useContext, useState } from "react";
import { Productcontext } from "../utilis/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const Navigate = useNavigate();
  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  const [products, setproducts] = useContext(Productcontext);
  const Addproduct = (e) => {
    e.preventDefault();

    if (
      title.trim().length > 5 &&
      image.trim().length > 5 &&
      category.trim().length > 5 &&
      description.trim().length > 5 &&
      price.trim().length < 10
    ) {
      const product = {
        id: nanoid(),
        image,
        title,
        price,
        category,
        description,
      };
      setproducts([...products, product]);

      localStorage.setItem("products", JSON.stringify([...products, product]));
    } else alert("no field is less than 5 characters");

    Navigate("/");
    toast.success("product addded successfully");
  };

  return (
    <form
      onSubmit={Addproduct}
      className=" flex flex-col items-center w-full h-full p-10"
    >
      <h1 className=" text-2xl font-semi-bold mb-5">Add New products</h1>
      <input
        className=" w-1/2 mb-3 text-xl font-medium border border-sky-500  rounded-md px-2"
        type="URL"
        placeholder="image"
        onChange={(e) => setimage(e.target.value)}
      />
      <input
        className=" w-1/2 mb-3 text-xl font-medium border border-sky-500  rounded-md px-2"
        type="text"
        placeholder="Title"
        onChange={(e) => settitle(e.target.value)}
      />
      <div className=" w-1/2 flex justify-between gap-20 ">
        <input
          className=" w-full mb-3 text-xl font-medium border border-sky-500  rounded-md px-2"
          type="text"
          placeholder="category"
          onChange={(e) => setcategory(e.target.value)}
        />

        <input
          className="w-full  mb-3 text-xl font-medium border border-sky-500  rounded-md px-2"
          type="number"
          placeholder="price"
          onChange={(e) => setprice(e.target.value)}
        />
      </div>
      <textarea
        className=" w-1/2 border outline-blue-300 mb-3"
        onChange={(e) =>setdescription(e.target.value)}
        rows="10"
      ></textarea>

      <div className=" w-1/2 p-2">
        <button className=" bg-blue-200 px-2 py-2 border rounded-full border-blue-300 font-semibold text-black">
          Add new Product
        </button>
      </div>
    </form>
  );
};

export default Create;
