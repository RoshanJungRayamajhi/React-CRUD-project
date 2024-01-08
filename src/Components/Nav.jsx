import React, { useContext } from "react";
import { Productcontext } from "../utilis/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(Productcontext);
  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  let color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  };
  return (
    <>
      <nav className="w-[20%] h-full bg-zinc-200 flex flex-col items-center pt-5">
        <a
          className="px-5 py-3 border rounded-md border-blue-300 text-blue-500"
          href="/create"
        >
          Add new Product
        </a>
        <div className=" mt-2 w-[60%] h-0.5 bg-black"></div>
        <h1 className=" text-2xl w-[70%] font-semi-bold mt-2 mb-3">
          category filter
        </h1>
        <div className="w-[80%]">
          {distinct_category.map((c, i) => (
            <Link
              key={i}
              to={`/?catogery=${c}`}
              className=" px-1 mb-3 flex items-center"
            >
              <span style={{backgroundColor: color()}}

             className="w-[15px] h-[15px] bg-black  mr-2 rounded-full"
              ></span>
              {c}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Nav;
