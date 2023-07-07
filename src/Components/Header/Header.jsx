import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="container mx-auto lg:px-16 md:px-10 px-5 ">
      <div className="lg:flex justify-between py-2 my-2 border-b">
        <div className="flex justify-end">
          <p className="font-semibold text-primary">Shop Cart</p>
        </div>
        <div className="flex text-primary justify-end lg:text-base text-sm lg:font-normal font-medium lg:mt-0 mt-3">
          <Link to="/">
            <p className="lg:ml-10 md:ml-5 ml-2">Home</p>
          </Link>
          <Link to="/all-products">
            <p className="lg:ml-10 md:ml-5 ml-2">All Products</p>
          </Link>
          <p className="lg:ml-10 md:ml-5 ml-2">SignIn</p>
        </div>
      </div>
      <div className="flex justify-between text-sm text-[#606060]">
        <p>Fresh</p>
        <p>Today’s Deals</p>
        <p>Mobiles</p>
        <p>Gift Cards</p>
        <p>Women Clothing</p>
        <p>Men Clothing</p>
        <p>Kids Clothing</p>
        <p>Health</p>
        <p>Pet Corner</p>
        <p>Books</p>
        <p>Beauty</p>
        <p>Kithen</p>
        <p>Bedroom</p>
        <p>Sport</p>
        <p>Bag</p>
      </div>
    </section>
  );
};

export default Header;
