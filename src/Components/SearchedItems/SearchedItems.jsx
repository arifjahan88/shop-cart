import axios from "axios";
import { useEffect, useState } from "react";
import banner from "../../assets/banner2.png";
import bannerlogo from "../../assets/banner2logo.png";

const SearchedItems = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.hiring.masterkey.tech/api/v1/products?product_type=Your searched items")
      .then((res) => setData(res.data.products[0].productData))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="container mx-auto lg:px-16 md:px-10 px-5 py-10">
      <p className="font-bold text- border-b-2 border-dashed border-[#FFAE5D] pl-3">
        Your searched items
      </p>
      <div className="flex gap-10 py-10">
        {data.map((item) => (
          <div key={item._id}>
            <img className="mx-auto mb-10" src={item.product_img} alt="" />
          </div>
        ))}
      </div>
      <div className="relative">
        <img src={banner} alt="" />
        <div className="absolute top-1/4 lg:top-1/3 left-0 lg:left-1/4">
          <img src={bannerlogo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SearchedItems;
