import axios from "axios";
import { useEffect, useState } from "react";
import bannaer from "../../assets/banner1.png";

const HotDealsforyou = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.hiring.masterkey.tech/api/v1/products?product_type=hot deals for you")
      .then((res) => setData(res.data.products[0].productData))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="container mx-auto lg:px-16 md:px-10 px-5 py-20">
      <div className="grid grid-cols-3">
        <div className="grid items-center">
          <span className="text-7xl">
            We picked some <span className="font-bold text-[#FFAE5D]">cool things</span> for you!
          </span>
        </div>
        <div className="col-span-2">
          <p className="font-bold text- border-b-2 border-dashed border-[#FFAE5D] pl-3">
            Hot Deals for you
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 py-2">
            {data.map((item) => (
              <div key={item._id}>
                <img className="mx-auto mb-10" src={item.product_img} alt="" />
                <h1 className="font-bold">{item.product_name}</h1>
                <div className="flex justify-between">
                  <p>₹{item.product_price}</p>
                  <p className="text-red-500">-{item.product_discount}%off</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img className="mt-20" src={bannaer} alt="Banner" />
    </section>
  );
};

export default HotDealsforyou;
