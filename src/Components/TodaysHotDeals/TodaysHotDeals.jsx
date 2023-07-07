import axios from "axios";
import { useEffect, useState } from "react";

const TodaysHotDeals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.hiring.masterkey.tech/api/v1/products?product_type=Today’s hot deals")
      .then((res) => setData(res.data.products[0].productData))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="container mx-auto lg:px-16 md:px-10 px-5">
      <p className="font-bold text- border-b-2 border-dashed border-[#FFAE5D] pl-3">
        Today’s hot deals
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 py-10">
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
    </section>
  );
};

export default TodaysHotDeals;
