import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [currentpage, setcurrentpage] = useState(1);
  const [productsperpage, setproductsperpage] = useState(5);

  const indexOfLastProduct = currentpage * productsperpage;
  const indexOfFirstProduct = indexOfLastProduct - productsperpage;

  useEffect(() => {
    axios
      .get("https://api.hiring.masterkey.tech/api/v1/products")
      .then((res) => setData(res.data.products[0].productData))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="container mx-auto lg:px-16 md:px-10 px-5 py-20">
      <form className="w-full">
        <input
          onChange={(e) => setsearch(e.target.value)}
          type="search"
          id="default-search"
          className="block p-4 pl-5 text-sm text-gray-900 rounded-lg border border-gray-300 w-full focus:outline-none mb-10"
          placeholder="Search what you need"
        />
      </form>
      <p className="font-bold text- border-b-2 border-dashed border-[#FFAE5D] pl-3">All Products</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-2">
        {data
          .filter((item) => {
            return item.product_name.toLowerCase().includes(search.toLowerCase());
          })
          .slice(indexOfFirstProduct, indexOfLastProduct)
          .map((item) => (
            <div key={item._id} className="border p-2 rounded-lg">
              <img className="mx-auto mb-10" src={item.product_img} alt="" />
              <h1 className="font-bold">{item.product_name}</h1>
              <div className="flex justify-between">
                <p>₹{item.product_price}</p>
                <p className="text-red-500">-{item.product_discount}%off</p>
              </div>
            </div>
          ))}
      </div>
      <Pagination
        totalproducts={data.length}
        productsperpage={productsperpage}
        setcurrentpage={setcurrentpage}
      />
    </section>
  );
};

export default AllProducts;
